import React from 'react'
import Logo from "../../Pics/logo3.png"
import Slider from './Slider'
import Pic1 from "../../Pics/SeedSliderPic.jpg"
import slide3 from "../../Pics/sliderimage.jpg"



const ProductCards = [
  {
  url: Pic1,
  Caption: "GUAR GUM"
  },
  {
  url: slide3,
  Caption: "Guar SPLIT"
  },
  {
  url: slide3,
  Caption: "GUAR MEAL"
  },
];


function Products() {
  return (
   <div className='ProductCardMain'>
  {ProductCards.map((cardimg ,ind) =>(
  <div>
    <div className='ProductCard' style={{backgroundImage:`url(${cardimg.url})`}}>
      <h2>{cardimg.Caption}</h2>
      <button className='productBtn mb-2 btn btn-danger '>Learn More</button>
    </div>
  </div>
  ))}
   </div>
  
  )
}

export default Products