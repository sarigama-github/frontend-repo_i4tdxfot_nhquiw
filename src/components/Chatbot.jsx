import { useEffect, useRef, useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([{ role: "bot", text: "Hi! Ik help je met vragen over AI-automatisering." }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const API_BASE = import.meta.env.VITE_BACKEND_URL || "";
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = async () => {
    if (!input.trim()) return;
    const newMsgs = [...messages, { role: "user", text: input }];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/chatbot`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: input })});
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (e) {
      setMessages((prev) => [...prev, { role: "bot", text: "Er ging iets mis, probeer later opnieuw." }]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } };

  return (
    <section id="contact" className="bg-slate-950 px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Chat met onze AI-assistent</h2>
          <p className="mt-2 text-slate-300">Krijg direct antwoord of laat je doorverwijzen naar de juiste expert.</p>
          <div className="mt-6 h-64 overflow-y-auto rounded-xl border border-white/10 bg-white/5 p-4">
            {messages.map((m, i) => (
              <div key={i} className={`mb-3 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${m.role === 'user' ? 'bg-violet-500/80 text-white' : 'bg-white/10 text-slate-100'} max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-sm`}>{m.text}</div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="mt-3 flex gap-2">
            <textarea value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={onKeyDown} rows={2} className="flex-1 resize-none rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 focus:outline-none" placeholder="Stel hier je vraag..." />
            <button onClick={send} className="rounded-xl bg-violet-500/90 px-4 py-2 font-medium text-white hover:bg-violet-400">{loading ? '...' : 'Stuur'}</button>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-6 text-slate-300">
          <h3 className="text-xl font-semibold text-white">Waarom wij</h3>
          <ul className="mt-4 space-y-3">
            <li>• Meetbare KPI’s met realtime dashboards</li>
            <li>• Security-first, MLOps best practices</li>
            <li>• Snelle pilots en bewezen schaalbaarheid</li>
            <li>• Integraties met jouw tools en data</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
