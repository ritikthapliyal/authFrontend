import React,{ useState }  from 'react'
import { Link } from 'react-router-dom'

function Profile() {

    const [showSocials,setShowSocials] = useState(false)
    
    return (
        <div className='Profile-portfolio'>
            <div>
                <h1>Hello there. My name  is Ritik</h1>
                <button onClick={()=>setShowSocials(!showSocials)}> contact me</button>
            </div>
            <Link 
                to={''} 
                className='instagram_circle' 
                style={{animation: showSocials ? "come_in_front_i  0.6s forwards": "go_back_inplace_i 0.6s forwards"}}
                >
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
            <div className='profile-img'>
            </div>
        </div>
    )
}

export default Profile