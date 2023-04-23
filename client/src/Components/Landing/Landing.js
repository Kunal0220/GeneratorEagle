import React from 'react'
import './Landing.css'
function Landing() {
  return (
    <div className='wave'>
    <img className='bannerImg' data-aos="slide-right" src={require('../imgs/landing.png')} alt="" />
        
        <div className="wave2">

         <h1 className="LandingBannerText " >Generator Eagle Presents</h1>

         <h4 className='LandingPageSecondText'> An Awesome Place to solve all your ReadMe problems</h4>
        </div>



    </div>
  )
}

export default Landing