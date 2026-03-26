import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import WhatIsApi from './pages/WhatIsApi'
import HowApisWork from './pages/HowApisWork'
import BuildRequest from './pages/BuildRequest'
import ReadResponse from './pages/ReadResponse'
import TryIt from './pages/TryIt'

function App() {
  return (
    <div className="app-shell">
      <header className="top-bar">
        <h1>Learn APIs</h1>

        <nav className="nav-links">
          <Link to="/">What is an API</Link>
          <Link to="/how-apis-work">How APIs Work</Link>
          <Link to="/build-request">Build a Request</Link>
          <Link to="/read-response">Read the Response</Link>
          <Link to="/try-it">Try It</Link>
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