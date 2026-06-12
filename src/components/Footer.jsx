import { links } from '../data/content'

export default function Footer() {
  return (
    <footer
      id="site-footer"
      style={{
        borderTop: '1px solid var(--border)',
        padding: '1.5rem',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-body)',
        }}
      >
        {/* links */}
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <a
            id="footer-github"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            github
          </a>
          <a
            id="footer-linkedin"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            linkedin
          </a>
          <a
            id="footer-email"
            href={`mailto:${links.email}`}
            style={{ color: 'var(--text-secondary)', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            {links.email}
          </a>
        </div>

        {/* copyright */}
        <span style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} daksha mudumbai
        </span>
      </div>
    </footer>
  )
}
