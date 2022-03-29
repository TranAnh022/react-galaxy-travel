import React from 'react'
import HeroImage from '../components/heroImage/HeroImage'
import Navbar from '../components/navbar/Navbar'
import ContactForm from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
const Contact = () => {
  return (
      <div>
          <Navbar />
          <HeroImage heading='CONTACT.' text="Contact GALAXY TRAVEL" />
          <ContactForm />
          <Footer />
      </div>
  )
}

export default Contact