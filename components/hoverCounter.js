'use client'

import { useState } from "react"
import EnhancedComp from "./highOrderComponent"

function HoverCounter({
    count,
    setCount,
    name
}){
    // const [count, setCount] = useState(0)

    return(
        <div onMouseOver={()=>setCount(prev=>prev+1)}>
            <p>You Hover me {count} times with name {name}</p>
        </div>
    )
}

export default EnhancedComp(HoverCounter)