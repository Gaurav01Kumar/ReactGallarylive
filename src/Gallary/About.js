import React from 'react'

const About = () => {
  return (
    <div>
     <section className="About_section_mainPage">
      <h1>Profile</h1>
      <p>I am , creating Web</p>
      <div className="about_container">
      <div className="content">
       <h2>Details</h2>
       <h4>Name</h4>
       <p>Gaurav Kumar</p>
       <h4>Age</h4> 
       <p>20 years</p>
         <h4>Location <span >Muzaffarpur , Bihar India</span></h4>
      </div>
      <div className="content">
       <h1>About Me</h1>
       <div className="content_about">
       Lorem ipsum dolor sit, amet consectetu
       r adipisicing elit. Praesentium recusandae expl
       icabo ullam consequatur eaque ad accusan
       tium ipsa libero, corrupti ut.
       </div>
       <button>Conatct Me</button>
      </div>
      <div className="content">
        <div className="content_box">
         <div className="image_box">
         <img src="s.jpg" alt="My Profile Images" />
         </div>
         <h1>Hello I'm Gaurav </h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, architecto.</p>
         <div className="social_icon">
         <i class="fa fa-facebook"></i>
         <i class="fa fa-twitter"></i>
         <i class="fa fa-instagram"></i>
         <i class="fa fa-linkedin"></i>
         </div>
        </div>
      </div>
      </div>
     </section>
    
    </div>
  )
}

export default About;