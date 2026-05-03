import { useState } from 'react'

const ProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!title || !category || !description) {
      alert('Please fill all fields')
      return
    }
    
    onAddProject({ title, category, description })
    
    // Clear form
    setTitle('')
    setCategory('')
    setDescription('')
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">well fellow sparrow lets add new projects</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          className="w-full p-2 border rounded mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category sparrow"
          className="w-full p-2 border rounded mb-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <textarea
          placeholder="Description of sparrow project"
          className="w-full p-2 border rounded mb-3"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
          Add Project
        </button>
      </form>
    </div>
  )
}

export default ProjectForm