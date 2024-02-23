import React from 'react'
import Mountain1 from '../assets/1.jpg'
import Mountain2 from '../assets/11.jpg'
import Mountain3 from '../assets/12.jpg'
import Mountain4 from '../assets/5.jpg'

import './destination.css'
import DestinationData from './DestinationData'
const Destination = () => {
  return (
    
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity</p>

        <DestinationData
        className = "first-des"
        heading ="TOP VIEWS IN NEPAL"
        text ="ext messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the c aller and recipient to both be f
        ree at the same moment; this permits communication even between busy individuals."
        
        img1={Mountain1}
        img2={Mountain2}
        />

         <DestinationData
         className = "first-des-reverse"
        heading ="Nature is Beauty"
        text ="Nothing compares to nature's beauty, as these famous quotes about nature agree. From spring's hopeful new blooms and fall's exquisite array of colors to winter's magic and summer's energy, each season abounds with different types of natural beauty to explore and admire. For those who may forget what being in nature feels like—this is where these best nature quotes come in!"
        
        img1={Mountain3}
        img2={Mountain4}
        />
      </div>
  )
} 
export default Destination;

