import React from 'react'
import About from './About'
import Contact from './contact'
import Navbar from "./Navbar"
import Slider from './Slider'


function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Slider></Slider>
    <Contact></Contact>
    <About></About>
    </>
  )
}

export default Home