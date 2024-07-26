import React from 'react'
import './Navbar.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    {/* <div className='Main-div'> */}
      <div className='firstnav-div'>
        <div className='img-div'>
          <img src={logo} alt="" />
        </div>
        <div className='categories-div'>
          <p>Categories</p>
        </div>
        <div className='search-div'>
          <span class="material-symbols-outlined">search</span>
          <input placeholder='Search for anything' type="text" />
        </div>
        <div className='udemybusiness-div'>
          <Link to=''><p>Udemy Business</p></Link>
        </div>
        <div className='categories-div'>
          <p> Teach on Udemy </p>
        </div>
        <div className='cart-div'>
          <span class="material-symbols-outlined">shopping_cart</span>
        </div>
        <div className='login-div'>
          <Link to='/login'><button>Log in</button></Link>
        </div>
        <div className='signup-div'>
        <Link to='/signup'><button>Sign up</button></Link>
        </div>
      </div>
    {/* </div> */}
  </>
  )
}

export default Navbar