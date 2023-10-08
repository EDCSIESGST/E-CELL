import React from 'react';
import "./team.css"
import { Link } from 'react-router-dom';
import chavan from "../../Assets/Team Photos/Frame 40.png"
import rishij from "../../Assets/Team Photos/IMG_3696.jpg"
import jiya from "../../Assets/tEAM/Jiya.jpg"
import arya from "../../Assets/tEAM/Arya (1).jpg"
import nidhi from "../../Assets/tEAM/Nidhi (1).jpg"
import Ved from "../../Assets/Team Photos/Ved Gawade/IMG_20220925_150151.jpg"
import Anamika from "../../Assets/Team Photos/Anamika/IMG_20220803_155858_131.png"
import Hitesh from "../../Assets/Team Photos/Hitesh Patil/WhatsApp Image 2023-07-23 at 5.41.37 PM.jpeg"
import rishik from "../../Assets/Images/rishik.jpg"
import Yash from "../../Assets/Team Photos/Yash Bhujbal/Marketing_DSC0033 (3).jpg"
import bhandare from "../../Assets/Team Photos/Yash Bhandare/IMG_20230528_194720(1).jpg"
import sarvesh from "../../Assets/Team Photos/Sarvesh Bhayje/SAVE_20221029_011914.jpg"
import Ratul from "../../Assets/Team Photos/Ratul Raj/IMG-20230718-WA0001.jpg"
import Omkar from "../../Assets/Team Photos/Omkar Gorde/IMG_20230807_224249.jpg"
import anvit from "../../Assets/Team Photos/WhatsApp Image 2023-10-07 at 10.23.01 PM.jpeg"
import atharv from "../../Assets/Team Photos/Screenshot 2023-10-07 at 10.45.30 PM.png"
import rajiv from "../../Assets/Team Photos/DHA_2265 (1).jpg"
import sakshi from "../../Assets/Team Photos/Sakshi Sakhare.jpg"
import mokal from "../../Assets/Team Photos/IMG_4460_(1).jpg"
import kiran from "../../Assets/Team Photos/IMG-20231008-WA0001.png"
import rao from "../../Assets/Team Photos/aditya_rao.jpeg"
import pasi from "../../Assets/Team Photos/Harshkumar/Harsh_META.jpg"
import piyush from "../../Assets/Images/piyush.jpg"
import ayush from "../../Assets/Team Photos/Ayush/1696695822278.jpg"
const Member = ({ name, role, imgSrc, linkedin }) => (
  <li className="member">
    <div className="member-image">
      <img src={imgSrc} alt={name} />
    </div>
    <div className="member-info">
      <h3>{name}</h3>
      <p>{role}</p>
       <div className="social-link">
          <Link to={linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" style={{ zIndex: 1 }}></i>
          </Link>
        </div>
    
    </div>
  </li>
);

const Team = () => (
    <section id='Teams'>
  <ul className="list-members">
    <Member
      name="Dr.Kaustubh Chavan"
      role="Incharge"
      imgSrc={chavan}
      linkedin="https://www.linkedin.com/in/dr-kaustubh-chavan-94473017/"
    />
    <Member
      name="Ved Gawade"
      role="Chairperson"
      imgSrc={Ved}
      linkedin="https://www.linkedin.com/in/ved-gawade/"
    />
    <Member
      name="Anamika Nevase"
      role="E-cell Representative and Incubation Head"
      imgSrc={Anamika}
      linkedin="https://www.linkedin.com/in/anamikanevase4433/"
    />
    <Member
      name="Hitesh Patil"
      role="Design Head"
      imgSrc={Hitesh}
      linkedin="https://www.linkedin.com/in/hitesh-patil-b5b3bb216/"
    />
  </ul>
  <ul className="list-members">
    <Member
      name="Sarvesh Bhayyje"
      role="PR and Marketing Head"
      imgSrc={sarvesh}
      linkedin="https://www.linkedin.com/in/sarvesh-bhayje-a66059212/"
    />
    <Member
      name="Sakshi Sakhare"
      role="Social Media and Publicity Head"
      imgSrc={sakshi}
      linkedin="https://www.linkedin.com/in/sakshi-sakhare-0902/"
    />
    <Member
      name="Yash Bhujbal"
      role="Vice-Chairperson"
      imgSrc={Yash}
      linkedin="https://www.linkedin.com/in/yash-bhujbal-740ab5229"
    />
    <Member
      name="Rajiv Patkar"
      role="Secretary"
      imgSrc={rajiv}
      linkedin="https://www.linkedin.com/in/rajivpatkar"
    />
  </ul>

  <ul className="list-members">
    <Member
      name="Rishi Krishnan"
      role="Treasurer"
      imgSrc={rishik}
      linkedin="https://www.linkedin.com/in/rishi-krishnan-42184a248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    />
    <Member
      name="Harshkumar Pasi"
      role="Incubation Co-ord"
      imgSrc={pasi}
      linkedin="https://linkedin.com/in/harshkp19"
    />
    <Member
      name="Ayush Mokal"
      role="Community Co-ord"
      imgSrc={mokal}
      linkedin="https://www.linkedin.com/in/ayushmokal/"
    />
    <Member
      name="Kiran Chinchawade"
      role="Community Co-ord"
      imgSrc={kiran}
      linkedin="https://www.linkedin.com/in/kaustubh-chavan/"
    />
  </ul>
  <ul className="list-members">
    <Member
      name="Rishi Jha"
      role="PR Co-ord"
     imgSrc={rishij}
     linkedin="https://www.linkedin.com/in/rishi-jha-531b73248/"
    />
    <Member
      name="Jiya Shetty"
      role="PR Co-ord"
      imgSrc={jiya}
      linkedin="http://linkedin.com/in/jiya-shetty-8a6517251"
    />
    <Member
      name="Nidhi Nandikol"
      role="Outreach Co-ord"
      imgSrc={nidhi}
      linkedin="https://www.linkedin.com/in/nidhi-nandikol-46418a283"
    />
    <Member
      name="Arya Pawar"
      role="Outreach Co-ord"
      
      imgSrc={arya}
      linkedin="https://www.linkedin.com/in/aryapawar0207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    />
  </ul>
  <ul className="list-members">
    <Member
      name="Ayush Patil"
      role="Tech Co-ord"
      imgSrc={ayush}
      linkedin="https://www.linkedin.com/in/kaustubh-chavan/"
    />
    <Member
      name="Aditya Rao"
      role="Tech Co-ord"
      imgSrc={rao}
      linkedin="https://www.linkedin.com/in/kaustubh-chavan/"
    />
    <Member
      name="Omkar gorde"
      role="Tech Co-ord"
      imgSrc={Omkar}
      linkedin="https://www.linkedin.com/in/omkargorde"
    />
    <Member
      name="Ratul Raj"
      role="Content Co-ord"
      imgSrc={Ratul}
      linkedin="https://www.linkedin.com/in/kaustubh-chavan/"
    />
  </ul>
  <ul className="list-members">
    <Member
      name="Atharv Choughule"
      role="Design Co-ord"
      imgSrc={atharv}
      linkedin="https://www.linkedin.com/in/kaustubh-chavan/"
    />
    <Member
      name="Yash Bhandare"
      role="Design Co-ord"
      imgSrc={bhandare}
      linkedin="https://www.linkedin.com/in/kaustubh-chavan/"
    />
    <Member
      name="Anvit Nayak"
      role="Social Media Co-ord"
      imgSrc={anvit}
      linkedin="https://www.linkedin.com/in/kaustubh-chavan/"
    />
    <Member
      name="Piyush Salunkhe"
      role="Social Media Co-ord"
      imgSrc={piyush}
      linkedin="https://www.linkedin.com/in/kaustubh-chavan/"
    />
  </ul>
  </section>
);

export default Team;
