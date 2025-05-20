'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type TooltipProps = {
  children: React.ReactNode
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  id: string
}

export default function Tooltip({ 
  children, 
  content, 
  position = 'top',
  id
}: TooltipProps) {
  const isHovered = document.activeElement?.id === id || document.querySelector(`:hover`)?.id === id

  // Position variables
  const positionStyles: Record<string, any> = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '8px',
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '8px',
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: '8px',
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: '8px',
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
    },
  }
  
  return (
    <div className="relative inline-block" id={id}>
      {children}
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-800 rounded-lg shadow-lg whitespace-nowrap"
            style={{
              ...positionStyles[position],
            }}
            initial={positionStyles[position].initial}
            animate={positionStyles[position].animate}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {content}
            <svg 
              className={`absolute ${
                position === 'top' 
                  ? 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45' 
                  : position === 'bottom' 
                  ? 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45'
                  : position === 'left'
                  ? 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-45'
                  : 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45'
              }`}
              width="8" 
              height="8" 
              viewBox="0 0 8 8" 
              fill="currentColor" 
              style={{ color: 'rgb(17, 24, 39)' }}
            >
              <rect width="8" height="8" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}