import React, { useState } from 'react';
import './Dashbd.css';
import Sidenav from './Sidenav'; 
import web from './web-design.avif'

const Dashbd = () => {
  const username = JSON.parse(localStorage.getItem("localstorage"));
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className='maain-div'>
      <div id='sidenav-div' className={isSidebarVisible ? 'visible' : 'hidden'}>
        <Sidenav />
      </div>
      <div className={`second-div ${isSidebarVisible ? '' : 'full-width'}`}>
        <span onClick={toggleSidebar} className="material-symbols-outlined menu-icon">menu</span>
        <div className='user-name'>
          <h3>Welcome user, {username.username}</h3>
        </div>
        <hr />
        <div className='flex-div'>
          <div className='course-redister-div'>
            <h3>Course Registered</h3>
            <hr />
            <h2>0</h2>
          </div>
          <div className='course-progress-div'>
            <h3>Course progress</h3>
            <hr />
            <h2>---</h2>
          </div>
          <div className='course-progress-div'>
            <h3>Certificate Issued</h3>
            <hr />
            <h2>---</h2>
          </div>
          <div className='course-progress-div'>
            <h3>Programme</h3>
            <hr />
            <h2>---</h2>
          </div>
        </div>
        <div className='course-detail'>
          {/* <h3>Course detail:</h3> */}
          <div className='avlb-courses'>
            {/* <h3>Available courses</h3> */}
            <h2>A broad selection of courses</h2>
            <h3>Choose from over 220,000 online video courses with new additions published every month</h3>
          </div>
          <div className='coursedisp-flex'>
            <div className='python'>
              <h3>Python</h3>
            </div>
            <div className='web-development'>
              <h3>Web development</h3>
            </div>
            <div className='web-development'>
              <h3>Excel</h3>
            </div>
            <div className='web-development'>
              <h3>Javascript</h3>
            </div>
            <div className='web-development'>
              <h3>Data Analysis</h3>
            </div>
          </div>
        </div>

        <div className='python-div'>
          <div className='explore-python'>
            <h2>Expand your career opportunities with Python</h2>
            <h3>
              Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its <br /> simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll <br /> learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to..
            </h3>
            <button>Explore Python</button>
          </div>
          <div className='video-div'>
          <div className='div-img'>
              <img src={web} alt="" />
              <h2>The Complete Python <br /> Bootcamp From Zero to Her...</h2>
              <h2>
Instructors:
Jose Portilla, Pierian Training
Rating: 4.6 out of 5
(509,287)
Current price: <br />
₦41,900
</h2>
          </div>
          <div className='div-img2'>
              <img src={web} alt="" />
              <h2>The Complete Python <br /> Bootcamp From Zero to Her...</h2>
              <h2>
Instructors:
Jose Portilla, Pierian Training
Rating: 4.6 out of 5
(509,287)
Current price: <br />
₦41,900
</h2>
          </div>
          <div className='div-img2'>
              <img src={web} alt="" />
              <h2>The Complete Python <br /> Bootcamp From Zero to Her...</h2>
              <h2>
Instructors:
Jose Portilla, Pierian Training
Rating: 4.6 out of 5
(509,287)
Current price: <br />
₦41,900
</h2>
          </div>
          <div className='div-img2'>
              <img src={web} alt="" />
              <h2>The Complete Python <br /> Bootcamp From Zero to Her...</h2>
              <h2>
Instructors:
Jose Portilla, Pierian Training
Rating: 4.6 out of 5
(509,287)
Current price: <br />
₦41,900
</h2>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbd;
