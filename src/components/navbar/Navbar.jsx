import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
      <div className='header'>
        <Link to='/'><h1>GLX TRVL</h1></Link> 
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li>
                   <Link to='/'>Home</Link>
               </li>
               <li>
                   <Link to='/pricing'>Pricing</Link>
               </li>
               <li>
                   <Link to='/training'>Training</Link>
               </li>
               <li>
                   <Link to='/contact'>Contact</Link>
               </li>
           </ul>
           <div className='nav-toggle' onClick={handleClick}>
            {click ? (<FaTimes/>) : (<FaBars/>)}
               
           </div>
    </div>
  )
}

export default Navbar