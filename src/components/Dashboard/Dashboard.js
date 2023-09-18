import React, { useEffect, useRef } from 'react'
import './Css.css'
import Projects from '../Portfolio/Projects'

function Dashboard() {

    const outerDiv = useRef(null)
    
    // useEffect(()=>{
    //     const container = outerDiv.current
    //     console.log(container.clientHeight)
    //     console.log(container.getBoundingClientRect())
    //     // console.log(container.scrollTop)
    // },[])

    return (
        // <div className='dashboard'>
        <div>
            {/* <Projects></Projects> */}

            {/* <div onScroll={()=>{
                console.log(outerDiv.current.scrollTop)
            }} ref={outerDiv} className='outer-div'>
                <div className='inner-div one'></div>
                <div className='inner-div two'></div>
            </div> */}

        </div>
    )
}

export default Dashboard