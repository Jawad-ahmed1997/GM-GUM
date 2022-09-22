import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Logo from "../../Pics/logo.png"


import { Link } from 'react-router-dom'
import '../../App.css'
import MainDisplay from "../../Pics/GuarGumHeader.jpg"

function Navbar() {
  return (
    <div className='d-flex justify-content-center align-item-center flex-column h-100 w-100'>
       <div style={{ backgroundImage: `url(${MainDisplay})` }} className='Display d-flex justify-content-center align-item-center  w-100'>
      <h1 className='TopDivHeading'>GM GUM Industries</h1>
    </div>
      <div className='MainNavBar d-flex justify-content-center align-item-center '>
        <div className=' d-flex justify-content-center align-item-center LogoDiv'>
          <img className='NavImgLogo' src={Logo} />
        </div>
        <div className='NavbarLinks d-flex justify-content-around flex-wrap align-items-center '>

          <Link className='navlink' to="/">Home</Link>

          <Link className='navlink' to="./About">About</Link>

          <Link className='navlink' to="./Products">Products</Link>

          <Link className='navlink' to="./contact">Contact</Link>
        </div>
        <div className='d-flex emptydiv'>

        </div>
      </div>

    </div>
  )
}

export default Navbar
