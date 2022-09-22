import React from 'react';
import slide1 from "../../Pics/SeedSliderPic.jpg"
import { Slide } from 'react-slideshow-image';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import '../../App.css'
function Slider() {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
  return (
   
    
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[0]})` }}>
            <span>Slide 1</span>
        </div>
    </div>
    
  
  )
}

export default Slider