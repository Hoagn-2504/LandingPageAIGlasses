export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="container flex h-20 items-center justify-between">
        <h1 className="text-2xl font-bold">NOVA</h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#features">Features</a>
          <a href="#specs">Specs</a>
          <a href="#gallery">Gallery</a>
          <a href="#faq">FAQ</a>
        </nav>

        <button className="rounded-full bg-blue-600 px-6 py-3 transition hover:bg-blue-500">
          Buy Now
        </button>
      </div>
    </header>
  );
}
