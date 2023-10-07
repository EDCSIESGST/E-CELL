import React from 'react'

import StepsImage from '../../Assets/Images/Steps.png'; 
import staircase from "../../Assets/Images/STAIRCASE-removebg-preview.png"



const About = () => {
  return (
    
      <section id = "About" className="container">

        <div id="row"  data-aos="fade-right">
            <h2>What is Ecell?</h2>
            <br/>
            <p>Initated in 2010, the Entrepreneurship Cell of SIESGST is a non profit student organisation dedicated to promoting the spirit of entrepreneurship among the students of India. To achieve this, we conduct events which help spread our message. We also have an incubation team which helps advise and foster the ideas of students who dream of building their own startup.</p>
        </div>

        <div id ="aboutimg" data-aos="fade-left">
          <img src = {StepsImage} />
        </div>

   </section>
    
  )
}

export default About
