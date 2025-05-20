'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HeartIcon, SparklesIcon, BoltIcon, RocketLaunchIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { staggerContainer, fadeInUp, slideIn } from '@/src/utils/animations'

export default function Home() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="container mx-auto px-4 py-12"
    >
      {/* Hero Section */}
      <motion.section 
        variants={fadeInUp}
        className="flex flex-col items-center justify-center min-h-[80vh] text-center"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          variants={fadeInUp}
        >
          Animation Showcase
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 max-w-2xl"
          variants={fadeInUp}
        >
          Experience the power of smooth, engaging animations that bring user interfaces to life.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          variants={fadeInUp}
        >
          <Link href="/components" className="btn btn-primary">
            View Components
          </Link>
          <Link href="/examples" className="btn btn-outline">
            See Examples
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Animation Features
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <SparklesIcon className="h-10 w-10 text-indigo-500" />,
              title: "Page Transitions",
              description: "Smooth animations between page navigation for a seamless user experience."
            },
            {
              icon: <HeartIcon className="h-10 w-10 text-pink-500" />,
              title: "Micro-interactions",
              description: "Subtle animations for buttons, cards, and interactive elements."
            },
            {
              icon: <BoltIcon className="h-10 w-10 text-amber-500" />,
              title: "Component Animations",
              description: "Beautiful mount and unmount transitions for UI components."
            },
            {
              icon: <RocketLaunchIcon className="h-10 w-10 text-indigo-500" />,
              title: "List Animations",
              description: "Staggered and choreographed list item animations for visual delight."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={slideIn('up', 'spring', index * 0.1, 0.75)}
              className="card p-6 rounded-xl flex flex-col items-center text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 text-center"
      >
        <motion.div 
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to explore?</h2>
          <p className="text-xl mb-8">Discover all the animation examples and learn how they work.</p>
          <Link href="/examples" className="btn btn-primary inline-flex items-center">
            See all examples
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}