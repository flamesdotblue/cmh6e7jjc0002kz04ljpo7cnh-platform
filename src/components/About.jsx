import React from 'react';
import { Star, Sparkles } from 'lucide-react';

const skills = [
  { name: 'React + Vite', level: 'Comfortable' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'Animations', level: 'Loves it' },
  { name: 'Design Systems', level: 'Learning' },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-20">
      <div className="mb-8 flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-400" />
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-white/80">
              I'm techw_annabe (16, India). I enjoy designing modern GUIs with smooth animations and bold gradients.
              Inspired by next‑gen UI kits and motion libraries, I build fast prototypes and expressive interactions.
            </p>
            <p className="mt-4 text-white/70">
              I experiment with patterns like glass morphism, animated blobs, and card-driven layouts. I also care about accessibility, performance, and clean component architecture.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-indigo-600/20 to-cyan-500/20 px-3 py-2 text-sm">
              <Sparkles size={16} className="text-fuchsia-300" />
              Open to small collaborations and fun ideas.
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-sm font-medium text-white/80">Skills snapshot</h3>
            <ul className="space-y-3">
              {skills.map((s) => (
                <li key={s.name} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <span className="inline-flex items-center gap-2"><Star size={14} className="text-yellow-300" /> {s.name}</span>
                  <span className="text-xs text-white/60">{s.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
