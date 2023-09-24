import React from 'react'

import StepsImage from '../../Assets/Images/Steps.png'; 




const About = () => {
  return (
    
      <section id = "About">
    <div id = "row"  data-aos="fade-right">
      <h2>What is Ecell?</h2>
      <br/>
      <p>Entrepreneurship cell is a non-profit student's organization dedicated to promoting the spirit of entrepreneurship among students throughout India. The basic aim of E-Cell is to encourage college-level students today to start their own enterprise. Hundreds of rural as well as urban colleges have established e-cells. 

        Moreover over 70,000 students participate in organizing e-cell activities in India. Some noteworthy examples are – IIT Bombay, IIT Kharagpur, Bits Pillani, VJTI, SPIT, etc.</p>
    </div>
    <div id ="aboutimg" data-aos="fade-left">
      <img src = {StepsImage} />
    </div>
   </section>
    
  )
}

export default About
