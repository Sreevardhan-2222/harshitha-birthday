import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, LayoutGrid, Mail } from 'lucide-react'
import { chapters, type Block, type Chapter } from '../data/stories'
import PhotoFrame from './PhotoFrame'
import { ChapterSteps, ReadingProgress } from './ProgressIndicator'
import { Divider, FloralCorner } from './Botanical'

interface StoryLayoutProps {
  chapter: Chapter
  index: number
}

function renderBlock(block: Block, i: number) {
  switch (block.kind) {
    case 'p':
      return <p key={i}>{block.text}</p>
    case 'note':
      return (
        <p key={i} className="story__note handwritten">
          {block.text}
        </p>
      )
    case 'quote':
      return (
        <blockquote key={i} className="story__quote">
          <p>{block.text}</p>
        </blockquote>
      )
    case 'break':
      return <Divider key={i} className="divider story__break" />
  }
}

export default function StoryLayout({ chapter, index }: StoryLayoutProps) {
  const prev = chapters[index - 1]
  const next = chapters[index + 1]

  return (
    <>
      <ReadingProgress />
      <header className="topbar">
        <Link to="/chapters" className="topbar__link">
          <LayoutGrid size={16} strokeWidth={1.6} aria-hidden="true" />
          <span>All chapters</span>
        </Link>
        <ChapterSteps current={index} />
        <Link to="/letter" className="topbar__link">
          <span>Skip to letter</span>
          <Mail size={16} strokeWidth={1.6} aria-hidden="true" />
        </Link>
      </header>

      <article className="story" aria-labelledby="chapter-title">
        <div className="story__media">
          <figure className="story__figure">
            <PhotoFrame
              photo={chapter.photo}
              priority
              sizes="(min-width: 960px) 42vw, 92vw"
            />
            <figcaption className="handwritten">{chapter.photoNote}</figcaption>
          </figure>
        </div>

        <div className="story__text">
          <FloralCorner className="story__ornament" />
          <p className="eyebrow">Chapter {chapter.number}</p>
          <h1 id="chapter-title" className="display story__title">
            {chapter.title}
          </h1>
          <p className="story__subtitle">{chapter.subtitle}</p>
          <Divider className="divider" />

          <div className="story__body">{chapter.blocks.map(renderBlock)}</div>

          {chapter.closing && <p className="story__closing">{chapter.closing}</p>}

          <nav className="chapter-nav" aria-label="Chapter navigation">
            {prev ? (
              <Link to={`/chapter/${prev.id}`} className="chapter-nav__item">
                <span className="chapter-nav__dir">
                  <ArrowLeft size={16} strokeWidth={1.6} aria-hidden="true" /> Previous
                </span>
                <span className="chapter-nav__title">{prev.title}</span>
              </Link>
            ) : (
              <Link to="/chapters" className="chapter-nav__item">
                <span className="chapter-nav__dir">
                  <ArrowLeft size={16} strokeWidth={1.6} aria-hidden="true" /> Back
                </span>
                <span className="chapter-nav__title">All chapters</span>
              </Link>
            )}
            {next ? (
              <Link to={`/chapter/${next.id}`} className="chapter-nav__item chapter-nav__item--next">
                <span className="chapter-nav__dir">
                  Next <ArrowRight size={16} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="chapter-nav__title">{next.title}</span>
              </Link>
            ) : (
              <Link to="/letter" className="chapter-nav__item chapter-nav__item--next">
                <span className="chapter-nav__dir">
                  Finally <ArrowRight size={16} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="chapter-nav__title">One Last Thing</span>
              </Link>
            )}
          </nav>
        </div>
      </article>
    </>
  )
}
