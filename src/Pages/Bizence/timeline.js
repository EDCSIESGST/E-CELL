import React from 'react'
import "./timeline.css"
import bizence from "../../Assets/Events/bizence.webp"
const timeline = () => {
  return (
    <div>
  
  <section id='timeline'>
  <img src = {bizence} ></img>
    <div class="text">
      <h2>I just love</h2>
      <p>These scroll driven animations</p>
    </div>
  </section>
  <section>
  <img src = {bizence} ></img>
    <div class="text">
      <h2>And the fact that</h2>
      <p>combined with scroll-snap</p>
    </div>
  </section>
  <section>
  <img src = {bizence} ></img>
    <div class="text">
      <h2>These can create some cool effects</h2>
      <p>When entering or leaving the scroll view</p>
    </div>
  </section>
  <section>
  <img src = {bizence} ></img>
    <div class="text">
      <h2>I really think this opens a lot of possibilities</h2>
      <p>For a performant web, with a bit of</p>
    </div>
  </section>
  <section>
  <img src = {bizence} ></img>
    <div class="text">
      <h2>Extra ooooomph</h2>
      <p>(yes, i'm running a bit out of inspiration here)</p>
    </div>
 
  </section>

    </div>
  )
}

export default timeline
