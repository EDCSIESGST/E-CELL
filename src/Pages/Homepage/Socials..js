import React from 'react'
import insta from "../../Assets/Logos/icons8-instagram-96.png"
import twitter from "../../Assets/Logos/icons8-twitter-96 - Copy.png"
import medium from "../../Assets/Logos/icons8-medium-96 (2) - Copy.png"
import linkedin from "../../Assets/Logos/icons8-linked-in-96.png"
import whatsapp from '../../Assets/Logos/icons8-whatsapp-96 (1).png'
import { Link } from 'react-router-dom'
const Socials = () => {
  return (
    <div>
      <section id ="Socials">
      <h2>Our Socials</h2>
      <br/>
      <div className='Socialcontainer'>
       <div className='indisocials'>
        <img src ={insta}></img>
        
        <p>@ecellsiesgst</p>
        <Link  to="https://www.instagram.com/ecellsiesgst/" target='_blank'>  <button id='Registerbutton' >Follow/700</button></Link>
       </div>
       <div className='indisocials'>
       <img src ={twitter}></img>
        <p>@ecellsiesgst</p>
        <Link  to="https://twitter.com/ecellsiesgst" target='_blank'>  <button id='Registerbutton' >Follow</button></Link>
        </div>
        <div className='indisocials'>
     <img src ={medium}></img>
        <p>medium.com</p>
        <Link  to="https://medium.com/@ecellsiesgst" target='_blank'>  <button id='Registerbutton' >Follow</button></Link>
        </div>
        <div className='indisocials'>
        <img src ={linkedin}></img>
        <p>linkedin.com</p>
        <Link  to="https://www.linkedin.com/company/edcsiesgst/" target='_blank'>  <button id='Registerbutton' >Follow</button></Link>
        </div>
        <div className='indisocials'>
        <img src ={whatsapp}></img>
        <p>@ecellcommunity</p>
        <Link  to="https://chat.whatsapp.com/JF1n6DebDSe5DH8NW3QK9G" target='_blank'>  <button id='Registerbutton' >Follow</button></Link>
        </div>
      </div>
      
      </section>
     
    </div>
  )
}

export default Socials
