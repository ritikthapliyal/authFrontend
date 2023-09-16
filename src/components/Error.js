import React from 'react'
import { useLocation } from 'react-router-dom'

function Error() {
    const location = useLocation()
    console.log(location)
    const { status = 500, data = {message :'Unknown error'} } = location.state || {};

    return (
        <div>
            <p>errorCode : {status}</p>
            <p>errorCode : {data.message}</p>
        </div>
    )
}

export default Error