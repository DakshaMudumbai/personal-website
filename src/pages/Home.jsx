import { links, profile } from '../data/content'
import Centerpiece from '../components/Centerpiece'

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* ── hero ────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          minHeight: 'calc(100vh - 44px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 1.5rem 3rem',
          gap: '0',
        }}
      >
        {/* centerpiece */}
        <div
          style={{
            marginBottom: '2.5rem',
            opacity: 0.65,
          }}
        >
          <Centerpiece size={72} />
        </div>

        {/* name */}
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: 400,
            color: 'var(--text)',
            marginBottom: '0.4rem',
            letterSpacing: '-0.02em',
          }}
        >
          {profile.name}
        </h1>

        {/* role */}
        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            fontFamily: 'var(--font-body)',
          }}
        >
          {profile.role}
        </p>

        {/* currently / prev */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            marginBottom: '2.25rem',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-body)',
          }}
        >
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            <span style={{ color: 'var(--text-muted)' }}>currently: </span>
            <span style={{ color: 'var(--text)' }}>{profile.currently}</span>
          </p>
          {profile.prev.map((p, i) => (
            <p key={i} style={{ color: 'var(--text-secondary)', margin: 0 }}>
              {i === 0 && (
                <span style={{ color: 'var(--text-muted)' }}>prev: </span>
              )}
              <span>{p}</span>
            </p>
          ))}
        </div>

        {/* link pills */}
        <div
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '2.5rem' }}
        >
          <a
            id="hero-github"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-pill"
          >
            github
          </a>
          <a
            id="hero-linkedin"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-pill"
          >
            linkedin
          </a>
          <a
            id="hero-email"
            href={`mailto:${links.email}`}
            className="link-pill"
          >
            email
          </a>
        </div>

        {/* cmd+K hint */}
        <p
          style={{
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-body)',
            margin: 0,
          }}
        >
          press{' '}
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
          {' '}to navigate
        </p>
      </section>

    </div>
  )
}
