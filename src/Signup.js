import React, { useState, useEffect } from 'react'
import "./Signup.css"
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'


const Signup = () => {
    const navigate = useNavigate()
    // const [users, setusers] = useState([] && JSON.parse(localStorage.getItem("localstorage")))
    // useEffect(() => {
    //     axios.get('http://localhost:5000')
    //         .then((res) => {
    //             console.log(res);
    //             setusers(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })


    // }, [])

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            username: yup.string().min(6, "username is too short").required("username is required"),
            email: yup.string().email("email must be valid").required("email is required"),
            password: yup.string().min(6, "password is too short").required("password is required")
        }),
        onSubmit: (value) => {
            // const existinguser = users.find(exist => exist.email == value.email && exist.password == value.password)
            // if (existinguser) {
            //     console.log("user already exist");
            //     toast.error('user exists')
            // } else {
                console.log(value);
                axios.post("http://localhost:5000/user/signup", value)
                    .then((res) => {
                        console.log(res.data);
                        localStorage.setItem("localstorage", JSON.stringify(value))
                        toast.success("signup successful")
                        JSON.parse(localStorage.getItem("localstorage"))
                        setTimeout(()=>{
                        navigate('/login')
                        }, 3000)
                    }).catch((error) => {
                        console.log(error);
                        toast.error(error?.response?.data?.message)
                    })
            // }
        }
    })

    console.log(formik.errors);
    console.log(formik.touched);
    return (

        <div className='main-div'>
            <form onSubmit={formik.handleSubmit} action="">
                <div className='first-div'>
                    <div className='content-center'>
                        <h3>Sign up and start learning</h3>
                        {/* <div> */}
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} className='input' type="text" name='username' placeholder='Full name' />
                        <p className='formik-p'>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</p>

                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} className='input' type="email" name='email' placeholder='Email' />
                        <p className='formik-p'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</p>

                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} className='input' type="password" name='password' placeholder='Password' />
                        <p className='formik-p'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>

                        <br /><br />
                        <div className='checkbox'>
                            <input type="checkbox" name="" id="" />
                            <p className='ptags'>Send me special offers, personalized <br /> recommendations, and learning tips</p>
                        </div>
                        <button type='submit' className='signup'>Sign up</button>
                        <p className='ptag'>By signing up, you agree to our <a className='ptag-a' href="">Terms of Use</a> and <a className='ptag-a' href="">Privacy Policy</a>.</p>
                        {/* <hr /> */}
                        <p className='ptag'>Already have an account? <Link to='/login'>Log in</Link></p>
                        <ToastContainer />
                        {/* </div> */}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup