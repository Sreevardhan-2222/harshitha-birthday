import { Link } from 'react-router-dom'
import { LayoutGrid, RotateCcw } from 'lucide-react'
import { letter } from '../data/stories'
import { Divider, Sprig } from './Botanical'

export default function FinalLetter() {
  return (
    <article className="letter paper" aria-labelledby="letter-heading">
      <Sprig className="letter__sprig" />
      <h1 id="letter-heading" className="display letter__heading">
        {letter.heading}
      </h1>
      <Divider className="divider" />
      <div className="letter__body">
        <p className="letter__salutation">{letter.salutation}</p>
        {letter.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <p className="letter__signature handwritten">{letter.signature}</p>
      </div>
      <nav className="letter__actions" aria-label="After the letter">
        <Link to="/birthday" className="button button--quiet">
          <RotateCcw size={16} strokeWidth={1.6} aria-hidden="true" />
          Back to the beginning
        </Link>
        <Link to="/chapters" className="button button--text">
          <LayoutGrid size={16} strokeWidth={1.6} aria-hidden="true" />
          Revisit the chapters
        </Link>
      </nav>
    </article>
  )
}
