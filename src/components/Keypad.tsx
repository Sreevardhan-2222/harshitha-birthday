import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { Delete, X } from 'lucide-react'
import { unlock } from '../data/stories'

const LENGTH = unlock.code.length
const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

interface KeypadProps {
  onUnlock: () => void
}

export default function Keypad({ onUnlock }: KeypadProps) {
  // Kept as a string so the leading zero is never lost.
  const [entry, setEntry] = useState('')
  const [status, setStatus] = useState<'idle' | 'wrong' | 'right'>('idle')
  const shake = useAnimationControls()
  const resetTimer = useRef<number | undefined>(undefined)

  const press = useCallback(
    (digit: string) => {
      if (!/^\d$/.test(digit) || status === 'right') return
      if (status === 'wrong') {
        // Start a fresh attempt instead of appending to the rejected one.
        window.clearTimeout(resetTimer.current)
        setEntry(digit)
        setStatus('idle')
        return
      }
      setEntry((current) => {
        if (current.length >= LENGTH) return current
        return current + digit
      })
    },
    [status],
  )

  const backspace = useCallback(() => {
    if (status === 'right') return
    window.clearTimeout(resetTimer.current)
    setEntry((current) => (status === 'wrong' ? '' : current.slice(0, -1)))
    setStatus('idle')
  }, [status])

  const clear = useCallback(() => {
    if (status === 'right') return
    window.clearTimeout(resetTimer.current)
    setEntry('')
    setStatus('idle')
  }, [status])

  useEffect(() => {
    if (entry.length !== LENGTH) return
    if (entry === unlock.code) {
      setStatus('right')
      onUnlock()
    } else {
      setStatus('wrong')
      shake.start({ x: [0, -9, 9, -6, 6, -2, 0], transition: { duration: 0.45 } })
      resetTimer.current = window.setTimeout(() => setEntry(''), 650)
    }
  }, [entry, onUnlock, shake])

  useEffect(() => () => window.clearTimeout(resetTimer.current), [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return
      if (/^\d$/.test(event.key)) press(event.key)
      else if (event.key === 'Backspace') backspace()
      else if (event.key === 'Escape') clear()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [press, backspace, clear])

  return (
    <div className="keypad">
      <motion.div
        className={`keypad__dots is-${status}`}
        animate={shake}
        role="img"
        aria-label={`${entry.length} of ${LENGTH} digits entered`}
      >
        {Array.from({ length: LENGTH }, (_, i) => (
          <span key={i} className={`keypad__dot ${i < entry.length ? 'is-filled' : ''}`} />
        ))}
      </motion.div>

      <p className="keypad__message" role="status" aria-live="polite">
        {status === 'wrong' ? unlock.wrong : ' '}
      </p>

      <div className="keypad__grid" role="group" aria-label="Keypad">
        {KEYS.map((key) => (
          <button key={key} type="button" className="keypad__key" onClick={() => press(key)}>
            {key}
          </button>
        ))}
        <button
          type="button"
          className="keypad__key keypad__key--quiet"
          onClick={clear}
          aria-label="Clear all digits"
        >
          <X size={20} strokeWidth={1.4} aria-hidden="true" />
        </button>
        <button type="button" className="keypad__key" onClick={() => press('0')}>
          0
        </button>
        <button
          type="button"
          className="keypad__key keypad__key--quiet"
          onClick={backspace}
          aria-label="Delete last digit"
        >
          <Delete size={20} strokeWidth={1.4} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
