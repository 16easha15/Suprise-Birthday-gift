"use client"

import { useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"

import LoaderScreen from "@/components/screens/LoaderScreen"
import IntroScreen from "@/components/screens/IntroScreen"
import CakeScreen from "@/components/screens/CakeScreen"
import PhotosScreen from "@/components/screens/PhotosScreen"
import MessageScreen from "@/components/screens/MessageScreen"
import FinalScreen from "@/components/screens/FinalScreen"

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const bgMusicRef = useRef(null)

  const startMusic = () => {
    if (bgMusicRef.current) {
      bgMusicRef.current.volume = 0.25
      bgMusicRef.current.play().catch(() => {})
    }
  }

  const handleIntroNext = () => {
    startMusic()        // Start music on user click
    setCurrentScreen(2) // Move to next screen
  }

  const screens = [
    <LoaderScreen key="loader" onDone={() => setCurrentScreen(1)} />,
    <IntroScreen
      key="intro"
      onNext={handleIntroNext} // Updated: trigger music on click
    />,
    <CakeScreen key="cake" onNext={() => setCurrentScreen(3)} />,
    <PhotosScreen key="photos" onNext={() => setCurrentScreen(4)} />,
    <MessageScreen key="message" onNext={() => setCurrentScreen(5)} />,
    <FinalScreen
      key="final"
      onReplay={() => setCurrentScreen(1)}
    />,
  ]

  return (
    <main className="min-h-screen overflow-x-hidden relative">

      {/* 🎵 Background Music */}
      <audio
        ref={bgMusicRef}
        src="/audio/background.mp3"
        loop
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="flex items-center justify-center w-full"
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="fixed bottom-4 right-4 text-sm text-black/40 pointer-events-none z-50 font-light"
      >
       
      </motion.div>
    </main>
  )
}
