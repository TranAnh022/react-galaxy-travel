import React from 'react'
import './Training.css'

import { Link } from 'react-router-dom'

import Pod from '../../assets/pod.jpg'
import Moon from '../../assets/moon.jpg'
const Training = () => {
  return (
    <div className='training'>
          <div className="left">
              <h1>Training</h1>
              <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
          </div>
          <div className='right'>
              <div className="img__container">
                  <div className="img__stack top">
                      <img src={Moon} alt="" className='img'/>
                  </div>
                  <div className="img__stack bottom">
                      <img src={Pod} alt="" className='img'/>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Training