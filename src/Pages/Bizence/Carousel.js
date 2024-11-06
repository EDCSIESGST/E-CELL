import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import image1 from "../../Assets/Events/Bizenceimg/IMG_9998.jpg"

// import image2 from "../../Assets/Events/Bizenceimg/IMG_9720.jpg"

// import image3 from "../../Assets/Events/Bizenceimg/IMG_9924.jpg"

// import image4 from "../../Assets/Events/Bizenceimg/IMG_9989.jpg"


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import './carousel.css';


// import required modules
import { EffectCoverflow, Pagination ,Autoplay} from 'swiper/modules';

export default function App() {
  return (
    <>
    <h1 style={{ textAlign: 'center', overflow:"hidden" }}>A Peek at Past</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
    
        slidesPerView={'3'}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth:100,
          modifier: 1,
          slideShadows: true,
          
        }}
        
        modules={[EffectCoverflow, Pagination ,Autoplay]}
        autoplay={{ delay: 700 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src= {image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
       
     
      
        
        
      </Swiper>
    </>
  );
}
