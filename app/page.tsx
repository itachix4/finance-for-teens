"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  durationMs = 900,
}: {
  value: number
  prefix?: string
  suffix?: string
  durationMs?: number
}) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const from = display
    const to = value

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      const next = Math.round(from + (to - from) * eased)
      setDisplay(next)
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const formatted = useMemo(() => display.toLocaleString(), [display])

  return (
    <span className="tabular-nums">
      {prefix}{formatted}{suffix}
    </span>
  )
}

export default function Home() {
  // Example “headline stats” for counters (you can change these later)
  const usersHelped = 12000
  const avgReturn = 12
  const lessons = 40

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 py-20">
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-20 h-[420px] w-[420px] rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-24 h-[520px] w-[520px] rounded-full bg-emerald-300/25 blur-3xl" />

      <section className="relative mx-auto max-w-6xl">
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900"
          >
            Build Wealth Before 25.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-slate-600"
          >
            Premium finance education + tools for teenagers who want a serious head start.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            {/* Animated gradient button */}
            <a
              href="/tools"
              className="gradient-btn rounded-2xl px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Try Tools
            </a>

            <a
              href="/about"
              className="rounded-2xl px-8 py-4 font-semibold text-emerald-700 border border-emerald-300 bg-white/70 backdrop-blur-md hover:bg-emerald-50 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* COUNTERS (animated numbers) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-slate-900">
              <AnimatedCounter value={usersHelped} suffix="+" />
            </div>
            <div className="mt-1 text-slate-600">Teens learning money</div>
          </div>

          <div className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-slate-900">
              <AnimatedCounter value={avgReturn} suffix="%+" />
            </div>
            <div className="mt-1 text-slate-600">Return explained clearly</div>
          </div>

          <div className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-slate-900">
              <AnimatedCounter value={lessons} suffix="+" />
            </div>
            <div className="mt-1 text-slate-600">Bite-sized lessons</div>
          </div>
        </motion.div>

        {/* GLASS CARDS */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Invest Early",
              desc: "Starting early gives you a 5–10 year advantage over most people.",
            },
            {
              title: "Understand Compounding",
              desc: "See how small monthly investments turn into big money over time.",
            },
            {
              title: "Use Real Tools",
              desc: "SIP calculators, charts, goal planners — built for teens.",
            },
          ].map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="rounded-3xl border border-white/40 bg-white/55 backdrop-blur-xl shadow-lg p-8"
            >
              <div className="text-xl font-semibold text-slate-900">{c.title}</div>
              <div className="mt-3 text-slate-600">{c.desc}</div>

              <div className="mt-6 h-px bg-gradient-to-r from-emerald-200 via-cyan-200 to-transparent" />
              <div className="mt-4 text-sm text-emerald-700 font-medium">
                Explore →
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Premium CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-16 rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <div className="text-2xl font-bold text-slate-900">
              Ready to build your first teen portfolio?
            </div>
            <div className="mt-1 text-slate-600">
              Start with tools, then learn strategies step-by-step.
            </div>
          </div>

          <a
            href="/tools"
            className="gradient-btn rounded-2xl px-7 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Open Tools
          </a>
        </motion.div>
      </section>
    </main>
  )
}