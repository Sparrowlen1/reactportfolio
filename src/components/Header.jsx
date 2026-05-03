import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">SparrowlenStudio</h1>
            <p className="text-purple-100 mt-1">SparrowlenAgency</p>
          </div>
          <nav className="flex gap-6 flex-wrap justify-center">
            <a href="#home" className="hover:text-purple-200 transition-colors font-medium">Home</a>
            <a href="#portfolio" className="hover:text-purple-200 transition-colors font-medium">Portfolio</a>
            <a href="#add-project" className="hover:text-purple-200 transition-colors font-medium">Add Project</a>
            <a href="#contact" className="hover:text-purple-200 transition-colors font-medium">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header