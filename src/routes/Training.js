import React from 'react'
import Footer from '../components/footer/Footer'
import HeroImage from '../components/heroImage/HeroImage'
import Navbar from '../components/navbar/Navbar'
import Train from '../components/training/Training'

const Training = () => {
  return (
      <div>
          <Navbar />
          <HeroImage heading="TRANING." text="Pre-Flight & In-Flight." />
          <Train />
          <Footer />
    </div>
  )
}

export default Training