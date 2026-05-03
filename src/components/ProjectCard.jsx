import React, { useState } from 'react'

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      onMouseEnter={() => setIsExpanded(true)} 
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isExpanded ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br from-purple-600/90 to-indigo-600/90 flex items-center justify-center transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-white text-lg font-bold px-4 py-2 bg-black/30 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm rounded-full font-medium">
            {project.category}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard