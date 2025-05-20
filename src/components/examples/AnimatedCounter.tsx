'use client'

import React, { useState } from 'react'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'

export default function AnimatedCounter() {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Motion values for animating the counter
  const motionValue = useMotionValue(count)
  const rounded = useTransform(motionValue, (value) => Math.round(value))
  
  // Function to increment the counter
  const increment = () => {
    setIsAnimating(true)
    
    // Animate the motion value
    const animation = motionValue.set(count + 1)
    animation.then(() => {
      setCount(count + 1)
      setIsAnimating(false)
    })
  }
  
  // Function to decrement the counter
  const decrement = () => {
    if (count > 0) {
      setIsAnimating(true)
      
      // Animate the motion value
      const animation = motionValue.set(count - 1)
      animation.then(() => {
        setCount(count - 1)
        setIsAnimating(false)
      })
    }
  }
  
  // Function to reset the counter
  const reset = () => {
    setIsAnimating(true)
    
    // Animate the motion value
    const animation = motionValue.set(0)
    animation.then(() => {
      setCount(0)
      setIsAnimating(false)
    })
  }
  
  return (
    <div className="max-w-md mx-auto flex flex-col items-center">
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
        This counter animates the number transitions in real-time.
      </p>
      
      <div className="relative w-32 h-32 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={count}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.2, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-bold text-white"
          >
            {count}
          </motion.div>
        </AnimatePresence>
        
        {/* Pulse effect on counter change */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              className="absolute inset-0 rounded-full bg-white"
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: 0, scale: 1.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </div>
      
      <div className="flex space-x-4">
        <Button variant="secondary" onClick={decrement}>-</Button>
        <Button variant="outline" onClick={reset}>Reset</Button>
        <Button variant="primary" onClick={increment}>+</Button>
      </div>
    </div>
  )
}