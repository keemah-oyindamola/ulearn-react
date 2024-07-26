import React from 'react'
import './Sidebar.css'
import logo from './logo.png'

const Sidenav = ({isVisible}) => {
    return (
        <>
            <div>
                <div className={`sidenav ${isVisible ? 'visible' : "hidden"}`}>
                    <div className='logo-div'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='general-div'>
                        <p>General</p>
                    </div>
                    <div className='dashbd-div'>
                        <span class="material-symbols-outlined">grid_view</span>
                        <p>Dashboard</p>
                    </div>
                    <div className='academics-div'>
                        <p>Academics</p>
                    </div>
                    <div className='dashbd-div'>
                        <span class="material-symbols-outlined">notifications</span>
                        <p>Course Registration</p>
                    </div>
                    <div className='resources-div'>
                        <span class="material-symbols-outlined">bookmark</span>
                        <p>Resources</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Sidenav