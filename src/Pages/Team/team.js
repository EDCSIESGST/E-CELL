import React from 'react';
import "./team.css"
import { Link } from 'react-router-dom';
// import chavan from "../../Assets/Team Photos/Frame 40.png"
// import chavan from "src/Assets/Team Photos/Frame 40.png"
// import rishij from "../../Assets/Team Photos/IMG_3696.jpg"
// import jiya from "../../Assets/tEAM/Jiya.jpg"

// import nidhi from "../../Assets/tEAM/Nidhi (1).jpg"
// import Ved from "../../Assets/Team Photos/Ved Gawade/IMG_20220925_150151.jpg"
// import Anamika from "../../Assets/Team Photos/Anamika/IMG_20220803_155858_131.png"
// import Hitesh from "../../Assets/Team Photos/Hitesh Patil/WhatsApp Image 2023-07-23 at 5.41.37 PM.jpeg"
// import rishik from "../../Assets/Images/rishik.jpg"
// import Yash from "../../Assets/Team Photos/Yash Bhujbal/Marketing_DSC0033 (3).jpg"
// import bhandare from "../../Assets/Team Photos/Yash Bhandare/IMG_20230528_194720(1).jpg"
// import sarvesh from "../../Assets/Team Photos/Sarvesh Bhayje/SAVE_20221029_011914.jpg"
// import Ratul from "../../Assets/Team Photos/Ratul Raj/IMG-20230718-WA0001.jpg"
// import Omkar from "../../Assets/Team Photos/Omkar Gorde/IMG_20230807_224249.jpg"
// import anvit from "../../Assets/Team Photos/WhatsApp Image 2023-10-07 at 10.23.01 PM.jpeg"
// import atharv from "../../Assets/Team Photos/Screenshot 2023-10-07 at 10.45.30 PM.png"
// import rajiv from "../../Assets/Team Photos/DHA_2265 (1).jpg"
// import sakshi from "../../Assets/Team Photos/Sakshi Sakhare.jpg"
// import mokal from "../../Assets/Team Photos/IMG_4460_(1).jpg"
// import kiran from "../../Assets/Team Photos/IMG-20231008-WA0001.png"
// import rao from "../../Assets/Team Photos/aditya_rao.jpeg"
// import pasi from "../../Assets/Team Photos/Harshkumar/White and Blue Modern Linkedin Profile Picture.png"
// import piyush from "../../Assets/Images/piyush.jpg"

// import Rajneel from "../../Assets/Team_24-25/Rajneel_chougule/IMG_8814-removebg.jpg"
// import om from "../../Assets/Team_24-25/OM_Revankar/image.jpg"

