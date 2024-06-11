import React,{useState} from 'react'
import './ContactForm.css'
import white_arrow from '../../../../assets/chevron-right.svg'

const ContactForm = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "919398d5-321f-42fd-8faa-c6c8a33ff16f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      // console.log("Success", res);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contactForm'>
      <div className='form-bg'>

        <h1>Say Hello!</h1>

        <form onSubmit={onSubmit}>
              <label>Your Name</label>
              <input type='text' name='name' placeholder='Enter your name' required/>
              <label>Phone Number</label>
              <input type='tel' name='phone' placeholder='Enter your phone number' required/>
              <label>Write your message here</label>
              <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
              <button type='submit' className='btn dark-btn'> Send <img src={white_arrow} alt=''/> </button>
        </form>

      </div>

    </div>
  )
}

export default ContactForm
