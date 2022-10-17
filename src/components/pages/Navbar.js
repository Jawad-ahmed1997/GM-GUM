import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Logo from "../../Pics/logo3.png"


import { Link } from 'react-router-dom'
import '../../App.css'
import MainDisplay from "../../Pics/GuarGumHeader3.jpeg"


function Navbar() {
  return (
    <div style={{ backgroundImage: `url(${MainDisplay})` }}
      className='NavMainDiv d-flex justify-content-center align-item-center flex-column'>
      <div className='w-100 h-100 MainNavBar d-flex justify-content-center align-item-center '>
        <div className='Navbarcontant h-25 d-flex justify-content-around flex-wrap align-items-center'>
          <div className='NavbarLinks d-flex justify-content-around flex-wrap align-items-center'>

            <Link className='navlink' to="/">Home</Link>

            <Link className='navlink' to="./About">About</Link>

            <Link className='navlink' to="./Products">Products</Link>

            <Link className='navlink' to="./contact">Contact</Link>
            <Link className='navlink' to="./contact">Certifications</Link>
          </div>
          <div className=' d-flex justify-content-center align-item-center LogoDiv'>
            <img className='NavImgLogo' src={Logo} />
          </div>
        </div>
        <div className='Display h-75 d-flex justify-content-center align-item-center  w-100'>
        <h1 className='TopDivHeading'>GM GUM INDUSTRIES</h1>
      </div>
      </div>

      

    </div>
  )
}

export default Navbar
