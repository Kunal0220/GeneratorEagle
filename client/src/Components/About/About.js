import React from 'react'
import './About.css'
function About() {
  return (
    <div className='AboutBody'>
      <br /><br />
    <h2 className='AboutUsTag'>About Us</h2>

      <div className="aboutMainContainer">

        <img src={require('../imgs/about.png')} className='aboutImg' alt="" />

      <p className='WRW'> <span> Who are we ? </span><br />
      We are a group of people who want to make apps <br />
      so that people don't get stuck in mere work that <br />
      actually is of great importance!
      </p>
      
      <p className="WRWH"> <span> Why are we here ?</span><br />
      We are here to deliver a product which will not only <br />
      save your time but will also give you the best experience <br />
      while creating a ReadMe . <br /> 
      PS: We have used the same app (GeneratorEagle) for this project's Readme 🤐.
      </p>

      <p className="WRWG"><span>Where are we Going?</span> <br />
      We are Going to take this project to a next level by <br />
      integrating GitHub directly into it so that if you learn <br />
      any new skill or earn any achievement then it automatically <br />
      gets integrated to your ReadMe. 
      <br /><br />
      </p>

      </div>
      <br /><br />
      <br /><br />
      <br />
    </div>
  )
}

export default About