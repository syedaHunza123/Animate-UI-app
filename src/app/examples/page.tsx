'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeInUp, slideIn } from '@/src/utils/animations'
import DraggableList from '@/src/components/examples/DraggableList'
import ScrollAnimations from '@/src/components/examples/ScrollAnimations'
import AnimatedCounter from '@/src/components/examples/AnimatedCounter'
import AnimatedTabs from '@/src/components/examples/AnimatedTabs'
import ParallaxSection from '@/src/components/examples/ParallaxSection'

export default function Examples() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="container mx-auto px-4 py-12"
    >
      <motion.h1 
        variants={fadeInUp}
        className="text-4xl font-bold text-center mb-12 gradient-text"
      >
        Animation Examples
      </motion.h1>

      {/* Draggable List Example */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-24"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl font-bold mb-8"
        >
          Draggable List
        </motion.h2>
        
        <motion.div variants={fadeInUp}>
          <DraggableList />
        </motion.div>
      </motion.section>

      {/* Scroll Animations Example */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-24"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl font-bold mb-8"
        >
          Scroll Animations
        </motion.h2>
        
        <motion.div variants={fadeInUp}>
          <ScrollAnimations />
        </motion.div>
      </motion.section>

      {/* Animated Counter Example */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-24"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl font-bold mb-8"
        >
          Animated Counter
        </motion.h2>
        
        <motion.div variants={fadeInUp}>
          <AnimatedCounter />
        </motion.div>
      </motion.section>

      {/* Animated Tabs Example */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-24"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl font-bold mb-8"
        >
          Animated Tabs
        </motion.h2>
        
        <motion.div variants={fadeInUp}>
          <AnimatedTabs />
        </motion.div>
      </motion.section>

      {/* Parallax Section Example */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-24"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl font-bold mb-8"
        >
          Parallax Effects
        </motion.h2>
        
        <motion.div variants={fadeInUp}>
          <ParallaxSection />
        </motion.div>
      </motion.section>
    </motion.div>
  )
}