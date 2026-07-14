import { RichText } from '../utils/richText'

export default function ExperienceCard({ title, company, date, location, description, tags }) {
  return (
    <article className="card" style={{ marginBottom: '1rem' }}>
      {/* header row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: '0.25rem 0.75rem',
          marginBottom: '0.5rem',
        }}
      >
        <div>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
              fontSize: '0.82rem',
              color: 'var(--text)',
            }}
          >
            {title}
          </span>
          <span
            style={{
              color: 'var(--accent)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              marginLeft: '0.5rem',
            }}
          >
            @ {company}
          </span>
        </div>
        <div
          style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-body)',
            textAlign: 'right',
            whiteSpace: 'nowrap',
          }}
        >
          {date} · {location}
        </div>
      </div>

      {/* description */}
      <div
        style={{
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          margin: '0 0 0.75rem',
        }}
      >
        {(Array.isArray(description) 
          ? description 
          : description.split('. ').filter(s => s.trim().length > 0).map(s => s.trim() + (s.trim().endsWith('.') ? '' : '.'))
        ).map((sentence, i) => (
          <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ color: 'var(--accent)', opacity: 0.7, flexShrink: 0 }}>▹</span>
            <span><RichText text={sentence} /></span>
          </div>
        ))}
      </div>

      {/* tags */}
      {tags && tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </article>
  )
}
