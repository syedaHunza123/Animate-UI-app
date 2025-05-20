'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

export default function Form() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [focused, setFocused] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
    }
    
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address'
    }
    
    return null
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }
  
  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocused(e.target.name)
  }
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocused(null)
    
    const { name, value } = e.target
    const error = validateField(name, value)
    
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors: Record<string, string> = {}
    let hasError = false
    
    Object.entries(formState).forEach(([name, value]) => {
      const error = validateField(name, value)
      if (error) {
        newErrors[name] = error
        hasError = true
      }
    })
    
    setErrors(newErrors)
    
    if (!hasError) {
      setIsSubmitting(true)
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSuccess(true)
        
        // Reset form after success
        setTimeout(() => {
          setFormState({ name: '', email: '', message: '' })
          setIsSuccess(false)
        }, 3000)
      }, 1500)
    }
  }
  
  // Input animations
  const inputVariants = {
    focused: {
      boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.4)',
      borderColor: 'rgb(79, 70, 229)',
      scale: 1.01,
    },
    error: {
      boxShadow: '0 0 0 2px rgba(239, 68, 68, 0.4)',
      borderColor: 'rgb(239, 68, 68)',
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.4 }
    },
    default: {
      boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
      borderColor: 'rgba(209, 213, 219, 1)',
      scale: 1
    }
  }
  
  // Success animation
  const successVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  }
  
  // Get input state (focused, error, or default)
  const getInputState = (fieldName: string) => {
    if (focused === fieldName) return 'focused'
    if (errors[fieldName]) return 'error'
    return 'default'
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mb-6 p-3 bg-green-50 text-green-600 rounded-lg flex items-center"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Form submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <motion.input
          id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          variants={inputVariants}
          animate={getInputState('name')}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none"
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1 text-sm text-red-500"
            >
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <motion.input
          id="email"
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          variants={inputVariants}
          animate={getInputState('email')}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none"
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1 text-sm text-red-500"
            >
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          rows={4}
          value={formState.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          variants={inputVariants}
          animate={getInputState('message')}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none resize-none"
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1 text-sm text-red-500"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      
      <Button variant="primary" isLoading={isSubmitting}>
        Submit
      </Button>
    </form>
  )
}