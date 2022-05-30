import React from 'react'
import  MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../Styles/About.css'
function About() {
    return (
        <div className="about">
<div className="aboutTop"  style={{backgroundImage: `url(${MultiplePizzas})`}}>

</div>            
  <div className="aboutBottom">
 <h1>About Us</h1>
 <p> There’s nothing cookie-cutter about Pizza Hut. Not our pizzas. Not our people. And definitely not the way we live life. Around here, we don’t settle for anything less than food we’re proud to serve. And we don’t just clock in. Not when we can also become our best, make friends, and have fun while we’re at it. 
 We’re the pizza company that lives life unboxed.
 </p>
  </div>      </div>
    )
}

export default About
