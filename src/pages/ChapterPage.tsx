import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Page from '../components/Page'
import StoryLayout from '../components/StoryLayout'
import { chapters } from '../data/stories'
import { markRead, savedScroll, saveScroll } from '../lib/progress'

export default function ChapterPage() {
  const { id } = useParams()
  const index = chapters.findIndex((c) => c.id === id)
  const chapter = chapters[index]

  // Remember where the reader was in each chapter, so moving between
  // chapters (or to the index and back) never loses their place.
  useEffect(() => {
    if (!chapter) return
    const restore = savedScroll(chapter.id)
    const frame = requestAnimationFrame(() => window.scrollTo({ top: restore, behavior: 'instant' }))

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        const y = window.scrollY
        saveScroll(chapter.id, y)
        const max = document.documentElement.scrollHeight - window.innerHeight
        if (max > 0 && y / max > 0.85) markRead(chapter.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [chapter])

  if (!chapter) return <Navigate to="/chapters" replace />

  return (
    <Page theme={chapter.theme} className="chapter" keepScroll>
      <StoryLayout chapter={chapter} index={index} />
    </Page>
  )
}
