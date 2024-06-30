import { FaFacebook, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff",marginRight:"2rem" }} />
                    <div>
                        <p>house no. 18-d,sainik enclave</p>
                        <p>New delhi</p>
                    </div>
                </div>    
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color:"#fff",marginRight:"2rem" }} />
                        8860853076</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color:"#fff",marginRight:"2rem" }} />
                        info@gmail.com</h4>
                    </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>This is me prakash kumar.I mentored more than 500+ students in a classroom
                     program.I have expertise in JAVA and 
                    Structure and Algorithm.My aims to share experience with my student
                    and make learning easy and fun.
                </p>
                <div className="social">
                    <FaFacebook size={30} style={{ color:"#fff",marginRight:"1rem" }} />
                    <FaTwitter size={30} style={{ color:"#fff",marginRight:"1rem" }} />
                    <FaLinkedinIn size={30} style={{ color:"#fff",marginRight:"1rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer