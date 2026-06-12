import { profile, about, stack, interests } from '../data/content'

export default function About() {
  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-heading" style={{ marginBottom: '2rem' }}>about</h1>

      {/* stack section */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '0.85rem', color: 'var(--text)', fontFamily: 'var(--font-heading)', marginBottom: '1.25rem' }}>stack</h2>
        <div className="card" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
          {Object.entries(stack).map(([category, items], i, arr) => (
            <div
              key={category}
              style={{
                display: 'grid',
                gridTemplateColumns: '90px 1fr',
                alignItems: 'start',
                gap: '1.5rem',
                padding: '1.25rem 1.5rem',
                borderBottom: i === arr.length - 1 ? 'none' : '1px solid var(--border)',
              }}
            >
              <h3 style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-label)', margin: 0, marginTop: '0.15rem' }}>{category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {items.map(item => (
                  <span key={item} className="tag tag-blue">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* interests section */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '0.85rem', color: 'var(--text)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>interests</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {interests.map((interest, i) => (
            <li key={i} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>▹</span>
              {interest}
            </li>
          ))}
        </ul>
      </section>

      {/* bio section */}
      <section>
        <h2 style={{ fontSize: '0.85rem', color: 'var(--text)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>bio</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
          }}
        >
          {about.map((line, i) => (
            <p
              key={i}
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* school / meta */}
      <div
        style={{
          marginTop: '1.75rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-label)',
          color: 'var(--text-muted)',
        }}
      >
        <span>
          <span style={{ color: 'var(--accent)' }}>school: </span>
          {profile.school}
        </span>
        <span>
          <span style={{ color: 'var(--accent)' }}>degree: </span>
          {profile.degree}
        </span>
        <span>
          <span style={{ color: 'var(--accent)' }}>grad: </span>
          {profile.grad}
        </span>
      </div>
    </div>
  )
}
