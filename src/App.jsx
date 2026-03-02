import React from 'react'
import Navbar from './components/Navbar'
import FluidBackground from './components/FluidBackground'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app">
            <Navbar />
            <FluidBackground />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
