import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from  '../../assets/next-icon.png'
import back_icon from  '../../assets/back-icon.png'
import user_1 from  '../../assets/user-1.png';
import user_2 from  '../../assets/user-2.png';
import user_3 from  '../../assets/user-3.png'
import user_4 from  '../../assets/user-4.png'



const Testimonial = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward =()=>{
        if(tx > -50){
            tx -= 25;
        }
      slider.current.style.transform = `translateX(${tx}%)`
    // slider.current?.style.transform = `translateX(${tx}%)`;

        

    }
    const slideBack =()=>{
        if(tx < 0){
            tx += 25;
        }
      slider.current.style.transform = `translateX(${tx}%)`
        
        
    }
  return (
    <div className='testimonials'>
        
        <img src={next_icon} alt="" onClick={slideForward}  className='next-btn' />
        <img src={back_icon} alt="" onClick={slideBack} className='back-btn' />
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                          <img src={user_1} alt="" />
                          <div className="">
                            <h3>JOHNSON ABIOLA</h3>
                            <span>EDUSITY, USA</span>
                            </div>  
                        </div>
                        <p>
                            choosing to pursue my degree at Edusity was
                            was one of  the best decision  I ve ever made.
                            the supportive community, state-of-the-art facilities and
                            the commitment to academic excellence have truly exceeded my 
                            expectation.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                          <img src={user_2} alt="" />
                          <div className="">
                            <h3>JOHNSON ABIOLA</h3>
                            <span>EDUSITY, USA</span>
                            </div>  
                        </div>
                        <p>
                            choosing to pursue my degree at Edusity was
                            was one of  the best decision  I ve ever made.
                            the supportive community, state-of-the-art facilities and
                            the commitment to academic excellence have truly exceeded my 
                            expectation.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                          <img src={user_4} alt="" />
                          <div className="">
                            <h3>JOHNSON ABIOLA</h3>
                            <span>EDUSITY, USA</span>
                            </div>  
                        </div>
                        <p>
                            choosing to pursue my degree at Edusity was
                            was one of  the best decision  I ve ever made.
                            the supportive community, state-of-the-art facilities and
                            the commitment to academic excellence have truly exceeded my 
                            expectation.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                          <img src={user_3} alt="" />
                          <div className="">
                            <h3>JOHNSON ABIOLA</h3>
                            <span>EDUSITY, USA</span>
                            </div>  
                        </div>
                        <p>
                            choosing to pursue my degree at Edusity was
                            was one of  the best decision  I ve ever made.
                            the supportive community, state-of-the-art facilities and
                            the commitment to academic excellence have truly exceeded my 
                            expectation.
                        </p>
                    </div>
                </li> 
            </ul>
        </div>
    </div>
  )
}

export default Testimonial