import type { ReactElement } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import LockPage from './pages/LockPage'
import BirthdayPage from './pages/BirthdayPage'
import InvitationPage from './pages/InvitationPage'
import StoryIndexPage from './pages/StoryIndexPage'
import ChapterPage from './pages/ChapterPage'
import LetterPage from './pages/LetterPage'
import { isUnlocked } from './lib/progress'

function Gate({ children }: { children: ReactElement }) {
  return isUnlocked() ? children : <Navigate to="/" replace />
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={isUnlocked() ? <Navigate to="/birthday" replace /> : <LockPage />} />
        <Route path="/birthday" element={<Gate><BirthdayPage /></Gate>} />
        <Route path="/invitation" element={<Gate><InvitationPage /></Gate>} />
        <Route path="/chapters" element={<Gate><StoryIndexPage /></Gate>} />
        <Route path="/chapter/:id" element={<Gate><ChapterPage /></Gate>} />
        <Route path="/letter" element={<Gate><LetterPage /></Gate>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <button
          type="button"
          className="skip-link"
          onClick={() => document.getElementById('main')?.focus()}
        >
          Skip to content
        </button>
        <AnimatedRoutes />
        <div className="grain" aria-hidden="true" />
      </HashRouter>
    </MotionConfig>
  )
}
