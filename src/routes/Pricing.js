import React from 'react'
import Footer from '../components/footer/Footer'
import HeroImage from '../components/heroImage/HeroImage'
import Navbar from '../components/navbar/Navbar'
import Price from '../components/price/Pricing'

const Pricing = () => {
  return (
      <div>
          <Navbar />
          <HeroImage heading="PRICING." text="Choose your trip"/>
          <Price />
          <Footer />
    </div>
  )
}

export default Pricing