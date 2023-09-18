import React from 'react'
import './Css.css'
import Header from './Header'
import Profile from './Profile'
import Projects from './Projects'

function Portfolio({setShowPortfolio}) {

    return (
        <div className='portfolio'>
            <button className='go-to-login' onClick={()=>{setShowPortfolio(false)}}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                back
            </button>
            <Header></Header>
            <Profile></Profile>
            {/* <Projects></Projects> */}
        </div>
    )
}

export default Portfolio