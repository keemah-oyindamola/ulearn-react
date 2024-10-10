import React, { useState, useEffect } from 'react';
import './Admindashbd.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Admindashbd = () => {
    const { id } = useParams();
    const [users, setusers] = useState([]);
    const [coursedata, setcoursedata] = useState({
        course_title: "",
        course_desc: "",
        course_price: "",
        category: "",
        instructor: "",
        course_requirement: "",
        course_img: null
    });

    const [videodata, setvideodata] = useState({
        video: ""
    })

    useEffect(() => {
        axios.get("http://localhost:5000/user/getalluser")
            .then((res) => {
                setusers(res.data.alluser || []);
            })
            .catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message);
            });
    }, []);

    const deleteuser = (userId) => {
        axios.delete(`http://localhost:5000/user/deleteuser/${userId}`)
            .then((res) => {
                setusers(users.filter((user) => user._id !== userId));
                toast.success(res.data.message);
            })
            .catch((error) => {
                console.error('Error deleting user:', error);
                toast.error('Failed to delete user');
            });
    };

    const upload = (e) => {
        e.preventDefault();
        if (!coursedata.course_img) {
            toast.error("Please select an image to upload.");
            return;
        }

        const formData = new FormData();
        formData.append('course_img', coursedata.course_img);
        formData.append('course_title', coursedata.course_title);
        formData.append('course_desc', coursedata.course_desc);
        formData.append('course_price', coursedata.course_price);
        formData.append('category', coursedata.category);
        formData.append('instructor', coursedata.instructor);
        formData.append('course_requirement', coursedata.course_requirement)

        axios.post('http://localhost:5000/course/courseupload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                console.log(res.data);
                setcoursedata((prevCoursedata) => ({ ...prevCoursedata, _id: res.data.course._id }));
                toast.success(res.data.message);
            })
            .catch((error) => {
                console.error(error);
                toast.error(error?.response?.data?.message);
            });
    };

    const fileChange = (e) => {
        setcoursedata({ ...coursedata, course_img: e.target.files[0] });
    };

    const videoChange = (e) => {
        setvideodata({ ...videodata, video: e.target.files[0] })
    }

    const uploadVideo = (e) => {
        e.preventDefault();

        if (!videodata) {
            toast.error("Please select a video to upload.");
            return;
        }

        if (!coursedata._id) {
            toast.error("Course ID is missing. Please upload the course first.");
            return;
        }
        console.log(coursedata._id);
        
        const formdata = new FormData();
        formdata.append("video", videodata.video);
        formdata.append("course_id", coursedata._id)

        axios.post("http://localhost:5000/course/uploadvideo", formdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                console.log(res.data);
                toast.success(res.data.message)

            })
            .catch((error) => {
                console.error(error);
                toast.error(error?.response?.data?.message);
            });
    }
    return (
        <>
            <div className="admin-header">Admindashbd</div>
            <table className="admin-main-div">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user._id}</td>
                            <td>
                                <button onClick={() => deleteuser(user._id)} className='buttonnn'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>Course Management</h1>
            <form onSubmit={upload}>
                <input
                    className='input'
                    type="text"
                    placeholder='Course title'
                    name="course_title"
                    value={coursedata.course_title}
                    onChange={(e) => setcoursedata({ ...coursedata, course_title: e.target.value })}
                /><br />

                <textarea
                    name="course_desc"
                    placeholder='Course description'
                    value={coursedata.course_desc}
                    onChange={(e) => setcoursedata({ ...coursedata, course_desc: e.target.value })}
                /><br />

                <input
                    className='input'
                    type="number"
                    name="course_price"
                    placeholder='Course Price'
                    onChange={(e) => setcoursedata({ ...coursedata, course_price: e.target.value })}
                    value={coursedata.course_price}
                /><br />

                <input
                    className='input'
                    type="text"
                    name="category"
                    placeholder='Category'
                    onChange={(e) => setcoursedata({ ...coursedata, category: e.target.value })}
                    value={coursedata.category}
                /><br />

                <input
                    className='input'
                    type="text"
                    name="instructor"
                    placeholder='Instructor'
                    onChange={(e) => setcoursedata({ ...coursedata, instructor: e.target.value })}
                    value={coursedata.instructor}
                /><br />

                <input
                    className='input'
                    type="text"
                    name="course_requirement"
                    placeholder='Course requirement'
                    onChange={(e) => setcoursedata({ ...coursedata, course_requirement: e.target.value })}
                    value={coursedata.course_requirement}
                /><br />

                <input
                    className='input'
                    type="file"
                    name="course_img"
                    onChange={fileChange}
                /><br /><br />

                <button className='buttonn' type='submit'>Upload</button>
            </form>

            <form action="" onSubmit={uploadVideo}>
                <input
                    className='input'
                    type="file"
                    name="video"
                    onChange={videoChange}
                    id=""
                />
                <button className='buttonn' type='submit'>upload</button>
            </form>
            <ToastContainer />
        </>
    );
};

export default Admindashbd;
