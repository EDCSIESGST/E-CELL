import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"
import Logo from "./../Assets/Images/Logo.png"

const Navbar = () => {
    return (
        <>
        <div id ="Navs" >
            
            <nav className="navbar navbar-expand-lg navbar-light" >
                <div className="container py-2">
                    <Link className="navbar-brand" to="/"><img src = {Logo}></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* means */}
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav_ul align-items-center">
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li> */}
                             <li className="nav-item">
                                <Link className="nav-link" to="./">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="./Startups">Incubation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Eventsbrief"> Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Reports">Reports</Link>
                            </li>
                          
                          
                            <div className="mx-3">
                                <button type="button" className="btn1 mx-2" id='Communitybutton'>  <Link className="nav-link" to="/Community">Community</Link></button>
                               
                            </div>
                          
                        </ul>
                    </div>
                    {/* end */}
                </div>
            </nav>

            </div>
        </>
    )
}

export default Navbar