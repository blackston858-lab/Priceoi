import React from "react";
import Slider from "react-slick";



function LazyLoad() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <div className="slider-container  mt-3">
      <Slider {...settings}>
         <div>
            <img src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-whn5j.webp" alt=""/>
         </div>
      </Slider>

      
      {/* <div className="flex justify-center   " style={{ backgroundImage: "url('/sale-home-desk.png')" }} >
         
      </div> */}
    </div>
  );
}

export default LazyLoad