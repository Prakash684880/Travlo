import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/img.jpg'
import Footer from '../components/Footer'
import AboutUS from '../components/AboutUS'
export default function About() {
  return (
    <div>
      <Navbar/>
      <Hero 
       cName="hero-mid"
       heroImg={AboutImg}
       title = "About"
      
       btnClass="hide"      
      />
      <AboutUS/>
      <Footer/>
    </div>
  )
}