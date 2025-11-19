import { motion } from "framer-motion";
import { Brain, Workflow, MessageSquare, BarChart3, Sparkles, Shield } from "lucide-react";

const features = [
  { icon: Brain, title: "Machine Learning", desc: "Voorspellende modellen en aanbevelers die realtime leren.", accent: "from-violet-500 to-indigo-500" },
  { icon: MessageSquare, title: "Natural Language", desc: "Conversatie AI, classificatie en semantisch zoeken.", accent: "from-fuchsia-500 to-pink-500" },
  { icon: Workflow, title: "RPA & Integraties", desc: "Robotica en flows die systemen naadloos verbinden.", accent: "from-sky-500 to-cyan-500" },
  { icon: BarChart3, title: "Analytics", desc: "Dashboards en KPI’s die impact zichtbaar maken.", accent: "from-emerald-500 to-teal-500" },
  { icon: Sparkles, title: "Marketing Automation", desc: "Personalisatie en journeys voor hogere conversie.", accent: "from-amber-500 to-orange-500" },
  { icon: Shield, title: "Security & MLOps", desc: "Governance, monitoring en betrouwbare uitrol.", accent: "from-slate-500 to-slate-400" },
];

export default function Features() {
  return (
    <section id="diensten" className="relative bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold text-white sm:text-4xl"
        >
          Oplossingen die werken voor jouw bedrijf
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-6 shadow-xl backdrop-blur-sm hover:border-white/20"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-lg shadow-black/30`}>
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-slate-300">{f.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <button className="mt-4 text-sm font-medium text-violet-300 underline-offset-4 hover:text-violet-200 hover:underline">
                Meer informatie
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
