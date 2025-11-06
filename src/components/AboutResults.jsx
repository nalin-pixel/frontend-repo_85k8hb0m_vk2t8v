import { motion } from 'framer-motion';

const cases = [
  {
    stat: '5.4x',
    label: 'Return on Ad Spend',
    note: 'Solar installer — Q2 cohort'
  },
  {
    stat: '−38%',
    label: 'Cost per Qualified Lead',
    note: 'Commercial HVAC — 60-day sprint'
  },
  {
    stat: '+212%',
    label: 'Pipeline Velocity',
    note: 'Energy audit services — 90 days'
  }
];

export default function AboutResults() {
  return (
    <section id="about" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold sm:text-4xl">About Solar Blaze Media</h2>
            <p className="mt-4 text-white/80">
              We’re a specialist paid social partner for solar and commercial companies. Our team blends creative strategy with rigorous data discipline to consistently produce profitable customer acquisition.
            </p>
            <p className="mt-3 text-white/70">
              From offer development to attribution, we treat growth as a system. The result is predictable lead flow, transparent reporting, and the confidence to scale.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>• Mission: Growth powered by clarity, performance, and creative rigor.</li>
              <li>• Why us: Niche expertise in solar and commercial B2B, clean processes, senior-level stewardship.</li>
              <li>• What you get: Weekly reporting and a relentless focus on revenue outcomes.</li>
            </ul>
          </motion.div>

          <motion.div
            id="results"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <div className="mb-5">
              <h3 className="text-2xl font-semibold">Case Studies & Results</h3>
              <p className="mt-2 text-white/70">A snapshot of outcomes across client engagements.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {cases.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="rounded-xl border border-white/10 bg-gradient-to-b from-cyan-500/10 via-white/5 to-transparent p-6 shadow-[0_0_50px_-20px_rgba(34,211,238,0.5)]"
                >
                  <div className="text-4xl font-semibold text-cyan-400">{c.stat}</div>
                  <div className="mt-2 text-lg font-medium">{c.label}</div>
                  <div className="mt-1 text-sm text-white/70">{c.note}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
