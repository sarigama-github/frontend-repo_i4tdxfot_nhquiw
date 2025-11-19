import { useRef } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProcessQuiz from "./components/ProcessQuiz";
import CaseStudies from "./components/CaseStudies";
import Chatbot from "./components/Chatbot";

function App() {
  const dienstenRef = useRef(null);
  const scrollToDiensten = () => {
    document.getElementById("diensten")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold text-white">AURAAI</div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#diensten" className="hover:text-white">Diensten</a>
            <a href="#cases" className="hover:text-white">Cases</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-violet-500/90 px-4 py-2 text-sm font-medium text-white hover:bg-violet-400">Plan intake</a>
        </div>
      </header>

      <Hero onCTAClick={scrollToDiensten} />
      <Features ref={dienstenRef} />
      <ProcessQuiz />
      <CaseStudies />
      <Chatbot />

      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-slate-400">© {new Date().getFullYear()} AURAAI — Alle rechten voorbehouden.</p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Voorwaarden</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
