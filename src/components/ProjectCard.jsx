import { RichText } from '../utils/richText'

export default function ProjectCard({ title, date, description, tags, github }) {
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
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flex: 1 }}>
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
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <span
            style={{
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-body)',
            }}
          >
            {date}
          </span>
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
            <span key={tag} className="tag tag-blue">{tag}</span>
          ))}
        </div>
      )}

      {/* repo link */}
      {github && (
        <div style={{ marginTop: '0.85rem' }}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            ↗ view repo
          </a>
        </div>
      )}
    </article>
  )
}
