import React from 'react'
import '../footer/Footer.css'
import {FaSearchLocation} from 'react-icons/fa'

const Footer = () => {
  return (
      <div className='footer'>
          <div className="footer__container">
              <div className="left">
                  <div className="location">
                    <FaSearchLocation/>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Footer