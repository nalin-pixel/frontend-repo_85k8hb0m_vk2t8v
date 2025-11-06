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

export default function CaseStudies() {
  return (
    <section id="results" className="relative bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">Case Studies & Results</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            A snapshot of outcomes we deliver across industries. Ask us for the full breakdown and references.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6"
            >
              <div className="text-4xl font-semibold text-yellow-400">{c.stat}</div>
              <div className="mt-2 text-lg font-medium">{c.label}</div>
              <div className="mt-1 text-sm text-white/70">{c.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
