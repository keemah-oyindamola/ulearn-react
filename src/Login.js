import React, { useState, useEffect } from 'react'
import "./Login.css"
import { Formik, useFormik } from 'formik'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [loginusers, setloginusers] = useState([])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    onSubmit: async (value) => {
      try {
        const res = await axios.post("http://localhost:5000/user/login", value);
        console.log(res.data);
        console.log(res._id);
        toast.success("Login successful");
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred during login");
        }
      }
    }
  })
  console.log(formik.errors);

  return (
    <div className='main-div'>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className='first-div'>
          <div className='content-center'>
            <h3>Login in and start learning</h3>
            {/* <div> */}
            < input onChange={formik.handleChange} onBlur={formik.handleBlur} className='inputs' type="email" placeholder='Email' name='email' />
            < input onChange={formik.handleChange} onBlur={formik.handleBlur} className='inputs' type="password" placeholder='Password' name='password' />
            <br /><br />
            <div className='checkbox'>
              <input type="checkbox" name="" id="" />
              <p className='ptags'>Send me special offers, personalized <br /> recommendations, and learning tips</p>
            </div>
            <button type='submit' className='loginbtn'>Login in</button>
            <p className='ptag'>By logining up, you agree to our <a className='ptag-a' href="">Terms of Use</a> and <a className='ptag-a' href="">Privacy Policy</a>.</p>
            {/* <hr /> */}
            <p className='ptag'>Don't have an account? <Link to='/signup'>Sign up</Link></p>
            <ToastContainer />
            {/* </div> */}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login