import React from 'react'
import "../../Pages/Homepage/homepage.css"
import { Link } from 'react-router-dom'
import Banner from "../../Assets/Images/banner.png"
import './timeline.css'
import bizence from "../../Assets/Events/bizence.webp"
const Bizence = () => {
  return (
    <div>
       <section id ="banner" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img id='bannerimg' src ={Banner}></img>
       

      

      </section>
<section id ="Whatsappbut"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Link to ="https://chat.whatsapp.com/KrvvgTrbob62iMeAWQXx3V"> <button class="button-9" role="button">Join for Updates</button>
    </Link>    </section>
    <section id='what is bizence'>

    </section>
    <main>
  <section className='timeline'>
  <img src={bizence}></img>
    <div class="text">
      <h2>I just love</h2>
      <p>These scroll driven animations</p>
    </div>
  </section>
  <section className='timeline'>
  <img src={bizence}></img>
    <div class="text">
      <h2>And the fact that</h2>
      <p>combined with scroll-snap</p>
    </div>
  </section>
  <section className='timeline'>
  <img src={bizence}></img>
    <div class="text">
      <h2>These can create some cool effects</h2>
      <p>When entering or leaving the scroll view</p>
    </div>
  </section>
  <section>
  <img src={bizence}></img>
    <div class="text">
      <h2>I really think this opens a lot of possibilities</h2>
      <p>For a performant web, with a bit of</p>
    </div>
  </section>
  <section className='timeline'>
  <img src={bizence}></img>
    <div class="text">
      <h2>Extra ooooomph</h2>
      <p>(yes, i'm running a bit out of inspiration here)</p>
    </div>
  </section>
  
</main>
    </div>
  )
}

export default Bizence
