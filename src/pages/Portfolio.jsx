// import servicesImg5 from '../assets/miami1.jpg';
import React from 'react';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import slide6 from '../assets/slide6.jpg';
import slide7 from '../assets/slide7.jpg';
import slide8 from '../assets/slide8.jpg';
import slide9 from '../assets/slide9.jpg';
import slide10 from '../assets/slide10.jpg';
import slide11 from '../assets/slide11.jpg';
import running from '../assets/running.mp4';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";


import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules';

export default function Portfolio() {


  return (
    <div>
      <div className="relative">

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide> <img src={slide7} alt="slide_image" /></SwiperSlide>
          <SwiperSlide> <img src={slide5} alt="slide_image" /></SwiperSlide>
          <SwiperSlide> <img src={slide6} alt="slide_image" /></SwiperSlide>
          <SwiperSlide> <img src={slide4} alt="slide_image" /></SwiperSlide>
          <SwiperSlide> <img src={slide8} alt="slide_image" /></SwiperSlide>
          <SwiperSlide> <img src={slide9} alt="slide_image" /></SwiperSlide>
          <SwiperSlide> <img src={slide10} alt="slide_image" /></SwiperSlide>
          <SwiperSlide> <img src={slide11} alt="slide_image" /></SwiperSlide>
          <SwiperSlide> <img src={slide1} alt="slide_image" /></SwiperSlide>
          <SwiperSlide> <img src={slide2} alt="slide_image" /></SwiperSlide>
          <SwiperSlide> <img src={slide3} alt="slide_image" /></SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <FontAwesomeIcon color="gray" size='xs' icon={faCircleArrowLeft} />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FontAwesomeIcon color="gray" size='xs' icon={faCircleArrowRight} />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

    </div>
  )

}