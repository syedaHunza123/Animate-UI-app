'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function ParallaxSection() {
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Create a spring-loaded scroll progress for smoother animation
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 })
  
  // Transform scroll progress to different values for parallax effect
  const y1 = useTransform(smoothProgress, [0, 1], [0, -100])
  const y2 = useTransform(smoothProgress, [0, 1], [0, -200])
  const y3 = useTransform(smoothProgress, [0, 1], [0, -300])
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.6, 1, 0.6])
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  
  return (
    <div className="relative h-[50vh] overflow-hidden rounded-lg" ref={ref}>
      {/* Background layer */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-indigo-800 to-purple-900"
        style={{ opacity }}
      />
      
      {/* Parallax elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-24 h-24 md:w-36 md:h-36 rounded-full bg-pink-500/20 blur-xl"
        style={{ y: y1, x: "-5%" }}
      />
      
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-indigo-500/20 blur-xl"
        style={{ y: y2, x: "10%" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-1/4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-amber-500/20 blur-xl"
        style={{ y: y3, x: "-15%" }}
      />
      
      {/* Content */}
      <motion.div
        className="relative h-full flex flex-col items-center justify-center text-center text-white p-6 z-10"
        style={{ scale, opacity }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Parallax Effects</h2>
        <p className="max-w-md text-lg text-white/80">
          Elements move at different speeds as you scroll, creating depth and dimension to your interface.
        </p>
      </motion.div>
    </div>
  )
}