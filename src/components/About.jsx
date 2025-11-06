import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid items-start gap-10 md:grid-cols-2">
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-yellow-500/10 via-white/5 to-transparent p-6"
          >
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                • Mission: Help businesses grow through high-clarity strategy and performance-driven creative.
              </li>
              <li>
                • Why us: Niche expertise in solar and commercial B2B, clean processes, and senior-level communication.
              </li>
              <li>
                • What you get: Dedicated team, weekly reporting, and a relentless focus on revenue outcomes.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
