import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/95" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200 backdrop-blur-md"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-violet-400" />
          AI Automation Agency
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-slate-50 to-slate-300 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Slimme automatisering met impact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-300"
        >
          We ontwerpen, bouwen en schalen AI-oplossingen die processen versnellen, kosten verlagen en groei versnellen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={onCTAClick} className="group rounded-full bg-violet-500/90 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300">
            Ontdek onze oplossingen
          </button>
          <a href="#cases" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:bg-white/10">Bekijk cases</a>
        </motion.div>
      </div>
    </section>
  );
}
