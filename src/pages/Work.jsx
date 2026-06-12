import { experience } from '../data/content'
import ExperienceCard from '../components/ExperienceCard'

export default function Work() {
  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-heading" style={{ marginBottom: '2rem' }}>experience</h1>

      <div>
        {experience.map((job, i) => (
          <ExperienceCard key={i} {...job} />
        ))}
      </div>
    </div>
  )
}
