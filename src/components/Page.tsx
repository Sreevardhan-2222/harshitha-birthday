import { motion } from 'framer-motion'
import { useEffect, type ReactNode } from 'react'

interface PageProps {
  children: ReactNode
  className?: string
  theme?: string
  /** Chapter pages restore their own scroll position instead of starting at the top. */
  keepScroll?: boolean
}

/** Shared page wrapper: sets the palette and handles the enter/exit fade. */
export default function Page({ children, className = '', theme = 'base', keepScroll }: PageProps) {
  useEffect(() => {
    if (!keepScroll) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [keepScroll])

  return (
    <motion.main
      id="main"
      tabIndex={-1}
      data-theme={theme}
      className={`page ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}
