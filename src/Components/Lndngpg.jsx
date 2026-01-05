 import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 
 const Lndngpg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
   return (
     <div className=''>
      <div className="slider-container  overflow-hidden mt-3 ">
       <Slider {...settings} >
         
        <div className='h-[350px]  w-full' >
          <img src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-sshyq.webp" alt=""/>
        </div>
        <div className='h-[350px] w-full' >
          <img src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-6i07y.webp" alt=""/>
        </div>
        <div className='h-[350px] w-full' >
          <img src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-gq7qs.webp" alt=""/>
        </div>
        <div className='h-[350px] w-full' >
          <img src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-thnsh.jpg" alt=""/>
        </div>
        <div className='h-[350px] w-full' >
          <img src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-1o1v2.jpg" alt=""/>
        </div>
        <div className='h-[350px] w-full' ><img src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-jdzq6.webp" alt=""/></div>
        <div className='h-[350px] w-full' ><img src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-i9ua7.jpg" alt=""/></div>
        <div className='h-[350px] w-full' >
          <img src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-ackxj.webp" alt=""/>
        </div>
       </Slider>
       </div>

        



     </div>
   )
 }
 
 export default Lndngpg
 