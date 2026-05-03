import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.length === 0 ? (
        <div className="col-span-full text-center py-16 px-4 bg-gray-50 rounded-xl">
          <p className="text-gray-500 text-lg">No projects found. Try a different search term or add a new project!</p>
        </div>
      ) : (
        projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))
      )}
    </div>
  )
}

export default ProjectList