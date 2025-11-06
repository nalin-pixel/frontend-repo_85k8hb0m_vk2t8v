import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  const headline = useMemo(
    () => (
      <>
        Data-Driven Growth for
        <span className="block text-cyan-400">Paid Social at Scale</span>
      </>
    ),
    []
  );

  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/XuAg4PYWfzmy0iW1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-start justify-center px-6 py-24 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80 backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-red-500" />
            Solar Blaze Media • Facebook & Social Ads
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            We launch and optimize campaigns that turn attention into qualified pipeline for solar and commercial brands. Precise strategy, creative rigor, and measurable outcomes.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/40"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
