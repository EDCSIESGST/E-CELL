import React from 'react'
import"./eventsbrief.css"
import eventimg from "../../Assets/Events/img-8454.webp"
import buzzup from "../../Assets/Events/Screenshot 2023-10-07 142044.png"
import tml from "../../Assets/Events/tml-events-webssite.webp"
import bizence from "../../Assets/Events/bizence.webp"
import event1img from "../../Assets/Events/img-2512.webp"
import event2img from "../../Assets/Events/newbizence1.jpg"
import event3img from "../../Assets/Events/newbiznece2.jpg"
import buzzup2 from "../../Assets/Events/WhatsApp Image 2023-10-07 at 3.47.27 PM.jpeg"
import speaker from "../../Assets/Images/speaker.jpg"
const Eventsbrief = () => {
  return (
    <section id="Events" className="container">
    < div id ="Currentevents">
<h2> Events</h2>
<br></br>
<div className='Upcomingevents'>

<div className='Description'>
    <h3>Buzz Up</h3>
    <p>Buzz-Up is an online live session where a host conducts an interview with an accomplished entrepreneur, to gain insights and advice on entrepreneurship.</p>
    <br/>
    
  
    
</div>

<div className ="Eventsimg">
    <img src = {buzzup}></img>
</div> 
</div>
<div className='Upcomingevents'>
<div className='Description'>
    <h3>Speaker Session</h3>
    <p>E-Cell conducts various speaker sessions throughout the year. The sessions feature reputed professionals of their respective industries and provide insights to the world of businesses and give advice to the young students for their future endeavors.</p>
    <br/>
   
</div>
<div className ="Eventsimg">
    <img src = {speaker}></img>
</div> 
</div>
<div className='Upcomingevents'>
<div className='Description'>
    <h3>Bizence</h3>
    <p>It is a national level Business plan competition. It is an experience which aims to incentivize creative thinking and promote entrepreneurship culture by providing workshops, hands-on experiences ending with a B plan competition where CEO’s and Founders of various companies judge the ideas of the participants.</p>
    <br/>
   
    
</div>
<div className ="Eventsimg">
    <img src = {bizence} ></img>
</div> 
</div>
<div className='Upcomingevents'>
<div className='Description'>
    <h3>TML</h3>
  <p> BRAND-IT- An experience of a mélange of knowledge, thrill, enjoyment and loads of memorable moments with Brand-It! An event consisting of various games with fun elements which keeps the participants on their toes throughout the game round.<br></br>
                        IPL Auction -
                        Who doesn't love a good game of cricket?Making your own cricket team is equally fun. EDC brings forth a chance for everyone to celebrate this cricket love and experience an  IPL auction first-hand. An opportunity to choose your dream players and make your very own dream team! Oh and winners are awarded exciting prizes!
                    </p>
    <br/>
   
    
</div>
<div className ="Eventsimg">
    <img src = {tml} ></img>
</div> 
</div>
</div>
    <div id ="Previousevents">
      <div classname ="Preventheading">
        <h2>Past Events</h2>
       </div>
       <div className='imagecon'>
        <div className ="Eventsimg">
<img src = {eventimg}></img>
        </div>
        
        <div className ="Eventsimg">
        <img src = {event1img}></img>
        </div>
        
        <div className ="Eventsimg">
        <img src = {event2img}></img>
        </div>
        <div className ="Eventsimg">
        <img src = {event3img}></img>
        </div>
        <div className ="Eventsimg">
        <img src = {buzzup2}></img>
        </div>
        </div>

    </div>
 </section>
  )
}

export default Eventsbrief
