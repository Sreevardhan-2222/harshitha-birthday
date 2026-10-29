import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} className="back-link">
      <ArrowLeft size={16} strokeWidth={1.6} aria-hidden="true" />
      {label}
    </Link>
  )
}
