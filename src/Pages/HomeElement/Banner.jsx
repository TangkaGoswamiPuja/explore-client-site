import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./style.css"


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='mt-36 mb-7  lg:mt-10 '>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
          {/* 1st */}
          <SwiperSlide className='rounded-xl'><div  className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/6ZKfbkR/pexels-quang-nguyen-vinh-222549-2131623.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Your Dream Journey Is Start Here</h1>
      <p className="mb-5">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don’t look even slightly.</p>
      <Link to={'/all'}> <button className="btn bg-orange-400 text-white">Discover More</button></Link>
    </div>
  </div>
</div></SwiperSlide>
 
{/* 2nd */}
<SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/54khZzH/pexels-quang-nguyen-vinh-222549-2132180.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Your Dream Journey Is Start Here</h1>
      <p className="mb-5">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don’t look even slightly.</p>
      <Link to={'/all'}> <button className="btn bg-orange-400 text-white">Discover More</button></Link>
    </div>
  </div>
</div></SwiperSlide>


{/* 3rd */}
<SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/h1wty3P/pexels-belle-co-99483-1000445.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Your Dream Journey Is Start Here</h1>
      <p className="mb-5">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don’t look even slightly.</p>
      <Link to={'/all'}> <button className="btn bg-orange-400 text-white">Discover More</button></Link>
    </div>
  </div>
</div></SwiperSlide>


{/* 4th */}
<SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/nkjYfwn/pexels-emre-can-acer-2079249.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Your Dream Journey Is Start Here</h1>
      <p className="mb-5">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don’t look even slightly.</p>
      <Link to={'/all'}> <button className="btn bg-orange-400 text-white">Discover More</button></Link>
    </div>
  </div>
</div></SwiperSlide>


{/* 5th */}
<SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/54khZzH/pexels-quang-nguyen-vinh-222549-2132180.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Your Dream Journey Is Start Here</h1>
      <p className="mb-5">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don’t look even slightly.</p>
      <Link to={'/all'}> <button className="btn bg-orange-400 text-white">Discover More</button></Link>
    </div>
  </div>
</div></SwiperSlide>

{/* 6th */}
<SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/WfW8ZCF/pexels-pixabay-531602.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Your Dream Journey Is Start Here</h1>
      <p className="mb-5">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don’t look even slightly.</p>
     <Link to={'/all'}> <button className="btn bg-orange-400 text-white">Discover More</button></Link>
    </div>
  </div>
</div></SwiperSlide>


<div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </div>
    );
};

export default Banner;