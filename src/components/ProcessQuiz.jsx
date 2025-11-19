import { useState } from "react";

export default function ProcessQuiz() {
  const [form, setForm] = useState({ industry: "ecommerce", company_size: "smb", primary_goal: "support" });
  const [loading, setLoading] = useState(false);
  const [recs, setRecs] = useState([]);
  const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/recommend`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setRecs(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">Vind de juiste AI-oplossing</h2>
        <p className="mt-2 text-center text-slate-300">Beantwoord 3 korte vragen en ontvang een voorstel op maat.</p>

        <form onSubmit={onSubmit} className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <select className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-slate-200 focus:outline-none" value={form.industry} onChange={(e)=>setForm({ ...form, industry: e.target.value })}>
            <option value="ecommerce">E-commerce</option>
            <option value="finance">Finance</option>
            <option value="saas">SaaS</option>
            <option value="healthcare">Healthcare</option>
          </select>
          <select className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-slate-200 focus:outline-none" value={form.company_size} onChange={(e)=>setForm({ ...form, company_size: e.target.value })}>
            <option value="startup">Startup</option>
            <option value="smb">SMB</option>
            <option value="midmarket">Mid-market</option>
            <option value="enterprise">Enterprise</option>
          </select>
          <select className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-slate-200 focus:outline-none" value={form.primary_goal} onChange={(e)=>setForm({ ...form, primary_goal: e.target.value })}>
            <option value="support">Support</option>
            <option value="marketing">Marketing</option>
            <option value="analytics">Analytics</option>
            <option value="operations">Operations</option>
          </select>
          <button type="submit" className="col-span-1 rounded-lg bg-violet-500/90 px-4 py-3 font-medium text-white hover:bg-violet-400 sm:col-span-3">{loading ? 'Bezig...' : 'Ontvang aanbevelingen'}</button>
        </form>

        {recs?.length > 0 && (
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {recs.map((r) => (
              <div key={r.title} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">
                <div className="text-sm text-violet-300">{r.icon}</div>
                <div className="mt-1 font-semibold">{r.title}</div>
                <div className="mt-1 text-sm text-slate-300">{r.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
