import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slide3 from "../../Pics/sliderimage.jpg";
import GuarCrop from "../../Pics/GuarCrop.jpeg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import GuarBeans from "../../Pics/GuarBeansEdit.jpg";
import GuarProcesss from "../../Pics/GuarProcesss.jpeg";
import GuarGum from "../../Pics/GuarGum.png";
import GuarSplit2 from "../../Pics/GuarSplit2.png";
import GuarMeal from "../../Pics/GuarMeal.jpg";
import '../../App.css'

const fadeImages = [
  {
  url: GuarProcesss,
  Caption:"Guar Porcess"
  },
  {
  url: GuarCrop,
  Caption:"GUAR CROP"
  },
  {
    url: GuarGum,
    Caption:"GUARGum"
    },{
    url: GuarSplit2,
    Caption:"Guar Gum"
    }
    ,{
    url: GuarMeal,
    Caption:"Guar Meal"
    }
];

function SlideshowNew() {
  return (
    <>
    <div className="slide-container">
      <Fade >
        {fadeImages.map((fadeImage, index) => (
        <div className='FadeContainer '>
          <div className="each-fade" key={index} style={{backgroundImage:`url(${fadeImage.url})`}}>
          </div>
          </div>)
        )};

      </Fade>
    </div>
    </>
  )
}
export default SlideshowNew;