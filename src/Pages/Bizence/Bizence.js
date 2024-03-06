import React from 'react'
import "../../Pages/Homepage/homepage.css"
import { Link } from 'react-router-dom'
import Banner from "./Untitled-4 (2).png"
import './timeline.css'

import EventsAndShows from './timeline'
import Gallery from './Imagegallery'
import why from './why'
import "../Homepage/homepage.css"
import Timeline from './timeline2'
import Carousel from './Carousel'
import "./bizence.css"

import RegistrationForm from './Register'
import Tracks from './Tracks'
import Faq from './Faq'

import PrizeSection from './prizes'
import rocket from "./"
import SponsorSection from './sponsors'
const Bizence = () => {
  return (
    <div id ="bizencepage">
       <section id ="banner" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
        <img id='bannerimg' src ={Banner}></img>
       

      

      </section>
<section id ="Whatsappbut"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Link to ="https://chat.whatsapp.com/KrvvgTrbob62iMeAWQXx3V"> <button class="button-9" role="button">Apply with Unstop</button>
    </Link>    </section>
    <section id = "About" className="container">

<div id="row"  data-aos="fade-right">
    <h2>What is Bizence?</h2>
    <br/>
    <p>It is a national level Business plan competition. It is an experience which aims to incentivize creative thinking and promote entrepreneurship culture by providing workshops, hands-on experiences ending with a B plan competition where CEO’s and Founders of various companies judge the ideas of the participants.</p>
</div>

<div id ="aboutis" data-aos="fade-left">
  <img src = {rocket} />
</div>

</section> 
<Tracks/>
    <why/>
    <br></br>
   <Timeline/>
   <br></br>
    <br></br><highlight/>
<Carousel/>

<Faq/>
<br/>
<SponsorSection/>

    </div>
  )
}

export default Bizence
