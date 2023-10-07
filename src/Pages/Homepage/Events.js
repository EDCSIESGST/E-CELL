import React from 'react';

import buzzup from "../../Assets/Events/Screenshot 2023-10-07 142044.png"
import bizence from "../../Assets/Events/bizence.webp"
import eventimg from "../../Assets/Events/img-8454.webp"
import event1img from "../../Assets/Events/img-2512.webp"
import event2img from "../../Assets/Events/newbizence1.jpg"
import event3img from "../../Assets/Events/newbiznece2.jpg"
import buzzup2 from "../../Assets/Events/pd-cover-page.webp"
const Events = () => {
  return (
    <section id="Events" className="container">
        < div id ="Currentevents">
<h2> Upcoming Events</h2>
<br></br>
<div className='Upcomingevents'>

    <div className='Description'>
        <h3>Buzz Up</h3>
        <p>Buzz-Up is an online live session where a host conducts an interview with an accomplished entrepreneur, to gain insights and advice on entrepreneurship.</p>
        <br/>
        
        <button id="Registerbutton">Register</button>
        
    </div>
  
    <div className ="Eventsimg">
        <img src = {buzzup}></img>
    </div> 
</div>
<div className='Upcomingevents'>
    <div className='Description'>
        <h3>Speaker Session</h3>
        <p>We conduct a number of workshops, speaker sessions, inter-collegiate and national level competitions and also support student-run ventures.</p>
        <br/>
        <button id="Registerbutton">Coming soon</button>
        
    </div>
    <div className ="Eventsimg">
        <img src = {buzzup}></img>
    </div> 
</div>
<div className='Upcomingevents'>
    <div className='Description'>
        <h3>Bizence</h3>
        <p>It is a national level Business plan competition. It is an experience which aims to incentivize creative thinking and promote entrepreneurship culture by providing workshops, hands-on experiences ending with a B plan competition where CEO’s and Founders of various companies judge the ideas of the participants.</p>
        <br/>
        <button id="Registerbutton">Coming soon</button>
        
    </div>
    <div className ="Eventsimg">
        <img src = {bizence} ></img>
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
  );
};

export default Events;
