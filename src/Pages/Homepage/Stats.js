import React from 'react'
import statsimg from "..//../Assets/Images/ic_baseline-currency-exchange.png"
import team from "../../Assets/Stata/29.jpg"
import Communityimg from  "../../Assets/Stata/29-removebg-preview.png"
const Stats = () => {
  return (
    <section id="Statistics">

    <div class="StatsGrid container">

        <div class="Stat">
            <div class="Icon"><img src = {statsimg}></img></div>
            
            <h2>500+</h2>
            <p>Events</p>
        </div>
        <div class="Stat">
            <div class="Icon"><img src = {  Communityimg}></img></div>
           
            <h2>300+</h2>
            <p>Community Members</p>
        </div>
        <div class="Stat">
            <div class="Icon"><img src = {statsimg}></img></div>
            <h2>69+</h2>
            <p>Something</p>
        </div>
        <div class="Stat">
            <div class="Icon"><img src = {statsimg}></img></div>
            <h2>420+</h2>
            <p>Something</p>
        </div>

    </div>

</section>

  )
}

export default Stats
