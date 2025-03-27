import React from "react";
import {useParams} from 'react-router-dom'

function User(){
    const {userid} = useParams()
    return(
        <div className="bg-gray-800 px-4 py-2 text-white">User: {userid}</div>
    )
}

export default User