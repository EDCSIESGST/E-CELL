import React, { useRef } from 'react';
import './homepage.css';
import Newsletter from './Newsletter';
import Stats from './Stats';
import About from './About';
import Events from './Events';
import Socials from "./Socials.";
import video from "../../Assets/video/Sequence 01_2.mp4"
import Banner from "../../Assets/Images/banner.png"
import whatsapp from "../../Assets/Logos/icons8-whatsapp-40.png"
import { Link } from 'react-router-dom';
import {Media, Video } from '@vidstack/player-react';

function Home() {

  return (
    
    <div>
      <section id ="banner" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img id='bannerimg' src ={Banner}></img>
       

      

      </section>
<section id ="Whatsappbut"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Link to ="https://chat.whatsapp.com/KrvvgTrbob62iMeAWQXx3V"> <button class="button-9" role="button">Join for Updates</button>
    </Link>    </section>
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

