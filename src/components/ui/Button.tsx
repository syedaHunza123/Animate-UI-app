'use client'

import React from 'react'
import { motion } from 'framer-motion'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  onClick?: () => void
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  onClick,
  className = '',
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) {
  
  // Base classes
  const baseClasses = 'relative rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-6 py-3 text-lg',
  }
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-500',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 focus:ring-indigo-500',
    ghost: 'text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 focus:ring-indigo-500',
  }
  
  // Combined classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`
  
  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </>
      ) : (
        <>
          {children}
          <span className="absolute inset-0 rounded-lg overflow-hidden">
            <motion.span
              className="absolute inset-0 rounded-lg bg-white dark:bg-white bg-opacity-20 dark:bg-opacity-10"
              initial={{ scale: 0, opacity: 0 }}
              whileTap={{ 
                scale: 4, 
                opacity: 0.3,
                transition: { duration: 0.5 }
              }}
              exit={{ opacity: 0 }}
            />
          </span>
        </>
      )}
    </motion.button>
  )
}