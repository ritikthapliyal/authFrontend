import React, { useState } from 'react'
import google from '../images/google.png'
import github from '../images/github.png'
import '../Css.css'

function LoginPage() {

    const [dataObj, setDataObj] = useState({username:"",password:""})

    const loginUser = (e) => {
        e.preventDefault() 
        console.log(dataObj)
    }

    return (
        <div className='LoginPage'>
            
            <h1>Login to Your Account</h1>
            
            <div className='login-1'>
                <span>Login using</span>
                <div>
                    <button><img src={google}></img></button>
                    <button><img src={github}></img></button>
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
                    <button>Login</button>
                </form>
            </div>

        </div>
  )
}

export default LoginPage