//TEAM 24-25
import arya from "../../Assets/Team_24-25/arya/IMG_20230222_213431.jpg"
import ayush from "../../Assets/Team_24-25/Ayush_Patil/IMG_20230807_223319.jpg"
import adarsh from "../../Assets/Team_24-25/Adarsh_Korade/1700593386497.jpg"
import adithya from "../../Assets/Team_24-25/Adithya_Venkat/Adithya.png"
import arya_m from "../../Assets/Team_24-25/Arya_Mishra/IMG-20241015-WA0043.jpg"
import arya_p from "../../Assets/Team_24-25/Arya_Pawar/272858.jpg"
import kiran from "../../Assets/Team_24-25/Kiran_Chinchawade/_storage_emulated_0_DCIM_Camera_IMG_20221224_130752.jpg"
import mihir from "../../Assets/Team_24-25/Mihir_Panpatil/WhatsApp Image 2023-08-30 at 10.24.19.jpeg"
import nadaa from "../../Assets/Team_24-25/Nadaa_Ahamed/e7b5f6bd-7e56-4627-b8c1-8e967d2218ea.jpg"
// import ojas from ""
import om from "../../Assets/Team_24-25/OM_Revankar/image.jpg"
import rajneel from "../../Assets/Team_24-25/Rajneel_chougule/WhatsApp Image 2024-10-17 at 21.23.48_74642ad9.jpg"
import ratul from "../../Assets/Team_24-25/Ratul_Raj/DSC_9239.jpg"
import rithvik from "../../Assets/Team_24-25/Rithvik_Shetty/IMG_1226.JPG"
// import sharli from ""
import shravani from "../../Assets/Team_24-25/Shravani_shinde/shravani shinde picture.jpeg"
import sudeepto from "../../Assets/Team_24-25/Sudeepto_Ghosh/IMG_20240728_172918_578.jpg"
import yash_v from "../../Assets/Team_24-25/Yash Varma/yash_v.jpg"
import vedant from "../../Assets/Team_24-25/Vedant_Thakur/WhatsApp Image 2024-08-25 at 11.28.46 AM.jpeg"
import varun from "../../Assets/Team_24-25/Varun_Ubale_/WhatsApp Image 2024-10-17 at 21.33.58_c19aec7e.jpg"
import yash_b from "../../Assets/Team_24-25/Yash_Bhujbal/IMG_1167.jpg"
import praveen from "../../Assets/Team_24-25/Praveen_Shukla/IMG-20240903-WA0022.jpg"
import muthushri from "../../Assets/Team_24-25/Muthushri_Pillai/IMG-20241006-WA0003.jpg"
import tanishq from "../../Assets/Team_24-25/Tanishq_Thorat/IMG-20241005-WA0019.jpg"
import priya from "../../Assets/Team_24-25/Priya_Darshini/google.android.apps.photos.jpg"
import ojas from "../../Assets/Team_24-25/Ojas_Neve/ojas linkedin.jpeg"
import sara from "../../Assets/Team_24-25/Sara_Bhalerao/WhatsApp Image 2024-10-23 at 16.53.17_5ede49b1.jpg"
import siddesh from "../../Assets/Team_24-25/Siddhesh_Venkat/IMG-20240704-WA0108(1).jpg"
import sharli from "../../Assets/Team_24-25/Sharli_Chauhan/Picsart_24-08-24_13-19-44-491.jpg"
import tiesha from "../../Assets/Team_24-25/Tiesha_Tripathi/20231204_173228.jpg"
import siddhi from "../../Assets/Team_24-25/Siddhi_Mahale/IMG_20241017_232757.jpg"
import shrusti from "../../Assets/Team_24-25/Shrusti_Wani/WhatsApp Image 2024-10-17 at 21.28.37_7c08714b.jpg"
import dr_kalyani from "../../Assets/Team_24-25/Dr_Kalyani/dr-kalyani-pampattiwar.jpg"


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
      name="Dr. Kalyani Pampattiwar"
      role="Incharge"
      imgSrc={dr_kalyani}
      linkedin="https://www.linkedin.com/in/dr-kalyani-pampattiwar-8b2415177/?originalSubdomain=in"
    />
    <Member
      name="Kiran Chinchawade"
      role="Chairperson"
      imgSrc={kiran}
      linkedin="https://www.linkedin.com/in/kiran-chinchawade-91105722a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
    />
    <Member
      name="Yash Bhujbal"
      role="E-cell Representative and Incubation Head"
      imgSrc={yash_b}
      linkedin="https://www.linkedin.com/in/yash-bhujbal-740ab5229"
    />
    <Member
      name="Ayush Patil"
      role="Technical Head"
      imgSrc={ayush}
      linkedin="https://www.linkedin.com/in/ayush-patil-3865b8227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
    />
  </ul>
  <ul className="list-members">
    <Member
      name="Ratul Raj"
      role="Treasurer & Content Head"
      imgSrc={ratul}
      linkedin="https://www.linkedin.com/in/ratul-raj-23a43b298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
    />
    <Member
      name="Arya Pawar"
      role="Social Media Head"
      imgSrc={arya}
      linkedin="https://www.linkedin.com/in/aryapawar0207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
    />
    <Member
      name="Rajneel Chougule"
      role="Vice-Chairperson"
      imgSrc={rajneel}
      linkedin="https://www.linkedin.com/in/rajneelchougule"
    />
    <Member
      name="Shravani Shinde"
      role="Secretary"
      imgSrc={shravani}
      linkedin="https://www.linkedin.com/in/shravani-shinde-/
