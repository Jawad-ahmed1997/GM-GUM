import React from 'react'
import Pic1 from "../../Pics/SeedSliderPic.jpg"
import slide3 from "../../Pics/sliderimage.jpg"
import { Fade } from "react-slideshow-image";
import '../../App.css'

import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
Pic1,slide3,Pic1,slide3,Pic1,slide3,Pic1,slide3,Pic1,slide3,  
];
  
  function Slider() {
    return (
      <div className="slide-container">
        <Fade className="fade">
          <div className="each-fade">
            <img className='sliderimgs' src={fadeImages[0]} />
            <span>Pics</span>
          </div>
          <div className="each-fade">
            <img className='sliderimgs' src={fadeImages[1]} />
            <span>Pics</span>
          </div>
          <div className="each-fade">
            <img className='sliderimgs' src={fadeImages[2]} />
            <span>Pics</span>
          </div>
        </Fade>
      </div>
    );
  }

export default Slider;