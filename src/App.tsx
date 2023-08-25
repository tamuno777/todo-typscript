// import { FC,createContext } from 'react'
// import './App.css'
// import { Persons } from './components/Persons'


// interface Madcontextinterface{
//   name:string;
//   age:number;
// }
// const Appcontext = createContext<Madcontextinterface | null > (null)

// const App: FC =() =>  {
//   const contextvalue: Madcontextinterface ={
//     name:"winnie",
//     age: 20,
//   }
  
//   return (
//     <>
//     <Appcontext.Provider value={contextvalue}>
//     <Persons name='winnie' age={2} email='sjsjsj'/>

//     </Appcontext.Provider>
//     </>
//   )
// }

// export default App
import * as React from 'react';
import {FC ,useState,ChangeEvent} from 'react';
import { ITask } from './components/interface';
import Todotask from './components/todotask';


 const App: FC = () => {
  const [task, settask] = useState<string>("")
  const [deadline, setdeadline] = useState<number>(0)
  const [todo, settodo] = useState<ITask[]>([])

  const handlechange = (event:ChangeEvent<HTMLInputElement>): void=>{
    if (event.target.name === 'task')
    {settask(event.target.value)
    }else {
      setdeadline(Number(event.target.value))
    }
  }
  const addtask = ():void =>{
    const newtask = {taskname:task,deadline:deadline}
    settodo([...todo,newtask])
    settask("")
    setdeadline(0)
  }
  const deletetask = (tasknamedel :string):void =>{
    settodo(todo.filter((task)=>{
      return task.taskname != tasknamedel
    }))
    
  }
  return (
    <div className='App'>
      <div className="header" style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"olivedrab",height:"200px",gap:"10px"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

        <input value={task} type="text" name='task' placeholder='task...' onChange={handlechange} />
        <input value={deadline} onChange={handlechange}  name='deadline' placeholder='deadline in days...' />
        </div>

        <button onClick={addtask}>add task</button>
      </div>
      <div className="todolist" >
        {todo.map((task:ITask,key: number)=>{
          return<Todotask key={key} task={task} deltask={deletetask} />
        })}


      </div>
      
    </div>
  );
}
export default App;
