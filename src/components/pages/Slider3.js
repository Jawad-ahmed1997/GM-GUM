import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Pic1 from "../../Pics/SeedSliderPic.jpg"
import slide3 from "../../Pics/sliderimage.jpg"
import GuarCrop from "../../Pics/GuarCrop.jpg"
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
  url: GuarCrop,
  },
  {
  url: GuarBeans,
  },
];

function SlideshowNew() {
  return (
    <div className="slide-container h-100 w-100 bg-dark">
      <Fade className='h-100 w-100 bg-dark'>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade h-100 w-10 bg-dark" key={index} style={{ backgroundImage: `url(${fadeImage.url})` }}>
            <h1>Slider</h1>
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default SlideshowNew;