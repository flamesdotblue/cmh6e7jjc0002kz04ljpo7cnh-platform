import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0 overflow-hidden">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(124,58,237,0.25),transparent_60%),radial-gradient(60%_50%_at_80%_30%,rgba(99,102,241,0.20),transparent_60%),radial-gradient(60%_50%_at_20%_40%,rgba(6,182,212,0.18),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-28 pb-20 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
          Building, learning, and shipping fast
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I'm <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">techw_annabe</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          A 16-year-old builder from India exploring web, design, and AI. I love crafting modern, animated interfaces and playful experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-cyan-500 px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-900/20 transition hover:scale-[1.02] active:scale-[0.99]">
            <Rocket size={16} /> Start a convo
          </a>
          <a href="#about" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
