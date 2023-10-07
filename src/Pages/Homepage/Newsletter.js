import React from 'react'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <section id="Newsletter">
<div id ="newsletterp">
    <h3>Blogs</h3>
    <br/>
    <p>E-Cell SIESGST releases blogs on a weekly basis on Medium. These blogs tackle subjects useful to people unfamiliar with entrepreneurship as well those who are. Sign up to read our blogs</p>
   <br/>
   <Link  to="https://medium.com/@ecellsiesgst" target='_blank'>  <button id='NewsletterSignup' >Sign Up</button></Link>
</div>
</section>
  )
}

export default Newsletter
