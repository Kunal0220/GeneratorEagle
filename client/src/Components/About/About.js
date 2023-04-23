import React from 'react'
import './About.css'
function About() {
  return (
    <div className='AboutBody'>
      <br /><br />
    <h2 className='AboutUsTag'>About Us</h2>

      <div className="aboutMainContainer">

        <img src={require('../imgs/about.png')} className='aboutImg' alt="" />

      </div>
      <br /><br />
      <br /><br />
      <br />
    </div>
  )
}

export default About