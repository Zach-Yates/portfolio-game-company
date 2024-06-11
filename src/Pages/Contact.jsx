import React from 'react'
import './Contact.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ContactForm from '../Components/ContactForm/ContactForm'


const Contact = () => {
  return (
    <div className='contact'>
      <Navbar/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
