import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { birthday, photos } from '../data/stories'
import PhotoFrame from './PhotoFrame'
import { Petals, Sprig, Sunflower } from './Botanical'

interface BirthdayRevealProps {
  onContinue: () => void
  closed?: boolean
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function BirthdayReveal({ onContinue, closed }: BirthdayRevealProps) {
  return (
    <section className="reveal" aria-labelledby="birthday-heading">
      <Petals />
      <Sunflower className="reveal__flower reveal__flower--a" />
      <Sunflower className="reveal__flower reveal__flower--b" />

      <div className="reveal__intro">
        <motion.p className="eyebrow" {...rise(0.1)}>
          {birthday.eyebrow}
        </motion.p>
        <motion.h1 id="birthday-heading" className="reveal__title" {...rise(0.25)}>
          <span className="reveal__greeting">{birthday.greeting}</span>
          <span className="reveal__name">{birthday.name}</span>
        </motion.h1>
      </div>

      <motion.figure
        className="reveal__portrait"
        initial={{ opacity: 0, scale: 0.97, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="tape tape--tl" aria-hidden="true" />
        <span className="tape tape--br" aria-hidden="true" />
        <PhotoFrame photo={photos.birthday} priority sizes="(min-width: 960px) 40vw, 90vw" />
      </motion.figure>

      <div className="reveal__body">
        <motion.p className="reveal__message" {...rise(0.55)}>
          {birthday.message}
        </motion.p>
        <motion.blockquote className="reveal__quote" {...rise(0.7)}>
          <p>“{birthday.quote}”</p>
        </motion.blockquote>
        <motion.p className="handwritten reveal__note" {...rise(0.85)}>
          <Sprig className="reveal__sprig" />
          {birthday.annotation}
        </motion.p>
        <motion.div {...rise(1)}>
          <button type="button" className="button button--primary" onClick={onContinue}>
            {birthday.cta}
            <ArrowRight size={18} strokeWidth={1.6} aria-hidden="true" />
          </button>
          {closed && (
            <p className="reveal__closed" role="status">
              {birthday.closedNote}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
