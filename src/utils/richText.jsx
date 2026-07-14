// tiny inline-markdown parser: turns **important** into a highlighted <strong>.
// keeps content readable in the data file while letting key words pop in the ui.
export function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="hl">{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}
