import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import type { Chapter } from '../data/stories'
import PhotoFrame from './PhotoFrame'

interface ChapterCardProps {
  chapter: Chapter
  read: boolean
  index: number
}

export default function ChapterCard({ chapter, read, index }: ChapterCardProps) {
  return (
    <article className={`chapter-card chapter-card--${chapter.theme} chapter-card--n${index}`}>
      <Link
        to={`/chapter/${chapter.id}`}
        className="chapter-card__link"
        aria-label={`Chapter ${chapter.number}: ${chapter.title}. ${chapter.subtitle}${read ? ' (read)' : ''}`}
      >
        <PhotoFrame
          photo={chapter.photo}
          ratio={chapter.photo.frameRatio ?? '4 / 5'}
          priority={index === 0}
          className="chapter-card__photo"
          sizes="(min-width: 960px) 30vw, 90vw"
        />
        <div className="chapter-card__text">
          <p className="chapter-card__number">
            Chapter {chapter.number}
            {read && (
              <span className="chapter-card__read">
                <Check size={13} strokeWidth={2} aria-hidden="true" /> read
              </span>
            )}
          </p>
          <h2 className="chapter-card__title">{chapter.title}</h2>
          <p className="chapter-card__subtitle">{chapter.subtitle}</p>
          <span className="chapter-card__cta" aria-hidden="true">
            Read chapter <ArrowUpRight size={16} strokeWidth={1.6} />
          </span>
        </div>
      </Link>
    </article>
  )
}
