import React,{useState} from 'react'
import './ContactForm.css'
import white_arrow from '../../assets/chevron-right.svg'
import bgimage from '../../assets/game-bg.png'


const ContactForm = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "444f58b7-879a-4f17-9165-28b15c28a6f4");

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
    <div className='contactForm' style = {{backgroundImage: `url(${bgimage})`}}>
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
