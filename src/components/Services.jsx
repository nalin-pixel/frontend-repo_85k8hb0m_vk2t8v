import { motion } from 'framer-motion';
import { Target, LineChart, Settings } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Facebook Ad Management',
    desc: 'Full-funnel campaign creation, creative testing, and budget optimization to consistently lower CAC and increase qualified pipeline.'
  },
  {
    icon: LineChart,
    title: 'Lead Generation Systems',
    desc: 'Landing pages, forms, and automations engineered to capture and route high-intent leads to your sales team in real time.'
  },
  {
    icon: Settings,
    title: 'Strategy & Analytics',
    desc: 'Offer strategy, audience development, tracking architecture, and weekly reporting for actionable clarity on performance.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">Services</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Clear, ROI-focused execution across paid social to help you capture demand and scale with confidence.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6"
            >
              <s.icon className="h-6 w-6 text-yellow-400" />
              <h3 className="mt-4 text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
