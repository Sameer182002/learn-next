import { useState } from "react"
import { useDispatchEventHandler } from "../contextApis/contextApis"

export default function TaskAddition(){
  const [inputText,setInputText] = useState('')
  const dispatchEvent = useDispatchEventHandler()

    return(
        <div className='searchbarCOntainer'>
            <input  
                type='text'
                placeholder='Enter Task To Add'
                className='input'
                onChange={(e)=>setInputText(e.target.value)}
                value={inputText}
            />
            <button 
                className='addbtn' 
                onClick={()=>{
                    dispatchEvent({
                        type : 'addTask',
                        newTaskTitle : inputText
                    })
                    setInputText('')
                }}>Add</button>
      </div>
    )
}