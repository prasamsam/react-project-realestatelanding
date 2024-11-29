import React from 'react'
import heroImage from '../assets/images/building.jpg';
import HeroSearch from './partials/HeroSearch';

const Hero = () => {
  return (
    <div className="w-full p-2 lg:p-10">
        <div className='inline'>
            <div className='absolute z-10 top-36 left-12 w-[200px] lg:top-64 lg:left-32 lg:w-[800px]'>
                <p className='text-white text-[1.2rem] lg:text-[3.2rem] font-semibold' >Discover Your Perfect Property Today</p>
                <p className='text-white text-[0.7rem] lg:text-[1.2rem] font-medium'>Real estate properties for sale and rent in 12+ countries</p>

            </div>
        </div>
      <img src={heroImage} alt="" className='rounded-[25px] lg:rounded-[75px] h-[600px] lg:h-[85vh] w-full relative object-cover brightness-75'/>
        <HeroSearch/>
    </div>
  )
}

export default Hero
