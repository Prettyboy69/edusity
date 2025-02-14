import React from 'react'
import './Contact.css'
import msg_icon from  '../../assets/msg-icon.png'
import mail_icon from  '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    
         <div className='contact'>
        <div className="contact-col">
            <h3>send us a message <img src={msg_icon} alt="" /></h3>
            <p className="">
                feel free to reach out through contact from or find our contact
                information below. your feedback, question , and suggestion
                are  important to us as we strive to provide exceptional service 
                to our university community.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />johnsonabiolamoses@gmail.com</li>
                <li> <img src={phone_icon} alt="" /> 07042164803</li>
                <li> <img src={location_icon} alt="" />77 massachusett Ave cambridge <br/> MA 02139, united states</li>
            </ul>
        </div>

        <div className="contact-col ">
          <form  onSubmit={onSubmit}>
            <label>you name</label>
            <input type="text" name='name' placeholder='ENTER YOUR NAME' required />
            <label> phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your number' required />
            <label>Write your Message Here</label>
            <textarea name="message"  rows="6" placeholder='enter you message' required> </textarea>
            <button type='submit' className='btn dark-btn'> submit now <img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}.</span>
        </div>
        

    </div>
  )
}

export default Contact