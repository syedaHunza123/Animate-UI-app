'use client'

import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type CardProps = {
  title: string
  description: string
  type: 'hover' | 'click' | 'gesture'
}

export default function Card({ title, description, type }: CardProps) {
  // For 3D tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Spring physics for smooth movement
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })
  
  // Map mouse position to rotation
  const rotateX = useTransform(springY, [-100, 100], [15, -15])
  const rotateY = useTransform(springX, [-100, 100], [-15, 15])
  const scale = useMotionValue(1)
  
  // Handle mouse move event for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (type !== 'gesture') return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }
  
  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    if (type !== 'gesture') return
    
    x.set(0)
    y.set(0)
  }
  
  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { type: 'spring', stiffness: 300, damping: 15 }
    },
    click: {
      scale: 0.95,
      transition: { type: 'spring', stiffness: 500, damping: 10 }
    },
    tap: {
      scale: 0.98,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      transition: { type: 'spring', stiffness: 500, damping: 10 }
    }
  }
  
  return (
    <motion.div 
      className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg overflow-hidden"
      style={
        type === 'gesture' 
          ? { 
              rotateX, 
              rotateY, 
              scale,
              perspective: '1000px',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden'
            } 
          : {}
      }
      whileHover={type === 'hover' ? 'hover' : {}}
      whileTap={type === 'click' ? 'tap' : {}}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background gradient element */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-indigo-900/20 dark:to-pink-900/20 rounded-xl -z-10"
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0.5 }}
      />
      
      <motion.h3 
        className="text-xl font-bold mb-2"
        style={{ transformStyle: 'preserve-3d', translateZ: '50px' }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 dark:text-gray-300"
        style={{ transformStyle: 'preserve-3d', translateZ: '25px' }}
      >
        {description}
      </motion.p>
      
      {/* Decorative elements that respond to interaction */}
      <motion.div 
        className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-400 to-pink-400 opacity-20 dark:opacity-10"
        whileHover={{ scale: 1.5, opacity: 0.4 }}
      />
      
      <motion.div 
        className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-indigo-400 opacity-20 dark:opacity-10"
        whileHover={{ scale: 1.5, opacity: 0.4 }}
      />
    </motion.div>
  )
}