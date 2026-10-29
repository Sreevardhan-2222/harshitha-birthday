import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import Page from '../components/Page'
import ChapterCard from '../components/ChapterCard'
import BackLink from '../components/BackLink'
import { Divider } from '../components/Botanical'
import { chapters, storyIndex } from '../data/stories'
import { readChapters } from '../lib/progress'

export default function StoryIndexPage() {
  const read = readChapters()
  return (
    <Page className="index">
      <div className="index__bar">
        <BackLink to="/invitation" label="Back" />
        <Link to="/letter" className="back-link">
          Skip to the letter
          <Mail size={16} strokeWidth={1.6} aria-hidden="true" />
        </Link>
      </div>
      <header className="index__header">
        <h1 className="display">{storyIndex.heading}</h1>
        <p className="index__subtitle">{storyIndex.subtitle}</p>
        <Divider className="divider" />
      </header>
      <div className="index__grid">
        {chapters.map((chapter, i) => (
          <ChapterCard key={chapter.id} chapter={chapter} index={i} read={read.includes(chapter.id)} />
        ))}
      </div>
    </Page>
  )
}
