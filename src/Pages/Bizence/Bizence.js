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
import "./bizence.css"
import post from  "../../Assets/Events/Bizenceimg/_4c0f5dc0-c805-4135-bdaf-bcd5ee37e55c-removebg-preview.png"
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
    <section id = "About" className="container">

<div id="row"  data-aos="fade-right">
    <h2>What is Bizence?</h2>
    <br/>
    <p>It is a national level Business plan competition. It is an experience which aims to incentivize creative thinking and promote entrepreneurship culture by providing workshops, hands-on experiences ending with a B plan competition where CEO’s and Founders of various companies judge the ideas of the participants.</p>
</div>

<div id ="aboutis" data-aos="fade-left">
  <img src = {post} />
</div>

</section> 
    <why/>
    <br></br>
   <Timeline/>
   <br></br>
    <br></br>
<Carousel/>
 <RegistrationForm/>
 <iframe
      src="https://lu.ma/embed-checkout/evt-Qgt8KSFBPonnAnv"
      width="100%"
      height="500px"
      frameBorder="0"
      style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
      allowFullScreen
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
    </div>
  )
}

export default Bizence
