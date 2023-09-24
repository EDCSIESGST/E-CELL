import React from 'react';

import "./footer.css"
import logo from "..//../src/Assets/Images/Logo.png"
import nba from "../Assets/Images/image 3.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className = "Leftfooter">
            <img src ={logo}></img>

<p>We conduct a number of workshops, speaker sessions, inter-collegiate and national level competitions and also support student-run ventures.</p>
<p>Contact: +91 67372901901</p>
      <p>Mail:dkaa@siesgst.ac.in</p>
        </div>
        <div className = "RightFooter">
        <iframe
        title="Google Maps Location"
        width="400"
        height="200"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.739234045746!2d-122.08407888479494!3d37.42199997981284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba8e24b17a3d%3A0x95932a4dbcb34c8e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1605449253441!5m2!1sen!2sus"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
      <br/>
      <br/>
     
            <p>Copyright © All rights reserved <br/> Developed by the Technical Team of  E-CELL SIES GST</p>
            </div>

      </div>
  );
};

export default Footer;
