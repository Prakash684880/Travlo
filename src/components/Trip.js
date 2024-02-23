import "./TripStyles.css"
import React from 'react'
import TripData from "./TripData"
import Trip1 from "../assets/9.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"
export default function Trip() {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique design using google Apps</p>
      <div className="tripcard">
        <TripData
        image={Trip1}
        heading = "Trip to kathmandu"
        text="A Neverending Journey is more of a way of living. We transform attitudes towards life, together and alone. How you can best manoeuvre through it. We guide you through the unique ‘6 ways’ of ‘the Journey’ and at the core you’ll find: adventure, courage and connection. We create landscapes and opportunitie
        s, with and for people, to discover their Way. Because we believe; we’re in this together"
        />
          <TripData
        image={Trip2}
        heading = "Trip to kathmandu"
        text="They truly valued nature which reflects in their works even today. Essentially, nature is everything we are surrounded by like the water we drink, the air we breathe, the sun we soak in, the birds we hear chirping, the moon we gaze at and more. Above all, it is rich and vibrant and consists of both living and non-living things. Therefore, people of the modern age should also learn something from people of yesteryear and start valuing nature before it gets too late."

        />
          <TripData
        image={Trip3}
        heading = "Trip to kathmandu"
        text="Nature has been in existence long before humans and ever since it has taken care of mankind and nourished it forever. In other words, it offers us a protective layer which guards us against all kinds of damages and harms. Survival of mankind without nature is impossible and humans need to understand that."

        />
      </div>
    </div>
  )
}