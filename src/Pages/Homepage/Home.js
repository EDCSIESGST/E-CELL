import React from 'react'
import "./homepage.css"
import Newsletter from './Newsletter'
import Stats from './Stats'
import About from './About'
import Events from './Events'
import Socials from './Socials.'

function Home () {
  return (
    <div>
      
        <section id = "Video" className="container">
          <div className="video-container">
            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/U2SVCCENLjE?si=czJAHtoY6dgIi6Yk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </section>

        <About/>
        <Stats/>
        <Events/>
        <Socials/>
        <Newsletter/>    

    </div>
  )
}

export default Home
