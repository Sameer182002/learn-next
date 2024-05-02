import { useState } from "react"
import userContext from "../useContext/createContext"

export default function UserContextt({children}){

    const [user,setUser] = useState({})

    return (
        <userContext.Provider value={{
            user,setUser
        }}>
            {children}
        </userContext.Provider>
    )
}