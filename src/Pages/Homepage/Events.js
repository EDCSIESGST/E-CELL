import React from 'react';
import eventimg from '../../Assets/Images/blue-aesthetic-your-lie-in-april-imbwa0bnn3p8pway.jpg';
import buzzup from "../../Assets/Images/Buzz Up Poster (3).png"
const Events = () => {
  return (
    <section id="Events">
        < div id ="Currentevents">
<h2> Upcoming Events</h2>
<br></br>
<div className='Upcomingevents'>

    <div className='Description'>
        <h3>Event Name</h3>
        <p>We conduct a number of workshops, speaker sessions, inter-collegiate and national level competitions and also support student-run ventures.</p>
        <br/>
        <button id="Registerbutton">Register</button>
        
    </div>
  
    <div className ="Eventsimg">
        <img src = {buzzup}></img>
    </div> 
</div>
<div className='Upcomingevents'>
    <div className='Description'>
        <h3>Event Name</h3>
        <p>We conduct a number of workshops, speaker sessions, inter-collegiate and national level competitions and also support student-run ventures.</p>
        <br/>
        <button id="Registerbutton">Register</button>
        
    </div>
    <div className ="Eventsimg">
        <img src = {buzzup}></img>
    </div> 
</div>
<div className='Upcomingevents'>
    <div className='Description'>
        <h3>Event Name</h3>
        <p>We conduct a number of workshops, speaker sessions, inter-collegiate and national level competitions and also support student-run ventures.</p>
        <br/>
        <button id="Registerbutton">Register</button>
        
    </div>
    <div className ="Eventsimg">
        <img src = {buzzup}></img>
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
            <img src = {eventimg}></img>
            </div>
            
            <div className ="Eventsimg">
            <img src = {eventimg}></img>
            </div>
            <div className ="Eventsimg">
            <img src = {eventimg}></img>
            </div>
            </div>

        </div>
     </section>
  );
};

export default Events;
