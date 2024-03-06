import React, { useEffect } from 'react';
import { Routes } from 'react-router-dom';
import Startups from './Pages/Startups/Startups';
import Reports from './Pages/Reports/Reports';
import Community from './Pages/Community/Community';
import Team from './Pages/Team/team';
import Bizence from './Pages/Bizence/Bizence';
import Eventsbrief from './Pages/Eventsbrief/Eventsbrief';
import Home from './Pages/Homepage/Home';
<li className="nav-item">
<Link className="nav-link" to="#banner">Home</Link>
</li>
import Footer from './Components/Footer';
import { Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import './App.css'
function App() {
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration in milliseconds
      once: false, // Animation only happens once
      easing: 'ease-out', // Easing function for animation
    });
  }, []); // Run once when component mounts

  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Startups" element={<Startups />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/EventsBrief" element={<Eventsbrief />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Bizence" element={<Bizence />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

