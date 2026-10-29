import { motion } from 'framer-motion'
import { BookOpen, Gift } from 'lucide-react'
import { invitation } from '../data/stories'
import { Divider, FloralCorner } from './Botanical'

interface StoryInvitationProps {
  onRead: () => void
  onDecline: () => void
}

export default function StoryInvitation({ onRead, onDecline }: StoryInvitationProps) {
  return (
    <section className="invitation paper" aria-labelledby="invitation-heading">
      <FloralCorner className="invitation__corner invitation__corner--tl" />
      <FloralCorner className="invitation__corner invitation__corner--br" />

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
        <button type="button" className="button button--text" onClick={onDecline}>
          <Gift size={16} strokeWidth={1.6} aria-hidden="true" />
          {invitation.secondary}
        </button>
      </div>
    </section>
  )
}
