import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import DitherBackground from './components/DitherBackground'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'

import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Projects from './pages/Projects'
import Blog from './pages/Blog'

export default function App() {
  const [cmdPalOpen, setCmdPalOpen] = useState(false)

  // home is its own full-screen terminal — nav is hidden there,
  // shown on every other page.
  const location = useLocation()
  const showNav = location.pathname !== '/'

  // global cmd+K / ctrl+K listener
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setCmdPalOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <DitherBackground />
      {showNav && <Nav onCmdK={() => setCmdPalOpen(true)} />}
      <CommandPalette
        open={cmdPalOpen}
        onClose={() => setCmdPalOpen(false)}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          paddingTop: showNav ? '44px' : '0', /* nav height, only when shown */
        }}
      >
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/work"     element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog"     element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}
