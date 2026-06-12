import { projects } from '../data/content'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-heading" style={{ marginBottom: '2rem' }}>projects</h1>

      <div>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  )
}
