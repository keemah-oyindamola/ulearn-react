import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Coursedetails.css';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Coursedetails = () => {
    const [isPaid, setIsPaid] = useState(false);
    const [course, setallcourses] = useState({})
    const [videos, setvideos] = useState([]);
    const [visibleSections, setVisibleSections] = useState({}); // Track visibility per section
    const [activeVideoIndex, setActiveVideoIndex] = useState(null); // Track the active video index for clicking the <a> tag
    const { id } = useParams();
    const videoRef = useRef(null);
    const [previewWatched, setPreviewWatched] = useState(false); 

    useEffect(() => {
        axios.get(`http://localhost:5000/course/getcourse/${id}`)
            .then((res) => {
                console.log(res.data);
                setallcourses(res.data.course || {});
                setvideos(res.data.course.course_video || []);
            })
            .catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message);
            });

        const previewDuration = 17; 

        if (videoRef.current) {
            const handleVideoPlay = () => {
                if (!previewWatched) {
                    setTimeout(() => {
                        videoRef.current.pause();
                        setPreviewWatched(true);
                        toast.info('Preview ended. Please purchase the course to watch the full video.');
                    }, previewDuration * 1000);
                }
            };

            videoRef.current.addEventListener('play', handleVideoPlay);

            return () => {
                if (videoRef.current) {
                    videoRef.current.removeEventListener('play', handleVideoPlay);
                }
            };
        }
    }, []);

    // Toggle section visibility based on section index
    const handleToggleSection = (index) => {
        setVisibleSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    // Handle click on the <a> tag to show the video
    const handleVideoClick = (videoIndex) => {
        setActiveVideoIndex(videoIndex); // Set the clicked video as active
    };

    return (
        <div>
            <div className="course-details-container">
                <div className='course-video'>
                    <div className='video-div'>
                        <video
                            className='video'
                            ref={videoRef}
                            src={course.course_video && course.course_video.length > 0 ? course.course_video[0] : ""}
                            controls={!previewWatched}></video>
                        <div className='price-button'>
                            <div className='price-div'>
                                <h1>₦{course.course_price}</h1>
                                <p>Preview this course</p>
                            </div>
                            <div class="button-container">
                                <button class="add-to-cart">Add to cart</button>
                                <button class="buy-now">Buy now</button>
                            </div>
                        </div>
                    </div>
                    <div className='desc'>
                        <div className='development'>
                            <p>Development</p>
                            <span class="material-symbols-outlined" id='right'>chevron_right</span>
                            <p>Web development</p>
                            <span class="material-symbols-outlined" id='right'>chevron_right</span>
                            <p>Web development</p>
                        </div>
                        <h1>{course.course_title}</h1>
                        <p>{course.course_desc}</p>
                        <p>Created by <a className='price' href="">Dr{course.instructor}</a></p>
                    </div>
                </div>

                <div class="learn-section">
                    <h2>What you'll learn</h2>
                    <div class="learn-grid">
                        <ul>
                            <li>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</li>
                            <li>After the course you will be able to build ANY website you want.</li>
                            <li>Work as a freelance web developer.</li>
                            <li>Master backend development with Node.</li>
                        </ul>
                        <ul>
                            <li>Learn the latest technologies, including Javascript, React, Node and even Web3 development.</li>
                            <li>Build fully-fledged websites and web apps for your startup or business.</li>
                            <li>Master frontend development with React.</li>
                            <li>Learn professional developer best practices.</li>
                        </ul>
                    </div>
                </div>

                <div className='course-content-div'>
                    <h2>Course content</h2>

                    <div class="course-list">
                        {['Front-End Web Development', 'Introduction to HTML'].map((section, index) => (
                            <div key={index}>
                                <div class="course-item">
                                    <span class="material-symbols-outlined" onClick={() => handleToggleSection(index)}>
                                        keyboard_arrow_down
                                    </span>
                                    <div class="course-title">{section}</div>
                                    <div class="course-details">9 lectures • 37min</div>
                                </div>
                                {visibleSections[index] && (
                                    <div class="section-content">
                                        <div className='section-content-subdiv'>
                                            <div className='section-content2'>
                                                <span class="material-symbols-outlined">movie_info</span>
                                                <a href="#" onClick={() => handleVideoClick(index)}>Watch Video</a>
                                            </div>
                                            {activeVideoIndex === index && videos.length > index && (
                                                <div className="showVideo">
                                                    <video src={videos[index]} id='videos' controls></video>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Coursedetails;
