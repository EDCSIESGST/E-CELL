import React, { useRef } from 'react';
import './homepage.css';
import Newsletter from './Newsletter';
import Stats from './Stats';
import About from './About';
import Events from './Events';
import Socials from "./Socials.";
import video from "../../Assets/video/Sequence 01_2.mp4"
import Banner from "../../Assets/Images/banner.png"
import {Media, Video } from '@vidstack/player-react';
function Home() {

  return (
    
    <div>
      <section id ="banner" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img id='bannerimg' src ={Banner}></img>
      </section>
     

      <About />
      <Stats />
      <Events />
      <Socials />
      <Newsletter />
      <section id="Video" className="container">
        <div className="video-container" >
        <Media>
  <Video loading="visible" poster="" autoplay controls preload="true">
    <video loading="visible" poster="" src={video}  data-video="0" controls />
  </Video>
</Media>
        </div>
      </section>
    </div>
  );
}

export default Home;

