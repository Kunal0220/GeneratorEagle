import React from 'react'
import './Landing.css'
function Landing() {
  return (
    <div className='wave'>
    <img className='bannerImg' data-aos="slide-right" src={require('../imgs/landing.png')} alt="" />
        

      <div className="landingMainContainer">


        <div className="wave2">

         <h1 className="LandingBannerText " >Generator Eagle Presents</h1>

         <h4 className='LandingPageSecondText'> An Awesome Place to solve all your ReadMe problems</h4>
        </div>

        <div className="container landingMainText mt-4">
          <p>
        Create an impressive and professional GitHub profile with ease using Eagle Generator. Stand out in the competitive world of software development and showcase your skills, projects, and contributions in a visually appealing way. <br /><br />
         Whether you're a seasoned developer or just starting your coding journey, our app makes it easy for you to create a standout GitHub profile that leaves a lasting impression on potential employers, collaborators, and open-source communities. <br /><br />
        Don't let your GitHub profile be an afterthought. Make it a powerful tool to showcase your skills and expertise with Eagle Generator. Create a professional and impressive GitHub profile that sets you apart from the competition. Get started today and take your software development career to new heights!
          </p>

          <button className="btn btn-dark">Generate Now</button>
        </div>

      </div>


    </div>      
  )
}

export default Landing