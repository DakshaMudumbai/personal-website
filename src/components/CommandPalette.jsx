import { useEffect, useRef, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { commandPaletteItems } from '../data/content'

/**
 * Outer wrapper — conditionally renders the inner panel.
 * State resets naturally when CommandPaletteInner remounts.
 */
export default function CommandPalette({ open, onClose }) {
  if (!open) return null
  return <CommandPaletteInner onClose={onClose} />
}

function CommandPaletteInner({ onClose }) {
  const [query, setQuery] = useState('')
  const [activeIdx, setActiveIdx] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    if (query.trim() === '') return commandPaletteItems
    const q = query.toLowerCase()
    return commandPaletteItems.filter(item =>
      item.label.toLowerCase().includes(q) ||
      item.keywords.some(k => k.includes(q))
    )
  }, [query])

  // clamp active index inline
  const currentIdx = Math.min(activeIdx, Math.max(filtered.length - 1, 0))

  // focus the input on mount
  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 30)
    return () => clearTimeout(timer)
  }, [])

  function select(item) {
    onClose()
    if (item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
    } else if (item.path) {
      navigate(item.path)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx(i => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      if (filtered[currentIdx]) select(filtered[currentIdx])
    } else {
      // quick-jump: a letter shortcut, or a page number (1–4) like the home page
      const match = commandPaletteItems.find(
        item => item.shortcut === e.key || String(item.num) === e.key
      )
      if (match) {
        e.preventDefault()
        select(match)
      }
    }
  }

  return (
    <>
      {/* backdrop */}
      <div
        id="cmdpal-backdrop"
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          animation: 'fade-in-fast 0.12s ease both',
        }}
      />

      {/* panel */}
      <div
        id="cmdpal-panel"
        role="dialog"
        aria-label="command palette"
        aria-modal="true"
        style={{
          position: 'fixed',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 101,
          width: 'min(480px, calc(100vw - 2rem))',
          background: 'rgba(10, 5, 20, 0.85)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          overflow: 'hidden',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 1px rgba(201, 179, 238, 0.2)',
          animation: 'scale-in 0.15s ease both',
        }}
        onKeyDown={handleKeyDown}
      >
        {/* search input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <span
            aria-hidden="true"
            style={{ color: 'var(--text-muted)', fontSize: '0.8rem', flexShrink: 0, fontFamily: 'var(--font-heading)' }}
          >
            &gt;
          </span>
          <input
            id="cmdpal-input"
            ref={inputRef}
            type="text"
            placeholder="type to navigate..."
            value={query}
            onChange={e => { setQuery(e.target.value); setActiveIdx(0) }}
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--text)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              caretColor: 'var(--accent)',
            }}
          />
          <kbd
            style={{
              fontSize: '0.6rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-label)',
              flexShrink: 0,
            }}
          >
            esc
          </kbd>
        </div>

        {/* results */}
        <ul
          id="cmdpal-results"
          role="listbox"
          style={{
            listStyle: 'none',
            margin: 0,
            padding: '0.4rem 0',
            maxHeight: '280px',
            overflowY: 'auto',
          }}
        >
          {filtered.length === 0 ? (
            <li
              style={{
                padding: '0.75rem 1rem',
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-body)',
              }}
            >
              no results.
            </li>
          ) : (
            filtered.map((item, i) => (
              <li
                key={item.label}
                role="option"
                aria-selected={i === currentIdx}
                onClick={() => select(item)}
                onMouseEnter={() => setActiveIdx(i)}
                style={{
                  padding: '0.55rem 1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  background: i === currentIdx
                    ? 'var(--accent-dim)'
                    : 'transparent',
                  borderLeft: i === currentIdx
                    ? '2px solid var(--accent)'
                    : '2px solid transparent',
                  transition: 'background 0.1s, border-color 0.1s',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  {item.num != null && (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-label)',
                        color: 'var(--accent-blue)',
                      }}
                    >
                      {item.num}
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-body)',
                      color: i === currentIdx ? 'var(--text)' : 'var(--text-secondary)',
                    }}
                  >
                    {item.label}
                  </span>
                </span>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {item.href && (
                    <span
                      style={{
                        fontSize: '0.6rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-label)',
                      }}
                    >
                      external
                    </span>
                  )}
                  {item.shortcut && (
                    <kbd
                      style={{
                        fontSize: '0.65rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-label)',
                        background: 'var(--surface)',
                        padding: '0.1rem 0.35rem',
                        borderRadius: '3px',
                        border: '1px solid var(--border)',
                        minWidth: '1.2rem',
                        textAlign: 'center',
                      }}
                    >
                      {item.shortcut}
                    </kbd>
                  )}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  )
}