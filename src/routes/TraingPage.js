import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Training from '../components/Training'

const TraingPage = () => {
  return (
    <div>
        <NavBar/>
        <Hero heading="TRAINING." text="Pre-Flight & In-Flight Training"/>
        <Training/>
        <Footer/>
    </div>
  )
}

export default TraingPage