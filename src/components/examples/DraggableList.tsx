'use client'

import React, { useState } from 'react'
import { motion, Reorder, useDragControls } from 'framer-motion'
import { GripVerticalIcon } from '@heroicons/react/24/outline'

type Item = {
  id: string
  text: string
  color: string
}

const initialItems: Item[] = [
  { id: '1', text: 'Drag me up or down', color: 'bg-indigo-100 dark:bg-indigo-900/40 border-indigo-200 dark:border-indigo-700' },
  { id: '2', text: 'Animation is fun', color: 'bg-pink-100 dark:bg-pink-900/40 border-pink-200 dark:border-pink-700' },
  { id: '3', text: 'Framer Motion is powerful', color: 'bg-amber-100 dark:bg-amber-900/40 border-amber-200 dark:border-amber-700' },
  { id: '4', text: 'Reordering animations', color: 'bg-emerald-100 dark:bg-emerald-900/40 border-emerald-200 dark:border-emerald-700' },
  { id: '5', text: 'Smooth transitions', color: 'bg-sky-100 dark:bg-sky-900/40 border-sky-200 dark:border-sky-700' },
]

export default function DraggableList() {
  const [items, setItems] = useState(initialItems)
  
  return (
    <div className="max-w-md mx-auto">
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Try dragging items to reorder the list. Notice the smooth transitions.
      </p>
      
      <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-3">
        {items.map((item) => (
          <ReorderItem key={item.id} item={item} />
        ))}
      </Reorder.Group>
      
      <motion.button
        onClick={() => setItems(initialItems)}
        className="mt-6 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Reset Order
      </motion.button>
    </div>
  )
}

function ReorderItem({ item }: { item: Item }) {
  const dragControls = useDragControls()
  
  return (
    <Reorder.Item
      value={item}
      id={item.id}
      dragControls={dragControls}
      className={`${item.color} p-4 rounded-lg border flex items-center justify-between`}
      whileDrag={{ 
        scale: 1.05, 
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
    >
      <span>{item.text}</span>
      <motion.div
        className="cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => dragControls.start(e)}
        whileHover={{ scale: 1.1 }}
      >
        <GripVerticalIcon className="h-5 w-5 text-gray-500" />
      </motion.div>
    </Reorder.Item>
  )
}