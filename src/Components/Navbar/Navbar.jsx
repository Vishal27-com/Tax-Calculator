import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import {MdMenu} from "react-icons/md"
const Navbar = () => {
  const [show,setShow]=useState(false)
  const toggleHandler=()=>{
   setShow(!show)
  }
  return (
    <>
    <div className='nav-cont'>
      <h3>Tax Calculator</h3>
      <div className='link-box'>
        <Link to='/'>
      <h4>HRA</h4>
        </Link>
        <Link to='/adv-tax'>
      <h4>Advance Tax</h4>  
        </Link>
      </div>
      {/* For small screens */}
      <div className='mob-nav'>
      <MdMenu size={30} onClick={toggleHandler} />
      {
        show && 
        <div className='mob-link'>
          <Link to='/'>
      <h4>HRA</h4>
        </Link>
        <Link to='/adv-tax'>
      <h4>Advance Tax</h4>  
        </Link> 
        </div>
      }
      </div>
    </div>
    
      </>
  )
}

export default Navbar