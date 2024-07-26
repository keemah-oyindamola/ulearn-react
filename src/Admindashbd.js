import React from 'react'
import './Admindashbd.css'

const Admindashbd = () => {
  const username = JSON.parse(localStorage.getItem("localstorage"));


  return (
    <>
    <div>Admindashbd</div>
    {/* <div className='adminmaain-div'>
      <div className='adminsecond-div '>
        <span className="material-symbols-outlined menu-icon">menu</span>
        <div className='adminuser-name'>
          <h3>Welcome Admin</h3>
        </div>
        <hr />
        <div className='adminflex-div'>
          <div className='course-register-div'>
            <h3>Course Registered</h3>
            <hr />
            <h2>0</h2>
          </div>
          <div className='course-progress-div'>
            <h3>Course progress</h3>
            <hr />
            <h2>---</h2>
          </div>
          <div className='course-proggress-div'>
            <h3>Signed Students</h3>
            <hr />
            <h2>{username.username}</h2>
          </div>
          <div className='course-proggress-div'>
            <h3>Certificate Issued</h3>
            <hr />
            <h2>---</h2>
          </div>
          <div className='course-proggress-div'>
            <h3>Programme</h3>
            <hr />
            <h2>---</h2>
          </div>
        </div>
      </div>
    </div> */}
    <h1>Course Management</h1>
    <form action="">
      <input className='input' type="text" placeholder='Course title' name="" id="" /><br />
      <textarea name="" placeholder='Course description' id=""></textarea><br />
      <input className='inputt' type="file" name="" id="" /><br />
      <button className='buttonn' type='submit'>Upload</button>
    </form>
    </>
  )
}

export default Admindashbd