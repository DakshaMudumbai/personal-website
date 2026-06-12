export default function Blog() {
  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-heading" style={{ marginBottom: '2rem' }}>blog</h1>

      <div
        style={{
          padding: '2.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.5rem',
        }}
      >
        <p
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            margin: 0,
            fontFamily: 'var(--font-body)',
          }}
        >
          coming soon.
        </p>
        <p
          style={{
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            margin: 0,
            fontFamily: 'var(--font-body)',
          }}
        >
          writeups, ctf notes, and whatever else i feel like putting here.
        </p>
      </div>
    </div>
  )
}
