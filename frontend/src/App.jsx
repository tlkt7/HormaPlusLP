import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">Horma</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition">
                Главная
              </a>
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition">
                Возможности
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Features />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Horma. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
