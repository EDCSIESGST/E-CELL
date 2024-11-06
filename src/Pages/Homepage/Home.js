import React, { useRef } from 'react';
import './homepage.css';
import Newsletter from './Newsletter';
import Stats from './Stats';
import About from './About';
import Events from './Events';
import Socials from "./Socials.";
import Councilp from "../../Assets/Images/IMG-20240117-WA0002.jpg"
import video from "../../Assets/video/Sequence 01_2.mp4"
import Banner from "../../Assets/Images/banner.png"
import whatsapp from "../../Assets/Logos/icons8-whatsapp-40.png"
import { Link } from 'react-router-dom';
import {Media, Video } from '@vidstack/player-react';





function Home() {

  return (
    
    <div>

<section id="Video" className='container'>
  <div className='video-container'>
    <Media>
    <Video loading="visible" poster="" autoplay controls preload="true">
    <video loading="visible" poster="" src={video}  data-video="0" controls />
    </Video>V


    </Media>
  </div>
</section>

    {/* <Link to ="https://chat.whatsapp.com/KrvvgTrbob62iMeAWQXx3V"> <button class="button-9" role="button">Join for Updates</button>
    </Link>     */}
      
<section id ="Whatsappbut"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    </section>
      <About />
      <Stats />
      <Events />
      <section id='Councilphoto' >
<h1>Council 2023-2024</h1>
<br></br>

<div id='imgcouncil' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src ={Councilp}></img>
</div>
     </section>
      <Socials />
      <Newsletter />
      
    </div>
  );
}

export default Home;



