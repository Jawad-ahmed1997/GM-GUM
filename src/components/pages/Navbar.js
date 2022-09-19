import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Logo from "../../Pics/logo.png"
import { Link } from 'react-router-dom'
import '../../App.css'

function Navbar() {
  return (
    <div className=' row d-flex justify-content-center align-item-center flex-column h-100 w-100'>
      <div className='d-flex justify-content-center align-item-center  w-100'>
        <h1>GM GUM Industries</h1>
      </div>
      <div className='w-100 flex-row d-flex justify-content-center align-item-center flex-row h-100 w-100'>
        <div className=' d-flex justify-content-center align-item-center  w-25 bg-primary'>
          <img className='NavImgLogo' src={Logo} />
        </div>
        <div className='d-flex justify-content-around align-item-center w-75 bg-dark '>

          <Link className='navlink' to="/">Home</Link>

          <Link className='navlink' to="./About">About</Link>

          <Link className='navlink' to="./Products">Products</Link>

          <Link className='navlink' to="./contact">Contact</Link>

        </div>
      </div>


    </div>
  )
}

export default Navbar
