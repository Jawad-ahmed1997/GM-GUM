import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Home,About,Contact,Products,Navbar,Slider,Certification}from "./index"



function AppRoute() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Products" element={<Products />} />
                    <Route path="/slider" element={<Slider />} /> 
                    <Route path="/Certification" element={<Certification />} /> 
                </Routes>
            </Router>
        </div>
    )
}

export default AppRoute;
