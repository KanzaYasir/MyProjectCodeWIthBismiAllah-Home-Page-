import React from 'react'
import './App.css'
import part2Img from './images/main-part-2.jpg'
import courseImg1 from './images/html-img.png'
import courseImg2 from './images/csss-img.png'
import courseImg3 from './images/intro_to_js-img.png'
import courseImg4 from './images/intro_python-img.png'
import tutorImg   from './images/tutor-img.jpg'
import facebookLink from './images/facebook-link.png'
import githubLink from './images/github-link.png'
import linkedInLink from './images/linkedIn-link.png'
import InstagramLink from './images/instagram-link.png'
import TypingEffect from './TypingEffect'
 function MainSection() {
  return (
    <div className='main-container'>

      <div className="main-sec">
        <div className="main-part-1">
             <h1>Welcome to <span>CodeWithBismiAllah</span></h1>
             <h3>Learn <span><TypingEffect/></span> </h3>
             <p>Welcome to CodeWithBismiAllah, your ultimate destination for learning and mastering coding! Whether you're a beginner starting from scratch or an experienced developer looking to sharpen your skills, we've got you covered. Dive into our comprehensive tutorials, interactive coding exercises, and real-world projects designed to enhance your programming knowledge. Start your coding journey today with CodeWithBismiAllah and turn your programming dreams into reality. Your path to becoming a coding expert begins here!</p>
               
             <div className="buttons">
             <a href="#"><button>Courses</button></a>
               <a href="#"> <button>Explore Blog</button></a>
                </div>  

        </div>
        <div className="main-part-2">
            <img src={part2Img} id="part2Img" />
        </div>
      </div>

     <div className="main-part-3">
        <h1>Free Courses</h1>
        <div className="courses-details">
             <div className="course"><img src= {courseImg1} id = "course-imgs"alt="" />
              <h5>HTML Full Course</h5>
              <p>Become a full-stack web developer with our intensive bootcamp.</p>
              <button>View Course</button>
             </div>
             <div className="course"><img src= {courseImg2} id = "course-img"alt="" />
             <h5>Learn CSS in one month</h5>
             <p>Become a full-stack web developer with our intensive bootcamp.</p>
             <button>View Course</button>
             </div>
             <div className="course"><img src= {courseImg3} id = "course-imgs"alt="" />
             <h5>Learn JavaScript</h5>
             <p>Become a full-stack web developer with our intensive bootcamp.</p>
             <button>View Course</button>
             </div>
             <div className="course"><img src= {courseImg4} id = "course-imgs"alt="" />
             <h5>Python Full Cours5</h5>
             <p>Learn python and machine learning in fifty days.</p>
             <button>View Course</button>
             </div>
        </div>
        <div className="main-part-4">
          <h1>TESTIMONIALS</h1>
          <div className="tutors">
             <div className="tutor"><img src= {tutorImg} id="tutor-img" />
             <p>"The best online courses I've ever taken! Comprehensive and easy to follow."</p>
             <div className="tutor-name">
              <h5>Abdul Manan</h5>
              <p>Web Developer</p>
             </div>


             </div>
             <div className="tutor"><img src= {tutorImg} id="tutor-img" /><p>"Amazing content and great instructors. Highly recommend to anyone looking to learn coding."</p>
             <div className="tutor-name">
              <h5>Jane Smith</h5>
              <p>Manager at XYZ</p>
             </div>

             </div>
             <div className="tutor"><img src= {tutorImg} id="tutor-img" /><p>
             "The courses are very well structured and cover all the important topics in depth."</p>
             <div className="tutor-name">
              <h5>Michael Brown</h5>
              <p>
              Developer at XYZ</p>
             </div>
             </div>
             <div className="tutor"><img src= {tutorImg} id="tutor-img" /><p>"I've learned so much in such a short time. Thank you for the great courses!"</p>
             <div className="tutor-name">
              <h5>Emily Johnson</h5>
              <p>Designer at XYZ</p>
             </div>
             </div>

          </div>
        </div>
       
          <div className="footer">
            <p>Copyright © 2024. All rights reserved.</p> 
            <div className="social-links">
           <a href="#"><img src={facebookLink} className="social-link" /></a>   
             <a href=""><img src={githubLink} className="social-link" /></a> 
             <a href=""> <img src={linkedInLink} className="social-link" /></a>
             <a href=""> <img src={InstagramLink} className="social-link" /></a>
            </div>
          </div>
       
    
     </div>

    </div>
  )
}
export {MainSection} 
