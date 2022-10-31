import React from 'react'
import Logo from "../../Pics/logo3.png"
import Slider from './Slider'
import Pic1 from "../../Pics/SeedSliderPic.jpg"
import slide3 from "../../Pics/sliderimage.jpg"
import GuarGum from "../../Pics/GuarGum.png"
import GuarSplit from "../../Pics/GuarSplit2.png"
import GuarMeal from "../../Pics/GuarMeal.jpg"



const ProductCards = [
  
  ,
  {
  url: GuarSplit,
  Caption: "Guar SPLIT"
  },{
  url: GuarGum,
  Caption: "GUAR GUM"
  },
  {
  url: GuarMeal,
  Caption: "GUAR MEAL"
  },
];


function Products() {
  return (
   <div className='ProductCardMain '>
    <div >
      <h1 className='PrductHead'>Our Porducts</h1>
    </div>
    <div className='CardDiv '>
  {ProductCards.map((cardimg ,ind) =>(
  <div>
    <div className='ProductCard' >
      <h2>{cardimg.Caption}</h2>
      <img className='ProCardImg' src={cardimg.url}/>
      <button className='productBtn mb-2 btn btn-danger '>
      </button>
    </div>
  </div>
  ))}
   </div>
   </div>
  )
}

export default Products;