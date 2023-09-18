import React,{ useState }  from 'react'
import { Link } from 'react-router-dom'

function Profile({refVal}) {

    const [showSocials,setShowSocials] = useState(false)
    
    return (
        <div ref={refVal} className='Profile-portfolio'>
            <div className='intro-portfolio'>
                <h1>Hello there.</h1>
                <p>My name is <br></br><span>Ritik Thapliyal</span></p>
                <hr></hr>
                <div>
                    <span><strong>Backend Developer</strong></span>
                    <span><strong>Problem Solver</strong></span>
                    <span><strong>{"<coder>"}</strong></span>
                </div>
                <button className='contact-me' onClick={()=>setShowSocials(!showSocials)}>Contact me</button>
                <span className='updown'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                </svg>
                </span>
            </div>
            <div className='profile-img-container'>
                <div className='profile-img'></div>
                <Link 
                    to={''} 
                    className='instagram_circle' 
                    style={{animation: showSocials ? "come_in_front_i  0.6s forwards": "go_back_inplace_i 0.6s forwards"}}>
                    <ion-icon name="logo-instagram" color="white"></ion-icon>
                </Link>
                <Link 
                    to={''} 
                    className='mail_square' 
                    style={{animation: showSocials ? "come_in_front_m  0.6s forwards": "go_back_inplace_m 0.6s forwards"}}>
                        <ion-icon name="mail-outline"></ion-icon>
                </Link>
                <Link 
                    to={''} 
                    className='linkedin_square' 
                    style={{animation: showSocials ? "come_in_front_l  0.6s forwards": "go_back_inplace_l 0.6s forwards"}}
                    >
                        <ion-icon name="logo-linkedin"></ion-icon>
                </Link>
                <Link 
                    to={''} 
                    className='github_square' 
                    style={{animation: showSocials ? "come_in_front_g  0.6s forwards": "go_back_inplace_g 0.6s forwards"}}
                    >
                        <ion-icon name="logo-github"></ion-icon>
                </Link>
            </div>
        </div>
    )
}

export default Profile