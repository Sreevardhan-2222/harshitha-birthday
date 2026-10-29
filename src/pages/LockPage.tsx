import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { LockKeyhole } from 'lucide-react'
import Page from '../components/Page'
import Keypad from '../components/Keypad'
import { Sprig } from '../components/Botanical'
import { unlock } from '../data/stories'
import { markUnlocked } from '../lib/progress'

export default function LockPage() {
  const navigate = useNavigate()
  const reduce = useReducedMotion()
  const [opening, setOpening] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  const handleUnlock = useCallback(() => {
    markUnlocked()
    setOpening(true)
    timer.current = window.setTimeout(() => navigate('/birthday'), reduce ? 1200 : 2600)
  }, [navigate, reduce])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  return (
    <Page className="lock">
      <div className="lock__inner">
        <Sprig className="lock__sprig" />
        <p className="eyebrow">
          <LockKeyhole size={13} strokeWidth={1.6} aria-hidden="true" /> A small keepsake
        </p>
        <h1 className="display lock__title">Four little digits</h1>
        <p className="lock__hint">Enter the code to open it.</p>
        <Keypad onUnlock={handleUnlock} />
      </div>

      <AnimatePresence>
        {opening && (
          <motion.div
            className="lock__veil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="lock__veil-text"
              role="status"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              {unlock.success}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </Page>
  )
}
