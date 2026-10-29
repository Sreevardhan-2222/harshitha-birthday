import { motion, useScroll, useSpring } from 'framer-motion'
import { chapters } from '../data/stories'

/** Thin bar showing how far through the current chapter the reader is. */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  return <motion.div className="reading-progress" style={{ scaleX }} aria-hidden="true" />
}

/** "Chapter 02 of 03" with three small segments. */
export function ChapterSteps({ current }: { current: number }) {
  return (
    <div className="chapter-steps" aria-label={`Chapter ${current + 1} of ${chapters.length}`}>
      <span className="chapter-steps__label">
        {chapters[current].number} <span aria-hidden="true">/</span> 0{chapters.length}
      </span>
      <span className="chapter-steps__bars" aria-hidden="true">
        {chapters.map((c, i) => (
          <span key={c.id} className={i <= current ? 'is-active' : ''} />
        ))}
      </span>
    </div>
  )
}
