import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { carImages } from '../utils/constants'
import ContactUs from '../components/ContactUs'

const ContactUsPage = () => {
  return (
    <div>
        <Header
        backgroundImage={'/assets/images/project-5.png'}
        imageHeight="lg:h-[60vh] h-[40vh]"
      />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default ContactUsPage
