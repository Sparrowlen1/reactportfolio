import React, { useState } from 'react'
import Header from './components/Header'
import ProjectList from './components/ProjectList'
import ProjectForm from './components/ProjectForm'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

function App() {
  // State management at parent level
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete brand identity for a modern tech startup including logo, color palette, and typography.",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      category: "App Development",
      description: "User-friendly mobile shopping app with seamless checkout and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Corporate Website Redesign",
      category: "Web Design",
      description: "Complete overhaul of corporate website with modern UI/UX and improved navigation.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "Marketing",
      description: "Engaging social media campaign that increased brand awareness by 150%.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop"
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }])
  }
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Add New Project</h2>
            <ProjectForm onAddProject={addProject} />
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h2 className="text-3xl font-bold text-gray-800">SparrowlenPortfolio</h2>
              <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            </div>
            <ProjectList projects={filteredProjects} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App