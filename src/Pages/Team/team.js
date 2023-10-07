import React from 'react';
import "./team.css"
import rajiv from "../../Assets/Images/348435917_773914384109778_7402216229396285711_n.jpg"
import rishij from "../../Assets/Team Photos/IMG_3696.jpg"
import jiya from "../../Assets/tEAM/Jiya.jpg"
import arya from "../../Assets/tEAM/Arya (1).jpg"
import nidhi from "../../Assets/tEAM/Nidhi (1).jpg"
import Ved from "../../Assets/Team Photos/Ved Gawade/IMG_20220925_150151.jpg"
import Anamika from "../../Assets/Team Photos/Anamika/IMG_20220803_155858_131.png"
import Hitesh from "../../Assets/Team Photos/Hitesh Patil/WhatsApp Image 2023-07-23 at 5.41.37 PM.jpeg"
import mokal from "../../Assets/Team Photos/Ayush/IMG_0470.HEIC"
import Yash from "../../Assets/Team Photos/Yash Bhujbal/Marketing_DSC0033 (3).jpg"
import bhandare from "../../Assets/Team Photos/Yash Bhandare/IMG_20230528_194720(1).jpg"
import sarvesh from "../../Assets/Team Photos/Sarvesh Bhayje/SAVE_20221029_011914.jpg"
import Ratul from "../../Assets/Team Photos/Ratul Raj/IMG-20230718-WA0001.jpg"
import Omkar from "../../Assets/Team Photos/Omkar Gorde/IMG_20230807_224249.jpg"
const Member = ({ name, role, imgSrc }) => (
  <li className="member">
    <div className="member-image">
      <img src={imgSrc} alt={name} />
    </div>
    <div className="member-info">
      <h3>{name}</h3>
      <p>{role}</p>
      <div className="social-link">
       
        <i className="fab fa-linkedin-in"></i>
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
      imgSrc="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/1.png"
    />
    <Member
      name="Ved Gawade"
      role="Chairperson"
      imgSrc={Ved}
    />
    <Member
      name="Anamika Nevase"
      role="E-cell Representative and Incubation Head"
      imgSrc={Anamika}
    />
    <Member
      name="Hitesh Patil"
      role="Design Head"
      imgSrc={Hitesh}
    />
  </ul>
  <ul className="list-members">
    <Member
      name="Sarvesh Bhayyje"
      role="PR and Marketing Head"
      imgSrc={sarvesh}
    />
    <Member
      name="Sakshi Sakhare"
      role="Social Media and Publicity Head"
      imgSrc={rajiv}
    />
    <Member
      name="Yash Bhujbal"
      role="Vice-Chairperson"
      imgSrc={Yash}
    />
    <Member
      name="Rajiv Patkar"
      role="Secretary"
      imgSrc="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/4.png"
    />
  </ul>

  <ul className="list-members">
    <Member
      name="Rishi Krishnan"
      role="Treasurer"
      imgSrc="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/1.png"
    />
    <Member
      name="Harshkumar Pasi"
      role="Incubation Co-ord"
      imgSrc="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/2.png"
    />
    <Member
      name="Ayush Mokal"
      role="Community Co-ord"
      imgSrc={mokal}
    />
    <Member
      name="Kiran Chinchawade"
      role="Community Co-ord"
      imgSrc={mokal}
    />
  </ul>
  <ul className="list-members">
    <Member
      name="Rishi Jha"
      role="PR Co-ord"
     imgSrc={rishij}
    />
    <Member
      name="Jiya Shetty"
      role="PR Co-ord"
      imgSrc={jiya}
    />
    <Member
      name="Nidhi Nandikol"
      role="Outreach Co-ord"
      imgSrc={nidhi}
    />
    <Member
      name="Arya Pawar"
      role="Outreach Co-ord"
      imgSrc={arya}
    />
  </ul>
  <ul className="list-members">
    <Member
      name="Ayush Patil"
      role="Tech Co-ord"
      imgSrc="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/1.png"
    />
    <Member
      name="Aditya Rao"
      role="Tech Co-ord"
      imgSrc={Omkar}
    />
    <Member
      name="Omkar gorde"
      role="Tech Co-ord"
      imgSrc={Omkar}
    />
    <Member
      name="Ratul Raj"
      role="Content Co-ord"
      imgSrc={Ratul}
    />
  </ul>
  <ul className="list-members">
    <Member
      name="Atharv Choughule"
      role="Design Co-ord"
      imgSrc="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/1.png"
    />
    <Member
      name="Yash Bhandare"
      role="Design Co-ord"
      imgSrc={bhandare}
    />
    <Member
      name="Anvit Nayak"
      role="Social Media Co-ord"
      imgSrc="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/3.png"
    />
    <Member
      name="Piyush Salunkhe"
      role="Social Media Co-ord"
      imgSrc="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/4.png"
    />
  </ul>
  </section>
);

export default Team;
