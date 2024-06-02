'use client'

import { useState } from "react"

function EnhancedComp(Component){
    function NewComponent(props){
        const [count,setCount] = useState(0)

        return <Component
            count = {count}
            setCount = {setCount}
            {...props}
        />
    }
    return NewComponent
}

export default EnhancedComp