import { Link } from "react-router-dom"
import "./PricingCardStyles.css"

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
       <div className="card-container">
          <div className="card">
            <h3>- DSA JAVA -</h3>
            <span className="bar"></span>
            <p className="btc">₹11,999/-</p>
            <p>- 350+ problems & 6 live projects -</p>
            <p>- 3-4 months duration -</p>
            <p>- Cancel anytime in first 14 days, full refundable. -</p>
            <p>- Covers Foundation, Basic and Advanced modules -</p>
            <p>- Personal mentoring, progress tracking & Feedback -</p>
            <p>- Curriculum designed for beginners. No Coding experience required -</p>
            <p>- Doubt support -</p>
            <p>- Certificate of Excellence/Completion -</p>
            <Link to="/contact" className="btn">
                PURCHASE NOW
            </Link>
          </div>

          <div className="card">
            <h3>- MERN STACK -</h3>
            <span className="bar"></span>
            <p className="btc">₹16,999/-</p>
            <p>- 10 live projects & React (MERN) -</p>
            <p>- 3-4 months duration -</p>
            <p>- Cancel anytime in first 14 days, full refundable. -</p>
            <p>- Covers Foundation, Basic and Advanced modules -</p>
            <p>- Personal mentoring, progress tracking & Feedback -</p>
            <p>- Curriculum designed for beginners. No Coding experience required -</p>
            <p>- Doubt support -</p>
            <p>- Certificate of Excellence/Completion -</p>
            <Link to="/contact" className="btn">
                PURCHASE NOW
            </Link>
          </div>

          <div className="card">
            <h3>- DSA PYTHON -</h3>
            <span className="bar"></span>
            <p className="btc">₹11,999/-</p>
            <p>- 350+ problems & 6 live projects -</p>
            <p>- 3-4 months duration -</p>
            <p>- Cancel anytime in first 14 days, full refundable. -</p>
            <p>- Covers Foundation, Basic and Advanced modules -</p>
            <p>- Personal mentoring, progress tracking & Feedback -</p>
            <p>- Curriculum designed for beginners. No Coding experience required -</p>
            <p>- Doubt support -</p>
            <p>- Certificate of Excellence/Completion -</p>
            <Link to="/contact" className="btn">
                PURCHASE NOW
            </Link>
          </div>
       </div>
    </div>
  )
}

export default PricingCard