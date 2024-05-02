import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import TaskAddition from './components/taskAdditon/taskAddition';
import TasksViewer from './components/tasksViewer/tasksVewer';
import { DispatchEventContext, TasksContext } from './components/contextApis/contextApis';



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

function App() {

  const [tasks,dispatchEvent] = useReducer(reducer,[])

  return (
    <div className="App">
      <TasksContext.Provider value={tasks}>
          <DispatchEventContext.Provider value={dispatchEvent}>
              <TaskAddition />
              <TasksViewer />
          </DispatchEventContext.Provider>
      </TasksContext.Provider>

      {/* {
        2nd approach
        <TaskWrapper>
              <TaskAddition />
              <TasksViewer/>
          </TaskWrapper>
      } */}
    </div>
  );


}

export default App;
