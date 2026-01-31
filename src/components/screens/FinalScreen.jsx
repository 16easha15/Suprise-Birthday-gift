"use client"

import { motion } from "framer-motion"
import Button from "../Button"
import confetti from "canvas-confetti"

export default function FinalScreen({ onReplay }) {

  const blast = () => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
      colors: ["#ff8fab", "#ffd166", "#e9a8ff", "#ffb3c6"],
    })
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-[#fff8fc] p-8 rounded-[60px] drop-shadow-2xl w-full max-w-110 flex flex-col items-center gap-6 text-center"
    >
      <h1 className="text-3xl md:text-4xl font-semibold text-primary">
        A Gift Full of Love 💖
      </h1>

      <p className="text-foreground max-w-md">
        Vaishnavi, this little surprise was made with all my heart.
        May your life always be filled with smiles, warmth, and love.
      </p>

      <Button
        onClick={() => {
          blast()
        }}
        className="bg-[#ffd6e8] text-primary"
      >
        Lots of Love 💝
      </Button>

      <Button
        onClick={onReplay}
        className="bg-[#ddd6ff] text-accent"
      >
        Replay Surprise 🔁
      </Button>
    </motion.div>
  )
}
