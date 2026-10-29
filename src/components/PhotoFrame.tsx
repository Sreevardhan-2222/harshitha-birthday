import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import type { Photo } from '../data/stories'

interface PhotoFrameProps {
  photo: Photo
  /** Display aspect ratio; defaults to the photo's own ratio (no crop). */
  ratio?: string
  priority?: boolean
  className?: string
  sizes?: string
}

export default function PhotoFrame({ photo, ratio, priority, className = '', sizes }: PhotoFrameProps) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const aspect = ratio ?? photo.frameRatio ?? `${photo.width} / ${photo.height}`

  return (
    <div
      className={`photo ${loaded ? 'is-loaded' : ''} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {failed ? (
        <div className="photo__fallback" role="img" aria-label={photo.alt}>
          <ImageOff size={22} strokeWidth={1.4} aria-hidden="true" />
          <span>This photograph couldn't load.</span>
        </div>
      ) : (
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          style={{ objectPosition: photo.position }}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
