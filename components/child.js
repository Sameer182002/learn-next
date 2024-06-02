import { memo } from "react"

function Child({value}){
    console.log("Child Component")
    return(
        <div>
            <h1>Child Component {value}</h1>
        </div>
    )
}

export default memo(Child)