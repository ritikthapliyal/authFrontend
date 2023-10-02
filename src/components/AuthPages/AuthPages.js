import React, { useState, useEffect } from 'react'
import LoginPage from './LoginPage'
import BriefAboutSite from './BriefAboutSite'
import Portfolio from '../Portfolio/Portfolio'
import Dashboard from '../Dashboard/Dashboard'
import AdminDashboard from '../Dashboard/AdminDashboard'
import { useGetCredentialsQuery } from '../../store/apis/authApis'
import { setAuthSliceState } from '../../store/authSlice'
import { useSelector, useDispatch } from 'react-redux'


function AuthPages() {

    const dispatch = useDispatch()
    const [showAuthPages,setShowAuthPages] = useState("0%")
    const {isAdmin,isLoggedIn} = useSelector((state)=>state.authSlice)

    const { data, isLoading } = useGetCredentialsQuery()

    useEffect(()=>{
        if(data){
            console.log(data)
            const {username,email,isAdmin} = data
            dispatch(setAuthSliceState({isAdmin,userData:{username,email},isLoggedIn:true}))
            setShowAuthPages("-50%")
        }
    },[data])


    if(isLoading){
        return <>loading....</>
    }

    return (
        <div className='outerContainer'>
            <div className='innerContainer' style={{transform:`translateX(${showAuthPages})`}}>
                <Portfolio setShowAuthPages={setShowAuthPages}></Portfolio>
                {
                    isLoggedIn 
                            ?  
                                isAdmin ? 
                                        <AdminDashboard showAuthPages={showAuthPages} setShowAuthPages={setShowAuthPages}/> 
                                        : 
                                        <Dashboard showAuthPages={showAuthPages} setShowAuthPages={setShowAuthPages}/> 
                            : 
                                <div className='AuthPages'>
                                    <LoginPage/>
                                    <BriefAboutSite/>
                                </div>
                }
            </div>
            {
             !isLoggedIn && showAuthPages !== "0%" && <button className='go-to-portfolio' onClick={()=>{setShowAuthPages("0%")}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                Back To Portfolio 
            </button>
            }
        </div>)
    }

export default AuthPages