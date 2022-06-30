import React, {  useEffect } from 'react'
import { NavigationBar } from '../components/NavigationBar'
import '../assets/css/Custom.css'
import Intro from '../components/Intro'
import About from '../components/About'
import Quality from '../components/Quality'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

function Landing() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div className="customBG">
        <NavigationBar />
        <Intro />
        <About />
        <Quality />
        <Portfolio />
        <Footer />
    </div>
  )
}

export default Landing