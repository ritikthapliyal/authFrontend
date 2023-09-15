import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import BriefAboutSite from './BriefAboutSite'

export default function UserDetails() {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const username = searchParams.get('username')
    const email = searchParams.get('email');

    const [dataObj2, setDataObj2] = useState({username:username || "",email:email || "",password:""})


    const registerUser = (e) => {
        e.preventDefault() 
        console.log(dataObj2)
    }

  return (
    <div className='AuthPages'>
        
        <div className='outer-container'>
        <div className='inner-container' style={{"display":'flex'}}>
        <div className='login-2'>
            <form onSubmit={registerUser}>
                <div>
                    <label>{ email.length === 0 ? "Enter Username:" : "Username:"}</label>
                    <input 
                        type='text' 
                        placeholder='enter username'
                        value={dataObj2.username}
                        onChange={(e)=>{
                            if(username.length === 0){
                                setDataObj2({...dataObj2,username:e.target.value})}
                            }}>
                        </input>
                </div>

                <div>
                    <label>{ email.length === 0 ? "Enter Email:" : "Email:"}</label>
                    <input 
                        type='email' 
                        placeholder='enter email'
                        value={dataObj2.email}
                        onChange={(e)=>{
                            if(email.length === 0){
                                setDataObj2({...dataObj2,email:e.target.value})}
                            }}>
                        </input>
                </div>

                <div>
                    <label>Enter Password: </label>
                    <input 
                        type='password' 
                        placeholder='enter password'
                        value={dataObj2.password}
                        onChange={(e)=>{setDataObj2({...dataObj2,password:e.target.value})}}></input>
                </div>

                <div>
                    <button onClick={registerUser}>Submit</button>
                </div>

            </form>
        </div>
        </div>
        </div>
        <BriefAboutSite></BriefAboutSite>
    </div>
)}