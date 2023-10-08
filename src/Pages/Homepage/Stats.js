import React from 'react';
import StatCounter from './StatCounter'; // Import the StatCounter component
import statsimg from "../../Assets/Images/ic_baseline-currency-exchange.png";
import team from "../../Assets/Stata/29.jpg";
import Communityimg from "../../Assets/Stata/29-removebg-preview.png";
import evevntimg from "../../Assets/Stata/5016897-removebg-preview.png";
import fimg from "../../Assets/Stata/7320708-removebg-preview.png";
import ast from "../../Assets/Stata/54950_prev_ui.png";

const Stats = () => {
  return (
    <section id="Statistics">
      <div className="StatsGrid container">
        <div className="Stat">
          <div className="Icon"><img src={ast} alt="Speaker Sessions" /></div>
          <StatCounter targetValue={10} label="Speaker Sessions" />
          <p>Speaker Sessions</p>
        </div>
        <div className="Stat">
          <div className="Icon"><img src={Communityimg} alt="Startups" /></div>
          <StatCounter targetValue={30} label="Startups" />
          <p>Startups</p>
        </div>
        <div className="Stat">
          <div className="Icon"><img src={evevntimg} alt="Events" /></div>
          <StatCounter targetValue={20} label="Events" />
          <p>Events</p>
        </div>
        <div className="Stat">
          <div className="Icon"><img src={fimg} alt="Community Members" /></div>
          <StatCounter targetValue={300} label="Community Members" />
          <p>Community Members</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;

