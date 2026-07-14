import { profile, stack, certifications, courses, interests } from '../data/content'

export default function About() {
  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-heading" style={{ marginBottom: '2rem' }}>about</h1>

      {/* role + focus — terminal-style files */}
      <section style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-label)', margin: '0 0 0.4rem' }}>
            <span style={{ color: 'var(--accent-blue)' }}>$ </span>cat role.txt
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text)', fontFamily: 'var(--font-heading)', margin: 0 }}>
            {profile.role}
          </p>
        </div>
        <div>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-label)', margin: '0 0 0.4rem' }}>
            <span style={{ color: 'var(--accent-blue)' }}>$ </span>cat focus.txt
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
            {profile.focus}
          </p>
        </div>
      </section>

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
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* certifications section */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '0.85rem', color: 'var(--text)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>certifications</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {certifications.map((cert, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.6rem',
                fontSize: '0.85rem',
                color: 'var(--text)',
              }}
            >
              <span style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>✓</span>
              <span>{cert.name}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontFamily: 'var(--font-label)' }}>
                {cert.issuer}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* courses section */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '0.85rem', color: 'var(--text)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>coursework</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {courses.map(course => (
            <span key={course} className="tag">{course}</span>
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

    </div>
  )
}
