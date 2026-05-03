import ProjectCard from './ProjectCard'

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return <p className="text-center text-gray-500">No projects found</p>
  }
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList