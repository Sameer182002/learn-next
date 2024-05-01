import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';

function reducer(){

}

// function App() {
//   // const [tasks,setTask] = useState([])
//   // const [value,setValue] = useState('')
//   // const [editableTask,setEditableTask] = useState('')

//   const [tasks,dispatch] = useReducer([],reducer)

//   function onadd(){
//     // setTask([
//     //   ...tasks,
//     //   {
//     //   name : value,
//     //   id : !tasks?.length ? 1 : tasks[tasks?.length-1].id + 1,
//     //   isEditable : false
//     // }])
//     // setValue('')
//   }

//   function onEdit(id){
//     // setTask(tasks.map(task=>{
//     //   if(task.id == id){
//     //     task.isEditable = true
//     //     setEditableTask(task.name)
//     //     return task
//     //   }else{
//     //     return task
//     //   }
//     // }))
//   }

//   function onSave(id){
//     // setTask(tasks.map(task=>{
//     //   if(task.id == id){
//     //     task.isEditable = false
//     //     task.name = editableTask
//     //     return task
//     //   }else{
//     //     return task
//     //   }
//     // }))
//     // setEditableTask('')
//   }

//   return (
//     <div className="App">
//       <div>
//         <input
//           type='text'
//           value={value}
//           onChange={(e)=>setValue(e.target.value)}
//         />
//         <button onClick={onadd}>Add</button>
//         <div>
//           {tasks.map(task=>
//             <div className='itemWrapper'>
//               <p></p>
//                 {task?.isEditable && <input type='text' value={editableTask} 
//                 // onChange={(e)=>setEditableTask(e.target.value)}
//                 />}
//                 {!task?.isEditable && <p style={{color:"black"}} key={task.id}>{task.name}</p>}
//                 <button onClick={()=>task?.isEditable ? onSave(task.id) :onEdit(task.id)}>{task?.isEditable ? "Save" :"Edit"}</button>
//                 <button>Delete</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

function App(){
  return(
    <div>Hello</div>
  )
}
export default App;
