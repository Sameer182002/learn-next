'use client'

import { useState } from "react"
import EnhancedComp from "./highOrderComponent"

function ClickCounter({
    count,
    setCount,
    name=""
}){
    
    return(
        <div>
            <p>You Clicked me {count} times and name is {name}</p>
            <button onClick={()=>setCount(prev=>prev+1)}>Click Me</button>
        </div>
    )
}

export default EnhancedComp(ClickCounter,2)