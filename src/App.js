import React from 'react'
import { Routes } from 'react-router-dom'
import Startups from './Pages/Startups/Startups'
import Reports from './Pages/Reports/Reports'
import Community from './Pages/Community/Community'
import Team from './Pages/Team/team'
import { HashRouter } from 'react-router-dom'
import Bizence from './Pages/Bizence/Bizence'
import './App.css';

import Eventsbrief from './Pages/Eventsbrief/Eventsbrief'
import Home from "./Pages/Homepage/Home"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route } from 'react-router-dom'

function App () {
  return (
   <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Startups' element={<Startups/>}></Route>
      <Route path='/Community' element={<Community/>}></Route>
      <Route path='/EventsBrief' element={<Eventsbrief/>}></Route>
      <Route path='/Reports' element={<Reports/>}></Route>
      <Route path='/Team' element={<Team/>}></Route>
      <Route path='/Bizence' element={<Bizence/>}></Route>
    </Routes>
  
    <Footer />
    </div>
    )
}

export default App


