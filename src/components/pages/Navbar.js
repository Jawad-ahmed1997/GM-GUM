import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Logo from "../../Pics/logo.png"

function Navbar() {
  return (
    <div className=' row d-flex justify-content-center align-item-center bg-light flex-column h-100 w-100'>
      <div className='d-flex justify-content-center align-item-center bg-success w-100'>
        <img src={Logo}/>
      </div>
      <div className='row'>
      <div className='w-25 bg-light'>
        <h1>GM GUM Industries</h1>
      </div>
      <div className='w-75 bg-primary'>
          
      </div>
      </div>
        
        
    </div>
  )
}

export default Navbar
