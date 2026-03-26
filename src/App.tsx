import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

import WhatIsApi from './pages/ApiDefinition'
import HowApisWork from './pages/HowApisWork'
import BuildRequest from './pages/BuildRequest'
import ReadResponse from './pages/ReadResponse'
import TryIt from './pages/TryIt'

const lessons = [
  { path: '/', label: 'What is an API', end: true },
  { path: '/how-apis-work', label: 'How APIs Work' },
  { path: '/build-request', label: 'Build a Request' },
  { path: '/read-response', label: 'Read the Response' },
  { path: '/try-it', label: 'Try It' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="top-bar">
        <div className="title-group">
          <h1>Learn APIs</h1>
          <p>A beginner-friendly guide to understanding API requests and responses.</p>
        </div>

        <nav className="progress-nav" aria-label="Lesson navigation">
          {lessons.map((lesson, index) => (
            <div className="progress-step" key={lesson.path}>
              <NavLink
                to={lesson.path}
                end={lesson.end}
                className={({ isActive }) =>
                  isActive ? 'step-link active' : 'step-link'
                }
              >
                <span className="step-number">{index + 1}</span>
                <span className="step-label">{lesson.label}</span>
              </NavLink>
            </div>
          ))}
        </nav>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<WhatIsApi />} />
          <Route path="/how-apis-work" element={<HowApisWork />} />
          <Route path="/build-request" element={<BuildRequest />} />
          <Route path="/read-response" element={<ReadResponse />} />
          <Route path="/try-it" element={<TryIt />} />
        </Routes>
      </main>
    </div>
  )
}

export default App