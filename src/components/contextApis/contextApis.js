import { createContext, useContext, useReducer } from "react";


export const TasksContext = createContext([])
export const DispatchEventContext = createContext(()=>{})


export function useTasks(){
    return useContext(TasksContext)
}

export function useDispatchEventHandler(){
    return useContext(DispatchEventContext)
}
function reducer(tasks,action){
    switch(action.type){
      case "addTask" : {
        return [
          ...tasks,
          {
            id : tasks?.length ? tasks?.length + 1 : 1,
            title : action?.newTaskTitle,
            isEditable : false
          }
        ]
      }
      case "deleteTask" : {
        return tasks.filter(task=>task.id != action?.deletedTaskId)
      }
  
      case "makeEditable" : {
        return tasks.map((task)=>{
          if(task.id == action.taskId){
            task.isEditable = true
            return task
          }else{
            return task
          }
        })
      }
  
      case "saveTask" : {
        return tasks.map((task)=>{
          if(task.id == action.taskId){
            task.title = action.updatedTitle
            task.isEditable = false
            return task
          }else{
            return task
          }
        })
      }
    }
  }
  
export default function TaskWrapper({children}){
    const [tasks,dispatchEvent] = useReducer(reducer,[])
    return(
        <TasksContext.Provider value={tasks}>
            <DispatchEventContext.Provider value={dispatchEvent}>
                {children}
            </DispatchEventContext.Provider>
        </TasksContext.Provider>
    )
}