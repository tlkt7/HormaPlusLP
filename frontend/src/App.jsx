import { useState } from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Story from './components/Story'
import Features from './components/Features'
import Lab from './components/Lab'
import Team from './components/Team'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-sans font-bold tracking-tight text-black">
                Horma+ Ring
              </span>
            </div>
            <div className="hidden md:flex space-x-4">
              <a 
                href="#home" 
                className="glass-transparent px-6 py-2 rounded-full text-black/70 hover:text-black hover:bg-black/5 transition-all duration-200 font-light tracking-wide text-sm"
              >
                Home
              </a>
              <a 
                href="#features" 
                className="glass-transparent px-6 py-2 rounded-full text-black/70 hover:text-black hover:bg-black/5 transition-all duration-200 font-light tracking-wide text-sm"
              >
                Features
              </a>
              <a 
                href="#story" 
                className="glass-transparent px-6 py-2 rounded-full text-black/70 hover:text-black hover:bg-black/5 transition-all duration-200 font-light tracking-wide text-sm"
              >
                Story
              </a>
              <a 
                href="#lab" 
                className="glass-transparent px-6 py-2 rounded-full text-black/70 hover:text-black hover:bg-black/5 transition-all duration-200 font-light tracking-wide text-sm"
              >
                Lab
              </a>
              <a 
                href="#team" 
                className="glass-transparent px-6 py-2 rounded-full text-black/70 hover:text-black hover:bg-black/5 transition-all duration-200 font-light tracking-wide text-sm"
              >
                Team
              </a>
              <a 
                href="#contact" 
                className="glass-transparent px-6 py-2 rounded-full text-black/70 hover:text-black hover:bg-black/5 transition-all duration-200 font-light tracking-wide text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Background gradient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Story />
        <Features />
        <Lab />
        <Team />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 glass border-t border-black/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-display font-light tracking-wider text-gradient">
                HORMA
              </span>
            </div>
            <div className="text-black/60 text-sm">
              &copy; 2026 Horma+. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
