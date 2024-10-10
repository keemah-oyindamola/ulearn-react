import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import axios from 'axios';
import logo from './logo.png'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



const Dashboard = () => {
    const navigate = useNavigate()
    const [allcourses, setallcourses] = useState([])
    const username = JSON.parse(localStorage.getItem("localstorage"));
    useEffect(() => {
        axios.get(`http://localhost:5000/course/getallcourses`)
            .then((res) => {
                console.log(res.data);
                setallcourses(res.data.allcourses || [])
            })
            .catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message);
            })


    }, [])

    const course_details=(courseId)=>{
        navigate(`/coursedetails/${courseId}`)
    }

    return (
        <>
            <div>
                <div className="container">
                    <div className="content">
                        <h1>Welcome user,{username.username}</h1>
                        <h1>Best Online Courses & Upgrade Your Skills</h1>
                        <p>Choose from 85,000 online video courses additions published every month & upgrade your skills. Get started with us.</p>
                        <div className="buttons">
                            <a href="#" className="get-started">Get Started</a>
                            <a href="#" className="see-more">See More About Us</a>
                        </div>
                    </div>
                    <div>
                        <img src="https://iste-prod.imgix.net/student-standards-screenshot1.JPG?ar=1.7777777777778%3A1&auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=633.375&q=80&w=1126" alt="" />
                    </div>
                </div>


                <div className='container2'>
                    <div className='featured-courses'>
                        <div className='courses'>
                            <p>FEATURED COURSES</p>
                            <h1>Pick a Course</h1>
                        </div>
                        <div className="button-div">
                            <button>VIEW ALL</button>
                        </div>
                    </div>

                    <div class="containerr">
                        {allcourses.map((courses) => (
                            <div onClick={()=>course_details(courses._id)} class="course-card" key={courses._id}>
                                <img src={courses.course_img} alt="Course Image" class="course-image" />
                                <div className="card-content">
                                    <h3>{courses.course_title}</h3>
                                    <p>{courses.course_desc}</p>
                                    <p class="price">{courses.course_price}৳</p>
                                    <p class="old-price">3,500.00৳</p>
                                    <button class="add-to-cart">Add to cart</button>
                                </div>
                            </div>

                        ))}
                    </div>

                    <div class="containerr">
                        {allcourses.map((courses) => (
                            <div class="course-card" key={courses._id}>
                                <img src={courses.course_img} alt="Course Image" class="course-image" />
                                <div className="card-content">
                                    <h3>{courses.course_title}</h3>
                                    <p>{courses.course_desc}</p>
                                    <p class="price">{courses.course_price}৳</p>
                                    <p class="old-price">3,500.00৳</p>
                                    <button class="add-to-cart">Add to cart</button>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <ToastContainer/>
            </div>
                    
        </>
    )
}

export default Dashboard