import { stack, certifications } from '../data/content'

// right-rail panel on the home page: the stack + certs, in the terminal style.
// reads the same data as the about page so there's one source of truth.
function Heading({ children }) {
  return (
    <h2
      style={{
        fontSize: '0.85rem',
        color: 'var(--text)',
        fontFamily: 'var(--font-heading)',
        margin: '0 0 0.85rem',
        letterSpacing: '0.02em',
      }}
    >
      {children}
    </h2>
  )
}

export default function HomeSpecs() {
  return (
    <aside className="home-specs">
      {/* stack */}
      <Heading>stack</Heading>
      <div className="card" style={{ padding: 0, display: 'flex', flexDirection: 'column', marginBottom: '4.5rem' }}>
        {Object.entries(stack).map(([category, items], i, arr) => (
          <div
            key={category}
            style={{
              padding: '0.9rem 1rem',
              borderBottom: i === arr.length - 1 ? 'none' : '1px solid var(--border)',
            }}
          >
            <h3
              style={{
                fontSize: '0.62rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-label)',
                margin: '0 0 0.5rem',
              }}
            >
              {category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {items.map(item => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* certifications */}
      <Heading>certifications</Heading>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {certifications.map((cert, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.5rem',
              fontSize: '0.78rem',
              color: 'var(--text)',
              lineHeight: 1.4,
            }}
          >
            <span style={{ color: 'var(--accent)', fontSize: '0.7rem', flexShrink: 0 }}>✓</span>
            <span>
              {cert.name}
              <span style={{ color: 'var(--text-muted)', fontSize: '0.68rem', fontFamily: 'var(--font-label)', marginLeft: '0.4rem' }}>
                {cert.issuer}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
