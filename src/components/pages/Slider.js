import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Pic1 from "../../Pics/SeedSliderPic.jpg"
import slide3 from "../../Pics/sliderimage.jpg"

import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import GuarBeans from "../../Pics/GuarBeans.jpg"
import '../../App.css'

const fadeImages = [
  {
  url: Pic1,
  },
  {
  url: slide3,
  },
  {
  url: slide3,
  },
  {
  url: GuarBeans,
  },
];

function SlideshowNew() {
  return (
    <div className="slide-container">
      <Fade >
        {fadeImages.map((fadeImage, index) => (
        <div className='FadeContainer '>
          <div className="each-fade" key={index} style={{backgroundImage:`url(${fadeImage.url})`}}>
          </div>
          </div>
        ))}

      </Fade>
    </div>
  )
}
export default SlideshowNew;