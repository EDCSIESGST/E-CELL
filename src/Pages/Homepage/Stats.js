import React from 'react'
import statsimg from "..//../Assets/Images/ic_baseline-currency-exchange.png"
import team from "../../Assets/Stata/29.jpg"
import Communityimg from  "../../Assets/Stata/29-removebg-preview.png"
import evevntimg from "../../Assets/Stata/5016897-removebg-preview.png"
import fimg from "../../Assets/Stata/7320708-removebg-preview.png"
import ast from  "../../Assets/Stata/54950_prev_ui.png"
const Stats = () => {
  return (
    <section id="Statistics">

    <div class="StatsGrid container">

        <div class="Stat">
            <div class="Icon"><img src = {ast}></img></div>
            
            <h2>10+</h2>
            <p>Speaker Sessions</p>
        </div>
        <div class="Stat">
            <div class="Icon"><img src = {  Communityimg}></img></div>
           
            <h2>30+</h2>
            <p>Startups</p>
        </div>
        <div class="Stat">
            <div class="Icon"><img src = {evevntimg}></img></div>
            <h2>20+</h2>
            <p>Events</p>
        </div>
        <div class="Stat">
            <div class="Icon"><img src = {fimg}></img></div>
            <h2>300+</h2>
            <p>Community Members</p>
        </div>

    </div>

</section>

  )
}

export default Stats
