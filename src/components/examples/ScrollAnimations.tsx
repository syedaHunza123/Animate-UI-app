'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ScrollAnimations() {
  const items = [
    {
      title: "Fade In",
      description: "Elements fade in as you scroll down the page"
    },
    {
      title: "Slide In From Left",
      description: "Elements slide in from the left side"
    },
    {
      title: "Slide In From Right", 
      description: "Elements slide in from the right side"
    },
    {
      title: "Scale Up",
      description: "Elements scale up from a smaller size"
    },
    {
      title: "Scale Down", 
      description: "Elements scale down from a larger size"
    },
    {
      title: "Rotate In",
      description: "Elements rotate while fading in"
    }
  ]
  
  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Scroll down to see different animations triggered by scrolling.
      </p>
      
      <div className="space-y-16">
        {items.map((item, index) => {
          // Different animation variants based on index
          let initial = {}
          let animate = {}
          
          switch (index % 6) {
            case 0: // Fade in
              initial = { opacity: 0 }
              animate = { opacity: 1 }
              break
              
            case 1: // Slide in from left
              initial = { opacity: 0, x: -100 }
              animate = { opacity: 1, x: 0 }
              break
              
            case 2: // Slide in from right
              initial = { opacity: 0, x: 100 }
              animate = { opacity: 1, x: 0 }
              break
              
            case 3: // Scale up
              initial = { opacity: 0, scale: 0.5 }
              animate = { opacity: 1, scale: 1 }
              break
              
            case 4: // Scale down
              initial = { opacity: 0, scale: 1.5 }
              animate = { opacity: 1, scale: 1 }
              break
              
            case 5: // Rotate in
              initial = { opacity: 0, rotate: -10 }
              animate = { opacity: 1, rotate: 0 }
              break
              
            default:
              initial = { opacity: 0 }
              animate = { opacity: 1 }
          }
          
          return (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              initial={initial}
              whileInView={animate}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1,
                type: 'spring',
                stiffness: 100
              }}
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}