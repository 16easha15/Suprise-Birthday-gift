"use client"

import { useState } from "react"
import Button from "../Button"          
import { Gift } from "lucide-react"

export default function MessageScreen({ onNext }) {
    const [opened, setOpened] = useState(false)

    return (
        <div className="bg-[#fff8fc] p-7 rounded-[60px] drop-shadow-2xl min-w-48 w-full max-w-110 relative flex flex-col items-center gap-4 my-10">
            <div
                className="text-center">
                <h2
                    className="text-2xl md:text-3xl font-semibold text-primary text-center"
                >
                    A Special Message
                </h2>

                <p className="text-primary/70 text-sm">
                    Tap to open
                </p>
            </div>

            <div
                onClick={() => setOpened(!opened)}
                className={`card  relative h-71.25 w-full rounded-[40px] overflow-hidden shadow-inner cursor-pointer transition-all bg-linear-to-b from-white/80 to-pink-200 flex items-center justify-center max-w-71.25`}
            >
                <div className={`cover ${opened ? "opacity-0" : "opacity-100"} pointer-events-none z-10 bg-[#ffedea]!`} />

                <div className="relative px-6 h-56 overflow-y-auto text-foreground">
                    Radhe Radhe… 🌸      
                    Happiest Birthday, Vaishnu 🎂💖        
                    Wishing you the most beautiful birthday and a year filled with happiness, success, and endless smiles 🥂🍰     
                    May your gorgeousness bloom with time, growing brighter with every passing year...🥰
                    May all your wishes and dreams truly come true 😌✨                                                                      
                    Words fall short to express how precious and important you are to me. You mean the world to me, and you’ll always have a VIP seat in my heart 😎🫀💫
                    Even though our career journeys have kept us apart today, I truly believe that one day we’ll have our own house, a healthy bank balance 🤑, and plenty of time for each other. We’ll be sitting together at my place, sipping coffee ☕, gossiping about our old memories, laughing over our fun days, and planning trips 🥂✈️
                    I hope those days come very soon 🧿✨
                    I miss my girl every single day so, so much 🥲💞
                    Your Eashu loves you a lot 😚💝
                        </div>
            </div>
            <Button
                onClick={onNext}
                className="bg-[#ffd6e8] text-primary mt-4"
                >
                🎁 One Last Gift
            </Button>

        </div>
    )
}
