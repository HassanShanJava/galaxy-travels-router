import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

const ContactPage = () => {
  return (
    <div>
        <NavBar/>
        <Hero heading="CONTACT." text='Contact Galaxy Travel'/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactPage