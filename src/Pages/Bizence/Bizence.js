import React from 'react'
import "../../Pages/Homepage/homepage.css"
import { Link } from 'react-router-dom'
import Banner from "../../Assets/Images/banner.png"
import './timeline.css'
import bizence from "../../Assets/Events/bizence.webp"
import EventsAndShows from './timeline'
import Gallery from './Imagegallery'
import why from './why'
import "../Homepage/homepage.css"
import Yathartha from "../../Assets/Logos/_e3f1ca45-5c3b-4b19-8d9d-230ef152e80e-removebg-preview.png"
import Timeline from './timeline2'
import Carousel from './Carousel'
import RegistrationForm from './Register'
const Bizence = () => {
  return (
    <div>
       <section id ="banner" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img id='bannerimg' src ={Banner}></img>
       

      

      </section>
<section id ="Whatsappbut"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Link to ="https://chat.whatsapp.com/KrvvgTrbob62iMeAWQXx3V"> <button class="button-9" role="button">Join for Updates</button>
    </Link>    </section>
    <why/>
    <br></br>
   <Timeline/>
   <br></br>
    <section id = "About" className="container">

<div id="row"  data-aos="fade-right">
    <h2>Why Yathartha?</h2>
    <br/>
    <p>Initated in 2010, the Entrepreneurship Cell of SIESGST is a non profit student organisation dedicated to promoting the spirit of entrepreneurship among the students of India. To achieve this, we conduct events which help spread our message. We also have an incubation team which helps advise and foster the ideas of students who dream of building their own startup.</p>
</div>

<div id ="aboutimg" data-aos="fade-left">
  <img src = {Yathartha} />
</div>

</section> 
<Carousel/>
 <RegistrationForm/>
    </div>
  )
}

export default Bizence
