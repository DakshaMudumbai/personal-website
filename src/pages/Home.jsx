import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { profile, currently, about } from '../data/content'
import SocialBox from '../components/SocialBox'
import HomeSpecs from '../components/HomeSpecs'

// sections you can type/click to navigate to
const sections = [
  { n: 1, label: 'about', path: '/about' },
  { n: 2, label: 'work', path: '/work' },
  { n: 3, label: 'projects', path: '/projects' },
  { n: 4, label: 'blog', path: '/blog' },
]

// `$ cmd`
function Cmd({ children }) {
  return (
    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>
      <span style={{ color: 'var(--accent)' }}>$ </span>
      {children}
    </p>
  )
}

// indented `→ output`
function Out({ children, color = 'var(--text-secondary)', size = '0.95rem', transform = 'lowercase' }) {
  return (
    <p
      style={{
        margin: '0.4rem 0 0',
        paddingLeft: '1rem',
        fontSize: size,
        color,
        lineHeight: 1.85,
        textTransform: transform,
      }}
    >
      <span style={{ color: 'var(--accent-blue)' }}>→ </span>
      {children}
    </p>
  )
}

// bolds target phrases inside a bio line so they stand out
const EMPHASIS = ['cybersecurity major', 'focus in applied ml']
function withEmphasis(line) {
  const escaped = EMPHASIS.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi')
  return line.split(pattern).map((part, i) =>
    EMPHASIS.some(p => p.toLowerCase() === part.toLowerCase())
      ? <strong key={i} style={{ color: 'var(--text)', fontWeight: 700 }}>{part}</strong>
      : part
  )
}

// one command + its output, with spacing below
function Block({ cmd, children }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <Cmd>{cmd}</Cmd>
      {children}
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const raw = value.trim().toLowerCase()
    if (!raw) return

    // number or section name
    const match = sections.find(s => String(s.n) === raw || s.label === raw)
    if (match) {
      navigate(match.path)
      return
    }
    // home aliases
    if (raw === '~' || raw === 'home' || raw === 'cd ~') {
      setValue('')
      setError('')
      return
    }
    // otherwise: not found
    setError(`command not found: ${raw} — try a number 1–${sections.length} or a name`)
    setValue('')
  }

  return (
    <section
      className="animate-fade-in"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem clamp(1.5rem, 7vw, 6rem) 4rem',
      }}
      onClick={() => inputRef.current?.focus()}
    >
      <SocialBox />

      <div className="home-layout">
      <div style={{ flex: '1 1 480px', maxWidth: '820px', minWidth: 0, fontFamily: 'var(--font-body)' }}>
        {/* session header — flavor */}
        <p
          style={{
            margin: '0 0 1.75rem',
            fontSize: '0.68rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-label)',
          }}
        >
          {profile.handle}@khoury:~ — {profile.location}
        </p>

        <Block cmd="whoami">
          <Out color="var(--text)" size="clamp(1.6rem, 4vw, 2.4rem)" transform="none">
            {profile.name}
          </Out>
        </Block>

        <Block cmd="cat role.txt">
          <Out size="1.05rem">{profile.role}</Out>
        </Block>

        <Block cmd="cat focus.txt">
          <Out size="1.05rem">{profile.focus}</Out>
        </Block>

        <Block cmd="about --me">
          {about.map((line, i) => (
            <Out key={i} size="1.15rem">{withEmphasis(line)}</Out>
          ))}
        </Block>

        <Block cmd="status --now">
          <Out color="var(--text)" size="1.05rem">{currently}</Out>
        </Block>

        {/* navigable sections menu */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Cmd>ls sections/</Cmd>
          <div
            style={{
              marginTop: '0.5rem',
              paddingLeft: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.3rem',
            }}
          >
            {sections.map(s => (
              <button
                key={s.n}
                type="button"
                className="term-link"
                onClick={() => navigate(s.path)}
                style={{ fontSize: '1rem' }}
              >
                <span style={{ color: 'var(--accent-blue)' }}>{s.n}: </span>
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* live interactive prompt */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
          <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>$&nbsp;</span>
          <input
            ref={inputRef}
            className="term-input"
            value={value}
            onChange={e => { setValue(e.target.value); if (error) setError('') }}
            placeholder="type a number or name, then enter…"
            autoFocus
            autoComplete="off"
            spellCheck="false"
            aria-label="terminal navigation input"
          />
        </form>

        {/* error output */}
        {error && (
          <p style={{ margin: '0.5rem 0 0', paddingLeft: '1rem', fontSize: '0.85rem', color: 'var(--accent)' }}>
            {error}
          </p>
        )}

        {/* cmd+k hint */}
        <p
          style={{
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            marginTop: '2rem',
          }}
        >
          or press{' '}
          <kbd
            style={{
              padding: '0.1rem 0.35rem',
              border: '1px solid var(--border)',
              borderRadius: '3px',
              fontSize: '0.6rem',
              fontFamily: 'var(--font-label)',
              color: 'var(--accent)',
              background: 'var(--accent-dim)',
            }}
          >
            ctrl+k
          </kbd>
          {' '}for the command palette
        </p>
      </div>

      <HomeSpecs />
      </div>
    </section>
  )
}
