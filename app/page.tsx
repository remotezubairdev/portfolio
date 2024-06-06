import React from 'react'
import Intro from './components/Intro'
import AboutLayout from './components/ImageLayout'
import Projects from './components/Projects'
import More from './components/More'
import Footer from './components/Footer'

const Home = () => {
  return (
    <main>
      <Intro />
      <AboutLayout />
      <Projects />
      <More />
      <Footer />
    </main>
  )
}

export default Home