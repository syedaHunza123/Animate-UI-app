'use client'

import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </ThemeProvider>
  )
}