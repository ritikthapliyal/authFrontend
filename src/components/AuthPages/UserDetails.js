import React,{useState,useEffect} from 'react'
import BriefAboutSite from './BriefAboutSite'
import { useNavigate } from 'react-router-dom';
import { useGetCredentialsQuery, useSetCredentialsMutation } from '../../store/apis/authApis'

export default function UserDetails() {

    const navigate = useNavigate()

    const { data, isLoading, isError, error } = useGetCredentialsQuery()
    const [ setCredentials, setCredOptions] = useSetCredentialsMutation()

    if(isError){
        console.log(error)
        navigate('/error',{ state : error})
    }
    if(setCredOptions.isError){
        console.log(setCredOptions.error)
        navigate('/error',{ state : setCredOptions.error})
    }

    const [dataObj2, setDataObj2] = useState({username: "",email: "",password:""})

    const handleButtonClick = async (e) => {
        e.preventDefault() 

        try{
            const response = await setCredentials(dataObj2)
            console.log("response",response)
            if(response.data && response.data.status === 200){
                navigate("/dashboard")
            }
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(data){
            const {username,email} = data
            setDataObj2({...dataObj2,username,email})
        }
    },[data,setCredOptions.isError,setCredOptions.isLoading])

    if(isLoading || setCredOptions.isLoading){
        return <>loading....</>
    }

    return (
        <div className='AuthPages'>
            
            <div className='outer-container-2'>
            <h1 style={{"width":"40%"}}>The Last <span>Step</span></h1>               
            <div className='login-2'>
                <form onSubmit={handleButtonClick}>
                    <div>
                        <label>{ dataObj2.email.length === 0 ? "Enter Username:" : "Username:"}</label>
                        {
                            dataObj2.username.length !== 0 ? <span>
                                {dataObj2.username}
                            </span>:
                            <input 
                                type='text' 
                                placeholder='enter username'
                                value={dataObj2.username}
                                onChange={(e)=>{setDataObj2({...dataObj2,username:e.target.value})}}>
                            </input>
                        }
                    </div>

                    <div>
                        <label>{ dataObj2.email.length === 0 ? "Enter Email:" : "Email:"}</label>
                        {
                            dataObj2.email.length !== 0 ? <span>
                                {dataObj2.email}
                            </span>:
                            <input 
                                type='email' 
                                placeholder='enter email'
                                value={dataObj2.email}
                                onChange={(e)=>{setDataObj2({...dataObj2,email:e.target.value})}}>
                            </input>
                        }
                    </div>

                    <div>
                        <label>New Password: </label>
                        <input 
                            type='password' 
                            placeholder='enter password'
                            value={dataObj2.password}
                            onChange={(e)=>{setDataObj2({...dataObj2,password:e.target.value})}}></input>
                    </div>

                    <div>
                        <button onClick={handleButtonClick}>Submit</button>
                    </div>

                </form>
            </div>
            </div>
            <BriefAboutSite></BriefAboutSite>
        </div>
)}