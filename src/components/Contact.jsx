import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // For this static demo, just simulate success
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Thanks! We will reach out shortly.');
      form.reset();
    }, 800);
  };

  return (
    <section id="contact" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Contact</h2>
          <p className="mt-3 text-white/70">
            Have a campaign you want to scale? Share a few details and we’ll get back within one business day.
          </p>
          <p className="mt-2 text-sm text-white/60">Email: hello@solarblazemedia.com</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label className="text-sm text-white/70">Name</label>
            <input name="name" required className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-yellow-400/50" placeholder="Jane Doe" />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm text-white/70">Email</label>
            <input name="email" type="email" required className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-yellow-400/50" placeholder="you@company.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-white/70">Company</label>
            <input name="company" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-yellow-400/50" placeholder="SolarCo" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-white/70">Project details</label>
            <textarea name="message" rows="4" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-yellow-400/50" placeholder="Goals, timeline, budget..." />
          </div>
          <div className="sm:col-span-2 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50">
              Get a Free Quote
            </button>
            {status && <span className="text-sm text-white/70">{status}</span>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
