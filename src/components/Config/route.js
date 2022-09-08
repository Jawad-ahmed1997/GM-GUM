import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Home,About,Contact,Products} from "./index"


function AppRoute() {
    return (
        <div>
            <Router>
                <Link to="/">Home</Link>
                <Link to="./About">About</Link>
                <Link to="./Products">Products</Link>
                <Link to="./contact">Contact</Link>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/Products" element={<Products/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRoute;
