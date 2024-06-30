import "./HeroImgStyles.css"
import React from 'react'
import img1 from "../assets/myimg.jpeg"
import { Link } from "react-router-dom"
import InfoWithTypingIndicator from "./InfoWithTypingAnimation"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={img1} alt="img1" />
        </div>
        <div className="content">
            <InfoWithTypingIndicator />
            {/* <h1>Java Mentor</h1> */}
            <div>
              <Link to="/course" className="btn">Courses</Link>
              <Link to="/contact" className="btn-light">Contact</Link>
            </div> 
        </div>
    </div>
  )
}

export default HeroImg