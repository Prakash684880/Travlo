import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/4.jpg'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
export default function Contact() {
  return (
    <div>
      <Navbar/>
      <Hero 
       cName="hero-mid"
       heroImg={AboutImg}
       title = "Contact"
      
       btnClass="hide"
       
      
      />
      <ContactForm/>
        <Footer/>
    </div>
  )
}