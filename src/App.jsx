import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#home" className="text-sm font-semibold tracking-wide text-white">
          <span className="text-yellow-400">Solar</span> Blaze Media
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#results" className="hover:text-white">Results</a>
          <a href="#contact" className="rounded-md bg-yellow-400 px-3 py-2 font-medium text-black hover:bg-yellow-300">Get a Free Quote</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-10">
        <p className="text-sm text-white/60">© {year} Solar Blaze Media. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-white/60">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
