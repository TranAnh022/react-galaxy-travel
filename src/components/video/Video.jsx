import React from 'react'
import { Link } from 'react-router-dom'
import '../video/Video.css'
import spaceVideo from '../../assets/space.mp4'
const Video = () => {
  return (
    <div className='video__container'>
          <video autoPlay loop muted id='video'>
              <source src={spaceVideo} type='video/mp4'/>
          </video>
        <div className="video__content">
              <h1>Galaxy Travel</h1>
              <p>World's first civilian space travel</p>
         
            <div className='video__button'>
              <Link to='/traning' className='btn'>Traing</Link>
              <Link to='/contact' className='btn btn-light'>Launch</Link>
            </div>
        </div>
    </div>
  )
}

export default Video