import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BookOpen, Gift, HeartCrack } from 'lucide-react'
import { invitation, skipConfirm } from '../data/stories'
import { Divider, FloralCorner } from './Botanical'

interface StoryInvitationProps {
  onRead: () => void
  onDecline: () => void
  /** True while asking "You really want to skip the story?" */
  asking: boolean
  onAskingChange: (asking: boolean) => void
}

export default function StoryInvitation({ onRead, onDecline, asking, onAskingChange }: StoryInvitationProps) {
  const questionRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!asking) return
    questionRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onAskingChange(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [asking, onAskingChange])

  return (
    <section className="invitation paper" aria-labelledby={asking ? 'skip-question' : 'invitation-heading'}>
      <FloralCorner className="invitation__corner invitation__corner--tl" />
      <FloralCorner className="invitation__corner invitation__corner--br" />

      <AnimatePresence mode="wait" initial={false}>
        {asking ? (
          <motion.div
            key="confirm"
            className="skip-confirm"
            role="alertdialog"
            aria-labelledby="skip-question"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeartCrack className="skip-confirm__icon" size={34} strokeWidth={1.2} aria-hidden="true" />
            <h1 id="skip-question" ref={questionRef} tabIndex={-1} className="display skip-confirm__question">
              {skipConfirm.question}
            </h1>
            <Divider className="divider" />
            <p className="invitation__body">{skipConfirm.body}</p>
            <div className="invitation__actions">
              <button type="button" className="button button--primary" onClick={onRead}>
                <BookOpen size={18} strokeWidth={1.6} aria-hidden="true" />
                {skipConfirm.no}
              </button>
              <button type="button" className="button button--text" onClick={onDecline}>
                <Gift size={16} strokeWidth={1.6} aria-hidden="true" />
                {skipConfirm.yes}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="invite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="eyebrow">{invitation.eyebrow}</p>
            <h1 id="invitation-heading" className="display">
              {invitation.heading}
            </h1>
            <Divider className="divider" />
            <motion.p
              className="invitation__lead"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.9 }}
            >
              {invitation.invitation}
            </motion.p>
            <p className="invitation__body">{invitation.body}</p>

            <div className="invitation__actions">
              <button type="button" className="button button--primary" onClick={onRead}>
                <BookOpen size={18} strokeWidth={1.6} aria-hidden="true" />
                {invitation.primary}
              </button>
              <button type="button" className="button button--text" onClick={() => onAskingChange(true)}>
                <Gift size={16} strokeWidth={1.6} aria-hidden="true" />
                {invitation.secondary}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
