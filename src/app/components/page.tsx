'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeInUp, slideIn } from '@/src/utils/animations'
import Button from '@/src/components/ui/Button'
import Card from '@/src/components/ui/Card'
import Modal from '@/src/components/ui/Modal'
import Tooltip from '@/src/components/ui/Tooltip'
import Form from '@/src/components/ui/Form'

export default function Components() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  
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
        Animation Components
      </motion.h1>

      {/* Buttons Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-20"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl font-bold mb-8"
        >
          Button Animations
        </motion.h2>

        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap gap-4"
        >
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="primary" isLoading>Loading</Button>
        </motion.div>
      </motion.section>

      {/* Cards Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-20"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl font-bold mb-8"
        >
          Card Animations
        </motion.h2>

        <motion.div 
          variants={fadeInUp}
          className="grid md:grid-cols-3 gap-6"
        >
          <Card 
            title="Hover Animation"
            description="This card animates on hover with a scale effect."
            type="hover"
          />
          <Card 
            title="Click Animation"
            description="This card has a special click animation effect."
            type="click"
          />
          <Card 
            title="Gesture Animation"
            description="This card responds to drag gestures with 3D effects."
            type="gesture"
          />
        </motion.div>
      </motion.section>

      {/* Modal Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-20"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl font-bold mb-8"
        >
          Modal Animation
        </motion.h2>

        <motion.div 
          variants={fadeInUp}
          className="text-center"
        >
          <Button 
            variant="primary" 
            onClick={() => setIsModalOpen(true)}
          >
            Open Modal
          </Button>

          <AnimatePresence>
            {isModalOpen && (
              <Modal 
                title="Animated Modal"
                onClose={() => setIsModalOpen(false)}
              >
                <p className="mb-4">This modal has smooth entrance and exit animations.</p>
                <p>It uses Framer Motion's AnimatePresence to handle mounting and unmounting animations.</p>
              </Modal>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* Tooltip Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-20"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl font-bold mb-8"
        >
          Tooltip Animations
        </motion.h2>

        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-8"
        >
          <Tooltip content="Top tooltip with animation" position="top" id="top-tooltip">
            <Button 
              variant="outline"
              onMouseEnter={() => setActiveTooltip('top-tooltip')}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              Hover for top tooltip
            </Button>
          </Tooltip>

          <Tooltip content="Bottom tooltip with animation" position="bottom" id="bottom-tooltip">
            <Button 
              variant="outline"
              onMouseEnter={() => setActiveTooltip('bottom-tooltip')}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              Hover for bottom tooltip
            </Button>
          </Tooltip>
        </motion.div>
      </motion.section>

      {/* Form Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-20"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl font-bold mb-8"
        >
          Form Input Animations
        </motion.h2>

        <motion.div 
          variants={fadeInUp}
          className="max-w-md mx-auto"
        >
          <Form />
        </motion.div>
      </motion.section>
    </motion.div>
  )
}