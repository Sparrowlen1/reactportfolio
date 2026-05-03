const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <span className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm mb-2">
        {project.category}
      </span>
      <p className="text-gray-600">{project.description}</p>
    </div>
  )
}

export default ProjectCard