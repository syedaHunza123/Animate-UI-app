'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const tabs = [
  { id: 'tab1', title: 'Features', content: 'Explore all the amazing features that bring your UI to life with smooth animations and transitions.' },
  { id: 'tab2', title: 'Examples', content: 'See practical examples of how to implement different types of animations in your projects.' },
  { id: 'tab3', title: 'Documentation', content: 'Detailed guides and API documentation to help you master animation techniques.' },
  { id: 'tab4', title: 'Community', content: 'Join our community of developers sharing tips, code snippets, and inspiration.' },
]

export default function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id 
                ? 'text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
            style={{ zIndex: 1 }}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-md"
                initial={false}
                transition={{ type: 'spring', duration: 0.5, bounce: 0.25 }}
                style={{ zIndex: -1 }}
              />
            )}
            {tab.title}
          </button>
        ))}
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md min-h-[150px] relative overflow-hidden">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, x: activeTab === tab.id ? -20 : 20 }}
            animate={{ 
              opacity: activeTab === tab.id ? 1 : 0,
              x: activeTab === tab.id ? 0 : (activeTab > tab.id ? -20 : 20),
              position: activeTab === tab.id ? 'relative' : 'absolute',
            }}
            transition={{ duration: 0.3 }}
            className={`inset-0 ${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            <h3 className="text-xl font-bold mb-2">{tab.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{tab.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}