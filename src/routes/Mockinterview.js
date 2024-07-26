import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Work from '../components/Work'
import HeroImg2 from '../components/HeroImg2'
import "./mockInterview.css"

const Mockinterview = () => {
  return (
    <div>
       <Navbar />
       <HeroImg2 />
        <div className='mockInterview-container'>
          <div class="col card-mackInterview">
            <div class="img-placeholder">
              <img src="https://images.unsplash.com/photo-1530797195762-6e542a0f1843?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc5MTY2MjE&ixlib=rb-1.2.1&q=80"/>
            </div>
            <div>
              <h3>Wafaa</h3>
              <p><i class="fa-solid fa-user"></i> Front End Web Developer</p>
              <p><i class="fa-solid fa-paper-plane"></i> <a href="https://topmate.io/raghav_dalmia?utm_source=linkedin&utm_medium=product&utm_campaign=ss">Meet at Topmate</a></p>
              <p><i class="fa-solid fa-location-dot"></i> Auckland, New Zealand</p>
            </div>
          </div>
        </div>
       <Footer />
    </div>
    
  )
}

export default Mockinterview