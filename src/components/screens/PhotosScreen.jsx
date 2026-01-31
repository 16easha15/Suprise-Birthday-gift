"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import { Mail } from "lucide-react"
import Button from "../Button"

const photos = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
  "/images/8.jpeg",
]

export default function PhotosScreen({ onNext }) {
  return (
    <div className="bg-[#fff8fc] p-7 rounded-[60px] drop-shadow-2xl min-w-48 w-full max-w-110 relative flex flex-col items-center gap-4 my-10">

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-accent">
          Our Sweet Pics
        </h2>
        <p className="text-sm text-accent/70 mt-1">
        </p>
      </div>

      <div className="relative p-6 bg-linear-to-b from-white/80 to-violet-200 w-full rounded-[40px] flex items-end justify-center shadow-inner">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          grabCursor
          loop={true}                     // ✅ Smooth infinite loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="w-53.75 h-70 md:w-59.25 md:h-77.5"
        >
          {photos.map((src, i) => (
            <SwiperSlide key={i}>
              <motion.div className="h-full w-full rounded-3xl">
                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                  <img
                    src={src}
                    alt={`Memory ${i + 1}`}
                    className="h-full w-full object-contain rounded-2xl"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-4 flex justify-center">
        <Button onClick={onNext} className="bg-[#ddd6ff] text-accent">
          <Mail size={18} /> Open My Message
        </Button>
      </div>
    </div>
  )
}
