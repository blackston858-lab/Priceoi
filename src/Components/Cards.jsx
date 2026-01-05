import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const Cards = () => {
   
  return (
    <div className="bg-[#ef7219]">
      <div className="flex justify-between p-10  items-center">
        <h1 className="text-white font-medium ">Latest Personal Care</h1>

        <button className="bg-white px-3 py-2 text-black ">View All</button>
      </div>

      <div>
        <div className="slider-container overflow-hidden grid-flow-row grid-rows-2 grid-cols-4 gap-4">
          <Slider className="gap-5"  >
             <div className="slide">
                <div className="grid-cols-4, grid-rows-2, gap-4">

                    <div>
                        <img className="w-[50px] h-[50px]" src="https://images.priceoye.pk/dingling-rf-609-rechargeable-professional-hair-beard-trimmer-pakistan-priceoye-pfhd3-270x270.webp" alt=""/>
                        <p className="bg-[#fbf7eb] flex"><FaStar className="text-yellow-400" />5.0 <span>5 Review</span></p>
                     </div>
 

                </div>
             </div>
             
             
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Cards;

 