import { useContext } from "react";
import userContext from "../useContext/createContext";


export default function Profile(){
    const {user} = useContext(userContext)
    console.log({user})
    if(!Object.keys(user).length) return <div>Pls login</div>
    return <div>Hello {user.username}</div>
}