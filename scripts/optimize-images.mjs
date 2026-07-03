/**
 * Image Optimization Script
 *
 * Converts all PNG images in public/images to optimized WebP format.
 * Resizes large images to max 1200px width while maintaining aspect ratio.
 *
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from "sharp";
import { readdir, stat, rename, mkdir } from "fs/promises";
import { join, extname, basename } from "path";

const PUBLIC_IMAGES = "public/images";
const BACKUP_DIR = "public/images/_originals";
const MAX_WIDTH = 1200;
const QUALITY = 80;

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "_originals") {
      files.push(...(await getAllImages(fullPath)));
    } else if (
      entry.isFile() &&
      [".png", ".jpg", ".jpeg"].includes(extname(entry.name).toLowerCase())
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(filePath) {
  const fileName = basename(filePath);
  const fileStat = await stat(filePath);
  const originalSizeMB = (fileStat.size / 1024 / 1024).toFixed(2);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = image;

    // Resize if wider than MAX_WIDTH
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: "inside",
      });
    }

    // Convert to WebP
    const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
    await pipeline.webp({ quality: QUALITY }).toFile(webpPath);

    // Also optimize the original PNG (for fallback)
    await sharp(filePath)
      .resize(MAX_WIDTH, null, { withoutEnlargement: true, fit: "inside" })
      .png({ quality: QUALITY, compressionLevel: 9 })
      .toFile(filePath + ".tmp");

    // Backup original, replace with optimized
    const backupSubDir = filePath
      .replace(PUBLIC_IMAGES + "\\", "")
      .replace(PUBLIC_IMAGES + "/", "");
    const backupPath = join(
      BACKUP_DIR,
      backupSubDir.includes("/") || backupSubDir.includes("\\")
        ? backupSubDir.substring(
            0,
            Math.max(backupSubDir.lastIndexOf("/"), backupSubDir.lastIndexOf("\\"))
          )
        : ""
    );
    await mkdir(backupPath, { recursive: true });
    await rename(filePath, join(BACKUP_DIR, backupSubDir));
    await rename(filePath + ".tmp", filePath);

    const newStat = await stat(filePath);
    const newSizeMB = (newStat.size / 1024 / 1024).toFixed(2);
    const webpStat = await stat(webpPath);
    const webpSizeMB = (webpStat.size / 1024 / 1024).toFixed(2);

    console.log(
      `✅ ${fileName}: ${originalSizeMB}MB → PNG: ${newSizeMB}MB | WebP: ${webpSizeMB}MB`
    );
  } catch (err) {
    console.error(`❌ ${fileName}: ${err.message}`);
  }
}

async function main() {
  console.log("🔍 Scanning for images...\n");

  const images = await getAllImages(PUBLIC_IMAGES);
  console.log(`Found ${images.length} images to optimize\n`);

  await mkdir(BACKUP_DIR, { recursive: true });

  for (const img of images) {
    await optimizeImage(img);
  }

  console.log("\n✨ Done! Originals backed up to public/images/_originals/");
  console.log(
    "💡 Remember to update image references in code if switching to .webp"
  );
}

main().catch(console.error);
