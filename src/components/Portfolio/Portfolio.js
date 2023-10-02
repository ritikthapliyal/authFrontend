import React,{useRef} from 'react'
import './Css.css'
import Header from './Header'
import Profile from './Profile'
import Projects from './Projects'

function Portfolio({setShowAuthPages}) {
    
    const profileRef = useRef(null)
    const projectsRef = useRef(null)
    
    return (
        <div className='portfolio'>
            <Header setShowAuthPages={setShowAuthPages} refs={{profileRef,projectsRef}}></Header>
            <Profile refVal={profileRef}></Profile>
            <Projects refVal={projectsRef}></Projects>
        </div>
    )
}

export default Portfolio