"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">

      <section className="max-w-5xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-gray-900 mb-6"
        >
          Build Wealth Before 25.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-600 mb-10"
        >
          Finance education and powerful tools for teenagers
          who want a serious head start.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <a
            href="/tools"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Try Tools
          </a>

          <a
            href="/about"
            className="border border-green-600 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition"
          >
            Learn More
          </a>
        </motion.div>

      </section>

    </main>
  )
}