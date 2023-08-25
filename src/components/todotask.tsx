import React  from 'react'
import { ITask } from './interface'

interface Props {
    task: ITask
    deltask(tasknamedel: string):void
}
const Todotask = ({task , deltask}:Props) => {
  return (
        <div style={{display:"flex",justifyContent:"space-between",margin:"20px",flexDirection:"row",gap:"20px",backgroundColor:"pink",width:"50%"}}>
          <h3>{task.taskname}</h3>
          <p>{task.deadline}</p>
          <button onClick={()=>{deltask(task.taskname)}}>delete</button>


        </div>
  )
}

export default Todotask