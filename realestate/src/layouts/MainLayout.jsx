import React from 'react'
import Header from '../components/partials/Header';
import Hero from '../components/Hero';
import HeroCard from '../components/partials/HeroCard';
import FeaturedListingSlider from '../components/partials/FeaturedListingSlider';
import TestimonialSlider from '../components/partials/TestimonialSlider';
import Footer from '../components/partials/Footer';

const MainLayout = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <HeroCard/>
        <FeaturedListingSlider/>
        <TestimonialSlider/>
        <Footer/>
    </div>
  )
}

export default MainLayout
