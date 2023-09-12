import React from 'react'
import LoginPage from './LoginPage'
import BriefAboutSite from './BriefAboutSite'
import '../Css.css'

function AuthPages() {
  return (
    <div className='AuthPages'>
        <LoginPage/>
        <BriefAboutSite/>
    </div>
  )
}

export default AuthPages