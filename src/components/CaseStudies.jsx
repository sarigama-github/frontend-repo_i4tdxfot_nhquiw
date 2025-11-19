import { motion } from "framer-motion";

const cases = [
  {
    client: "Nova Retail",
    industry: "E-commerce",
    title: "Virtuele agent verlaagt responstijd met 62%",
    metrics: [
      { label: "CSAT", value: "+18%" },
      { label: "First Response", value: "-62%" },
      { label: "Uren/maand bespaard", value: 450 },
    ],
  },
  {
    client: "FinOptima",
    industry: "Finance",
    title: "Document parsing versnelt rapportage met 70%",
    metrics: [
      { label: "Rapportagetijd", value: "-70%" },
      { label: "Nauwkeurigheid", value: "+2.3%" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold text-white sm:text-4xl"
        >
          Klantensucces
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-6"
            >
              <div className="flex items-center justify-between text-slate-300">
                <div className="text-xs uppercase tracking-wider text-slate-400">{c.industry}</div>
                <div className="text-sm font-medium">{c.client}</div>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">{c.title}</h3>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {c.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-2xl font-semibold text-white">{m.value}</div>
                    <div className="text-xs text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
