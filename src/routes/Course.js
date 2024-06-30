import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from "../components/Work"

const Course = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Upskilling Courses" text="Expertly structured courses for focused and 
      outcome-oriented learning" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Course