"
    />
  </ul>

  <ul className="list-members">
    <Member
      name="Vedant Thakur"
      role="Treasurer"
      imgSrc={vedant}
      linkedin="https://www.linkedin.com/in/vedantthakurrr/"
    />
    <Member
      name="Mihir Panpatil"
      role="Incubation Lead"
      imgSrc={mihir}
      linkedin="https://www.linkedin.com/in/mihirpanpatil/"
    />
    <Member
      name="Yash Varma"
      role="Technical Lead"
      imgSrc={yash_v}
      linkedin="https://linkedin.com/in/yashhvarma"
    />
    <Member
      name="Adarsh Korade"
      role="Outreach Lead"
      imgSrc={adarsh}
      linkedin="http://linkedin.com/in/adarshkorade"
    />
  </ul>
  <ul className="list-members">
    <Member
      name="Adithya Venkat"
      role="Design Lead"
     imgSrc={adithya}
     linkedin="https://www.linkedin.com/in/adithya-venkat/"
    />
    <Member
      name="Rithvik Shetty"
      role="Social Media Lead"
      imgSrc={rithvik}
      linkedin="https://www.linkedin.com/in/rithvikshetty/"
    />
    <Member
      name="OM Revankar"
      role="Technical Co-ord"
      imgSrc={om}
      linkedin="https://www.linkedin.com/in/om-revankar-1a824b29b/"
    />
    <Member
      name="Varun Ubale"
      role="Technical Co-ord"
      imgSrc={varun}
      linkedin="https://www.linkedin.com/in/varun-ubale"
    />
  </ul>
  <ul className="list-members">
  <Member
      name="Nadaa Ahamed"
      role="Incubation Co-ord"
      imgSrc={nadaa}
      linkedin="http://linkedin.com/in/nadaa-ahamed-7456b32b3"
    />
    <Member
      name="Praveen Shukla"
      role="Incubation Co-ord"
      imgSrc={praveen}
      linkedin="https://www.linkedin.com/in/praveen-shukla-0585812b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    />
    <Member
      name="Muthushri Pillai"
      role="Outreach Co-ord"
      imgSrc={muthushri}
      linkedin="https://www.linkedin.com/in/muthushri-pillai-680a262b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    />
    <Member
      name="Tanishq Thorat"
      role="Outreach Co-ord"
      imgSrc={tanishq}
      linkedin="https://www.linkedin.com/in/tanishq-thorat-9a7955238"
    />
  </ul>
  <ul className="list-members">
  <Member
      name="Priya Darshini"
      role="Marketing Co-ord"
      imgSrc={priya}
      linkedin="https://www.linkedin.com/in/priya-darshini-k-a935b32b7"
    />
    <Member
      name="Ojas Neve"
      role="Marketing Co-ord"
      imgSrc={ojas}
      linkedin="https://www.linkedin.com/in/ojasneve"
    />
    <Member
      name="Sudeepto Ghosh"
      role="Marketing Co-ord"
      imgSrc={sudeepto}
      linkedin="https://www.linkedin.com/in/sudeeptoghosh10"
    />
    <Member
      name="Sara Bhalerao"
      role="Content Co-ord"
      imgSrc={sara}
      linkedin="https://www.linkedin.com/in/sara-bhalerao-a9b23b27b"
    />
  </ul>
  <ul className="list-members">
  <Member
      name="Arya Mishra"
      role="Content Co-ord"
      imgSrc={arya_m}
      linkedin="https://www.linkedin.com/in/arya-mishra-5596b332"
    />
    <Member
      name="Siddesh Venkat"
      role="Design Co-ord"
      imgSrc={siddesh}
      linkedin="https://www.linkedin.com/in/siddhesh-venkat-75675a2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    />
    <Member
      name="Sharli Chauhan"
      role="Design Co-ord"
      imgSrc={sharli}
      linkedin="https://www.linkedin.com/in/sharli-chauhan-5245232b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

    />
    <Member
      name="Tiesha Tripathi"
      role="Design Co-ord"
      imgSrc={tiesha}
      linkedin="https://www.linkedin.com/in/tiesha-tripathi-358210273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    />
  </ul>
  <ul className="list-members">
  <Member
      name="Siddhi Mahale"
      role="Social Media Co-ord"
      imgSrc={siddhi}
      linkedin="https://www.linkedin.com/in/siddhi-mahale-678471301/"
    />
    <Member
      name="Shrusti Wani"
      role="Social Media Co-ord"
      imgSrc={shrusti}
      linkedin="linkedin.com/in/shrusti-wani-2337b52b3"
    />
  </ul>

  </section>
);

export default Team;


/*ERROR in ./src/Pages/Team/team.js 43:0-20
Module not found: Error: Empty dependency (no request)

webpack compiled with 1 error and 3 warnings
One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.
 */