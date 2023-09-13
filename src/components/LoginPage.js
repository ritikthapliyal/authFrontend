import React, { useState } from 'react'
import google from '../images/google.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import '../Css.css'
import { Link } from 'react-router-dom'

function LoginPage() {

    const [dataObj, setDataObj] = useState({username:"",password:""})
    const [dataObj2, setDataObj2] = useState({username:"",email:"",password:"",})

    const [isUp, setIsUp] = useState(true)

    const handleMove = () => {
        setIsUp(!isUp)
    }

    const loginUser = (e) => {
        e.preventDefault() 
        console.log(dataObj)
    }

    const registerUser = (e) => {
        e.preventDefault() 
        console.log(dataObj)
    }

    return (
        <div className='outer-container'>

            <div className='inner-container'>

                <div className={`login-page ${isUp ? 'goingUp' : 'goingDown'}`}>
                    
                    <h1>Login to Your <span>Account</span></h1>
                    
                    <div className='login-1'>
                        <span>Login using</span>
                        <div>
                            <button><img src={google}></img></button>
                            <button><img src={github}></img></button>
                            <button><img src={instagram}></img></button>
                            <button><img src={linkedin}></img></button>
                        </div>
                    </div>

                    <p className='login-divider'>or</p>

                    <div className='login-2'>
                        <form onSubmit={loginUser}>
                            <input 
                                type='text' 
                                placeholder='enter username'
                                value={dataObj.username}
                                onChange={(e)=>{setDataObj({...dataObj,username:e.target.value})}}></input>
                            <input 
                                type='password' 
                                placeholder='enter password'
                                value={dataObj.password}
                                onChange={(e)=>{setDataObj({...dataObj,password:e.target.value})}}></input>
                                <Link>Forgot Password?</Link>
                            <button onClick={loginUser}>Login</button>

                        </form>
                    </div>

                </div>

                <div className={`register ${isUp ? 'goingUp' : 'goingDown'}`}>

                    <h1>Fill Details and <span>Register</span></h1>

                    <div className='login-2'>
                            <form onSubmit={registerUser}>
                                <div>
                                    <label>Enter Username: </label>
                                    <input 
                                        type='text' 
                                        placeholder='enter username'
                                        value={dataObj2.username}
                                        onChange={(e)=>{setDataObj2({...dataObj2,username:e.target.value})}}></input>
                                </div>

                                <div>
                                    <label>Enter Email: </label>
                                    <input 
                                        type='email' 
                                        placeholder='enter email'
                                        value={dataObj2.password}
                                        onChange={(e)=>{setDataObj2({...dataObj2,email:e.target.value})}}></input>
                                </div>

                                <div>
                                    <label>Enter Password: </label>
                                    <input 
                                        type='password' 
                                        placeholder='enter password'
                                        value={dataObj2.password}
                                        onChange={(e)=>{setDataObj2({...dataObj2,password:e.target.value})}}></input>
                                </div>
                                
                                <button onClick={registerUser}>register</button>

                            </form>
                        </div>
                </div>
            </div>

            <button className='page-change-button' onClick={handleMove}>
                register 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>

        </div>
  )
}

export default LoginPage