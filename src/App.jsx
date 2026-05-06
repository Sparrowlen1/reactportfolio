import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import Footer from './components/Footer'

function App() {
  // All state is here in the parent component
  const [projects, setProjects] = useState([
    { id: 1, title: "Gaming site", category: "Game", description: "Compete in Call Of Duty Mobile for exclusive rewards" },
    { id: 2, title: "Mobile App", category: "App Dev", description: "Carwash daraja integrated App" },
    { id: 3, title: "Website Redesign", category: "Web Design", description: "Corporate website" },
  ])

  const [search, setSearch] = useState('')
 
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }])
    alert('howdy sparrow, project added successfuly')
  }


  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-8">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <div className="my-8">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        
        <div className="my-8">
          <ProjectForm onAddProject={addProject} />
        </div>
        
        <div className="my-8">
          <h2 className="text-2xl font-bold text-white mb-4">Sparrowlen Projects</h2>
          <ProjectList projects={filteredProjects} />
        </div>
        
        <Footer />
      </div>
    </div>
  )
}

export default App