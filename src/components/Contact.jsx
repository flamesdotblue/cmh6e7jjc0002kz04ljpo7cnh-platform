import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('Hello from your website');

  const email = 'techwannabeee@gmail.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = href;
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-20">
      <div className="mb-8 flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500" />
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Let's connect</h3>
          <p className="mt-2 text-sm text-white/70">
            Prefer email? Reach me at
            <a className="ml-1 inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white/90 hover:bg-white/10 transition" href={`mailto:${email}`}>
              <Mail size={14} /> {email}
            </a>
          </p>
          <p className="mt-2 text-xs text-white/50">No phone number is shared on this site.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <div>
              <label className="mb-2 block text-sm text-white/80">Subject</label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-md border border-white/10 bg-neutral-900/70 px-3 py-2 text-sm outline-none ring-0 focus:border-fuchsia-400/60"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/80">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full resize-y rounded-md border border-white/10 bg-neutral-900/70 px-3 py-2 text-sm outline-none focus:border-cyan-400/60"
                placeholder="Write something..."
              />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-cyan-500 px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-900/20 transition hover:scale-[1.02] active:scale-[0.99]">
              <Send size={16} /> Send
            </button>
          </form>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">What I can help with</h3>
          <ul className="mt-3 space-y-3">
            <li className="rounded-lg border border-white/10 bg-neutral-900/50 p-3 text-sm">Landing pages with modern animations and gradient-driven aesthetics.</li>
            <li className="rounded-lg border border-white/10 bg-neutral-900/50 p-3 text-sm">Component-based React apps with clean structure.</li>
            <li className="rounded-lg border border-white/10 bg-neutral-900/50 p-3 text-sm">UI refinements: spacing, typography, and motion.</li>
          </ul>
          <div className="mt-6 rounded-lg border border-white/10 bg-gradient-to-r from-fuchsia-600/10 via-indigo-600/10 to-cyan-500/10 p-4 text-sm text-white/80">
            Availability: Part-time, student schedule.
          </div>
        </div>
      </div>
    </section>
  );
}
