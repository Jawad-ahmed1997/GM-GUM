import React from 'react'
import About from './About'
import BottomBar from './BottomBar'
import Navbar from "./Navbar"
import Slider from './Slider'


function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Slider></Slider>
    <About></About>
    <BottomBar></BottomBar>
    </>
  )
}

export default Home