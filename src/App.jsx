// import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programms from './Component/Programms/Programms'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonial from './Component/Testimonial/Testimonial'
import Contact from './Component/Contact/Contact'
import Footer from './Component/footer/Footer'
import VideoPlayer from './Component/VideoPlayer/VideoPlayer'
import { useState } from 'react'

const App = () => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title  subTitle='Our PROGRAM' title='What We Offer'/>
        <Programms/>
        <About setPlayState={setPlayState}/>
        <Title  subTitle='Gallery' title='campus photos'/>
        <Campus/>
        <Title  subTitle='TESTIMONIAL' title='What student Says'/>
        <Testimonial/>

        <Title  subTitle='Contact Us' title='Get in TOUCH'/>
        <Contact/>
        <Footer/>
      </div>

      <VideoPlayer playState={playState}  setPlayState={setPlayState}/>



    </div>
  )
}

export default App