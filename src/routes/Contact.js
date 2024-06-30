import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Still in doubt? We are here to help you out!" text="Let's have a chat" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact