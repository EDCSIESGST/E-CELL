import React from 'react';
import "./timeline2.css"
function TimelineItem(props) {
  return (
    <div className={`con ${props.side}`} data-aos={props.animation}>
      <div className="content">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div>
      <h1 className='head'>Timeline</h1>
      <br></br>
      <div className="timeline">
        <TimelineItem side="left" title="Registrations 📝" content="2:00pm - 3:00pm" animation="fade-up" />
        <TimelineItem side="right" title="Kick Off Event 🚀" content="Lorem ipsum..." animation="fade-up" />
        <TimelineItem side="left" title="Snacks and Tea☕" content="Lorem ipsum..." animation="fade-up" />
        <TimelineItem side="right" title="Ideation and BMC Workshop💡" content="Lorem ipsum..." animation="fade-up" />
        <TimelineItem side="left" title="Dinner🍽️" content="Lorem ipsum..." animation="fade-up" />
        <TimelineItem side="right" title="Build 🛠️" content="Lorem ipsum..." animation="fade-up" />
        <TimelineItem side="left" title="Mentoring 🤝" content="Lorem ipsum..." animation="fade-up" />
        <TimelineItem side="right" title="Lunch 🍽️" content="Lorem ipsum..." animation="fade-up" />
        <TimelineItem side="left" title="Presentation Round 🎤" content="Lorem ipsum..." animation="fade-up" />
        <TimelineItem side="right" title="Winners and Felicitation🏆" content="Lorem ipsum..." animation="fade-up" />
      </div>
    </div>
  );
}

export default Timeline;
