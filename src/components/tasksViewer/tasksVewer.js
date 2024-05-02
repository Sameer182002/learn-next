import { useState } from "react"
import { useDispatchEventHandler, useTasks } from "../contextApis/contextApis"

export default function TasksViewer(){
    const [updatedTitle, setUpdatedTitle] = useState('')
    const tasks = useTasks()
    const dispatchEvent = useDispatchEventHandler()
    return(
        <div>
            {tasks.map(({title,id,isEditable=false})=>
                <div className='itemWrapper'>
                    {!isEditable && <p>{title}</p>}
                    {isEditable && 
                        <input
                            type="text"
                            value={updatedTitle}
                            onChange={(e)=>setUpdatedTitle(e.target.value)}
                        />
                    }
                    <button onClick={()=>{
                        isEditable ? 
                        dispatchEvent({
                            type : "saveTask",
                            taskId : id,
                            updatedTitle : updatedTitle
                        }) : 
                        dispatchEvent({
                            type : 'makeEditable',
                            taskId :id
                        })
                        setUpdatedTitle(title)
                        }}>{isEditable ? 'Save' :'Edit'}</button>
                    <button onClick={()=>dispatchEvent({type:"deleteTask",deletedTaskId:id})}>Delete</button>
                </div>
            )}
      </div>
    )
}