"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

export default function LoaderScreen({ onDone }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onDone?.()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-6"
    >

      {/* Emoji */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="text-6xl md:text-7xl"
      >
        🎂
      </motion.div>

      {/* Text */}
      <p className="text-xl md:text-2xl font-semibold text-foreground text-center">
        Loading special surprise for special person...
      </p>

      {/* 🌸 LOADING BAR */}
      <div className="w-64 h-3 bg-pink-100 rounded-full overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="h-full bg-linear-to-r from-pink-300 via-pink-400 to-pink-500 rounded-full"
        />
      </div>

    </motion.div>
  )
}
