import React from 'react'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import NavBar from './components/NavBar'
import LogoSection from './components/LogoSection'
import FeatureCards from './components/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Contact from './components/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowCaseSection />
    {/* <LogoSection /> */}
    <FeatureCards />
    <ExperienceSection />
    <TechStack />
    <Contact />
    <Footer />
    </>
  )
}

export default App
