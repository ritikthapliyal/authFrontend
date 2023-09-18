import React from 'react'

function Header({setShowPortfolio,refs}) {
    
    const {profileRef,projectsRef} = refs
    
    const scrollToComponent = (ref) => {
        console.log(ref)
        if (ref && ref.current) {
            console.log(ref.current)
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }  

    return (
        <div className='header-portfolio'>
            <button className='go-to-login' onClick={()=>{setShowPortfolio(false)}}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                back
            </button>
            <button onClick={() => scrollToComponent(profileRef)}>Introduction & <br></br>Contact Info</button>
            <span className='vertical-line'>|</span>
            <button>Work Experience</button>
            <span className='vertical-line'>|</span>
            <button>Skills</button>
            <span className='vertical-line'>|</span>
            <button onClick={() => scrollToComponent(projectsRef)}>Projects</button>
            <span className='vertical-line'>|</span>
            <button>Download<br></br>Resume</button>
        </div>
    )
}

export default Header