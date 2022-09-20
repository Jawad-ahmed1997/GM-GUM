import React from 'react'
import slide1 from "../../Pics/SeedSliderPic.jpg"
import slide2 from "../../Pics/sliderimage.jpg"
import { Slide } from 'react-slideshow-image';

function Slider() {

  return (
    <Slide>
    <div className="each-slide-effect">
        <div>
            <img src='slide1' />
            <span>Slide 1</span>
        </div>
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${slide2})` }}>
            <span>Slide 2</span>
        </div>
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${slide2})` }}>
            <span>Slide 3</span>
        </div>
    </div>
</Slide>
  )
}

export default Slider