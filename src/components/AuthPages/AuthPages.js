import React, { useState } from 'react'
import LoginPage from './LoginPage'
import BriefAboutSite from './BriefAboutSite'
import Portfolio from '../Portfolio/Portfolio'

function AuthPages() {

    const [showPortfolio,setShowPortfolio] = useState(false)

    return (
        <div className='outerContainer'>
            <div className='innerContainer' style={{transform:`translateX(${ showPortfolio ? "-50%" : "0%"})`}}>
                <div className='AuthPages'>
                    <LoginPage/>
                    <BriefAboutSite/>
                </div>
                <Portfolio setShowPortfolio={setShowPortfolio}></Portfolio>
            </div>
            {
            !showPortfolio && <button className='go-to-portfolio' onClick={()=>{setShowPortfolio(true)}}>View Portfolio 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>}
        </div>)
    }

export default AuthPages