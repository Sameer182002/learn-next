import userContext from "../useContext/createContext"
import { useContext, useState } from "react"

export default function Login(){

    const {user,setUser} = useContext(userContext)
    const [data,setData] = useState({})

    function handleSubmit(e){
        e.preventDefault()
        console.log({data})
        setUser({
            username : data?.userName,
            password : data?.password
        })
    }

    return(
        <div>
            <input
                type="text"
                placeholder="UserName"
                onChange={(e)=>setData({...data,userName:e.target.value})}
            />
            <br></br>
            <input
                type="text"
                placeholder="Password"
                onChange={(e)=>setData({...data,password:e.target.value})}
            />
            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </div>
    )
}