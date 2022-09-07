import React from 'react'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'

const PricingPage = () => {
  return (
    <div>
      <NavBar/>
      <Hero heading="PRICING." text="Choose your Trip."/>
      <Pricing/>
      <Footer/>

    </div>
  )
}

export default PricingPage