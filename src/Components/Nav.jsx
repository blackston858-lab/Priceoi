import React from 'react'
import Slider from "react-slick";

const Nav = () => {

     
  return (
    <div>
        <div className='flex justify-center gap-16 mt-5 slider-container '>
              
            <div>
                <img className='w-10' src="https://static.priceoye.pk/images/home/mobiles.webp" alt=""/>
                <p className='text-[12px]'>Mobile</p>
            </div>

            <div>
                <img className='w-10' src="https://static.priceoye.pk/images/home/wireless-earbuds.webp" alt=""/>
                <p className='text-[12px]' >Earbuds</p>
            </div>

             <div>
                <img className='w-10' src="https://static.priceoye.pk/images/home/smart-watches.webp" alt=""/>
                <p className='text-[12px]'  >Smart Watches</p>
            </div>

             <div>
                <img className='w-10' src="https://static.priceoye.pk/images/home/trimmers-shaver.webp" alt=""/>
                <p className='text-[12px]'  >Trimmers shaver</p>
            </div>

             <div>
                <img className='w-10' src="https://static.priceoye.pk/images/home/power-banks.webp" alt=""/>
                <p className='text-[12px]'  >Power Banks</p>
            </div>


             <div>
                <img className='w-10' src="https://static.priceoye.pk/images/home/mobile-chargers.webp" alt=""/>
                <p className='text-[12px]'  >Mobile Charger</p>
            </div>

             <div>
                <img className='w-10' src="https://static.priceoye.pk/images/home/bluetooth-speakers.webp" alt=""/>
                <p className='text-[12px]'  >Bluetooth  Speaker</p>
            </div>

             <div>
                <img className='w-10 ' src="https://static.priceoye.pk/images/home/tablets.webp" alt=""/>
                <p className='text-[12px]'  >Tablets</p>
            </div>


           




            
        </div>
    </div>
  )
}

export default Nav