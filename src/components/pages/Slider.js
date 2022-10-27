import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide3 from "../../Pics/sliderimage.jpg"

import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import GuarBeans from "../../Pics/GuarBeansEdit.jpg"
import GuarProcesss from "../../Pics/GuarProcesss.jpeg"
import '../../App.css'

const fadeImages = [
  {
  url: GuarProcesss,
  Caption:"Guar Porcess"
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