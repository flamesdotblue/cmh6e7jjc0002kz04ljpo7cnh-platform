import React from 'react';
import { Mail, Github, Home } from 'lucide-react';

function BrandLogo() {
  // Custom "anime-aura" styled logo (local SVG, no external fetch)
  return (
    <div className="relative h-9 w-9 shrink-0">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#a855f7"/>
            <stop offset="50%" stopColor="#6366f1"/>
            <stop offset="100%" stopColor="#06b6d4"/>
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#g1)" filter="url(#glow)" />
        <path d="M60 120 Q100 60 140 120" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="10" strokeLinecap="round"/>
        <path d="M70 120 Q100 90 130 120" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="6" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#home" className="group flex items-center gap-3">
          <BrandLogo />
          <div>
            <div className="text-base font-semibold tracking-tight">techw_annabe</div>
            <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">Age 16 • India</div>
          </div>
        </a>

        <nav className="flex items-center gap-2 md:gap-3">
          <a href="#home" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition">
            <Home size={16} /> Home
          </a>
          <a href="#about" className="hidden md:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition">
            About
          </a>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition">
            <Mail size={16} /> Contact
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-gradient-to-r from-fuchsia-600/40 via-indigo-600/40 to-cyan-500/40 px-3 py-2 text-sm hover:from-fuchsia-600/60 hover:via-indigo-600/60 hover:to-cyan-500/60 transition">
            <Github size={16} /> GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
