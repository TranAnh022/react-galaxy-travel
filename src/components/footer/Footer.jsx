import React from 'react'
import '../footer/Footer.css'
import {FaSearchLocation,FaPhone,FaMailBulk, FaFacebook, FaLinkedin,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
      <div className='footer'>
          <div className="footer__container">
            <div className="left">
                <div className="location">
                    <FaSearchLocation className='social__icon' />
                    <div>
                    <p>65100, Vaasa</p>
                    <h4>Olympiakatu</h4>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone className='social__icon'/>0466879697</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk className='social__icon'/>namanh022@gmail.com</h4>
                </div>
            </div>
          <div className="right">
              <h4>About the company</h4>
                <p>We are the world's first commercial spaceline, and our purpose is to connect people accross the globe to the love,wonder and awe created by space travel</p>
          <div className="social">
            <div className="social__icons">
              <FaFacebook className='social__icon'/>
            </div>
              
            <div className="social__icons">
              <FaInstagram className='social__icon'/>
            </div>
            <div className="social__icons">
              <FaLinkedin className='social__icon'/>
            </div>
            </div>      
          </div>
              
          </div>
      </div>
  )
}

export default Footer