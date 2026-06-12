import { NavLink } from 'react-router-dom'
import { navItems } from '../data/content'

export default function Nav({ onCmdK }) {
  return (
    <header
      id="site-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <nav
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* wordmark */}
        <NavLink
          to="/"
          id="nav-wordmark"
          style={({ isActive }) => ({
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: '0.85rem',
            color: isActive ? 'var(--accent)' : 'var(--text)',
            transition: 'color 0.15s ease',
            flexShrink: 0,
          })}
        >
          daksha
        </NavLink>

        {/* nav links */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.15rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {navItems.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                id={`nav-${item.label.replace('~', 'home')}`}
                style={({ isActive }) => ({
                  display: 'block',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '3px',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-heading)',
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  background: isActive
                    ? 'var(--accent-dim)'
                    : 'transparent',
                  transition: 'color 0.15s ease, background 0.15s ease',
                })}
                onMouseEnter={e => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.color = 'var(--text)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = ''
                  e.currentTarget.style.background = ''
                }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* cmd+K hint */}
        <button
          id="nav-cmdK"
          onClick={onCmdK}
          aria-label="open command palette"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            padding: '0.15rem 0.45rem',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            fontSize: '0.65rem',
            fontFamily: 'var(--font-label)',
            transition: 'border-color 0.15s, color 0.15s',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--border-hover)'
            e.currentTarget.style.color = 'var(--text-secondary)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--text-muted)'
          }}
        >
          <kbd style={{ fontFamily: 'inherit' }}>ctrl</kbd>
          <span>+</span>
          <kbd style={{ fontFamily: 'inherit' }}>k</kbd>
        </button>
      </nav>
    </header>
  )
}
