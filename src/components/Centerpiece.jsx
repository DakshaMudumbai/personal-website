/**
 * Centerpiece — SVG wireframe icosahedron
 * pre-projected to 2D, slow CSS rotation. swappable for 3D later.
 */

const phi = (1 + Math.sqrt(5)) / 2

const rawVerts = [
  [-1,  phi,  0], [ 1,  phi,  0], [-1, -phi,  0], [ 1, -phi,  0],
  [ 0, -1,  phi], [ 0,  1,  phi], [ 0, -1, -phi], [ 0,  1, -phi],
  [ phi,  0, -1], [ phi,  0,  1], [-phi,  0, -1], [-phi,  0,  1],
]

const verts = rawVerts.map(([x, y, z]) => {
  const len = Math.sqrt(x * x + y * y + z * z)
  return [x / len, y / len, z / len]
})

const edges = [
  [0,1],[0,5],[0,7],[0,10],[0,11],
  [1,5],[1,7],[1,8],[1,9],
  [2,3],[2,4],[2,6],[2,10],[2,11],
  [3,4],[3,6],[3,8],[3,9],
  [4,5],[4,9],[4,11],
  [5,9],[5,11],
  [6,7],[6,8],[6,10],
  [7,8],[7,10],
  [8,9],[10,11],
]

function project(v, size) {
  const [x, y, z] = v
  const cos = Math.cos(0.26)
  const sin = Math.sin(0.26)
  const ty = y * cos - z * sin
  const tz = y * sin + z * cos
  return [
    x * size + size,
    ty * size + size,
    tz,
  ]
}

export default function Centerpiece({ size = 80 }) {
  const projected = verts.map(v => project(v, size))

  const zVals = projected.map(p => p[2])
  const zMin = Math.min(...zVals)
  const zMax = Math.max(...zVals)

  return (
    <svg
      width={size * 2}
      height={size * 2}
      viewBox={`0 0 ${size * 2} ${size * 2}`}
      aria-hidden="true"
      style={{
        animation: 'spin-slow 40s linear infinite',
        overflow: 'visible',
        display: 'block',
      }}
    >
      {edges.map(([a, b], i) => {
        const [ax, ay, az] = projected[a]
        const [bx, by, bz] = projected[b]
        const avgZ = (az + bz) / 2
        const t = (avgZ - zMin) / (zMax - zMin)
        const opacity = 0.1 + t * 0.3
        return (
          <line
            key={i}
            x1={ax}
            y1={ay}
            x2={bx}
            y2={by}
            stroke="var(--text-muted)"
            strokeWidth="0.8"
            strokeOpacity={opacity}
          />
        )
      })}
      {projected.map(([px, py, pz], i) => {
        const t = (pz - zMin) / (zMax - zMin)
        const opacity = 0.15 + t * 0.5
        return (
          <circle
            key={i}
            cx={px}
            cy={py}
            r="1.5"
            fill="var(--accent)"
            fillOpacity={opacity * 0.6}
          />
        )
      })}
    </svg>
  )
}
