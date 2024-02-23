import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
       <Navbar/>
       <Hero 
       cName="hero"
       heroImg="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
       title = "Your Journey Starts Here"
       text="Choose Your Favorite Destination"
       buttonText="Travel Plan"
       url="/"
       btnClass="show"
       />
       <Destination/>
       <Trip/>
       <Footer/>
    </div>
  )
}