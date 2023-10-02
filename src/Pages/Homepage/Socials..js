import React from 'react'
import insta from "../../Assets/Logos/icons8-instagram-96.png"
import twitter from "../../Assets/Logos/icons8-x-96.png"
import medium from "../../Assets/Logos/icons8-medium-96.png"
import linkedin from "../../Assets/Logos/icons8-linked-in-96.png"
import whatsapp from '../../Assets/Logos/icons8-whatsapp-96 (1).png'
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
        <button id='Registerbutton'>Follow/688</button>
       </div>
       <div className='indisocials'>
       <img src ={twitter}></img>
        <p>@ecellsiesgst</p>
        <button id='Registerbutton'>Follow</button>
        </div>
        <div className='indisocials'>
        <img src ={medium}></img>
        <p>medium.com</p>
        <button id='Registerbutton'>Follow</button>
        </div>
        <div className='indisocials'>
        <img src ={linkedin}></img>
        <p>linkedin.com</p>
        <button id='Registerbutton'>Follow</button>
        </div>
        <div className='indisocials'>
        <img src ={whatsapp}></img>
        <p>@ecellsiesgst</p>
        <button id='Registerbutton'>Join us</button>
        </div>
      </div>
      
      </section>
     
    </div>
  )
}

export default Socials
