import React from 'react';

const DisplayTasks = ({tasks}) => {

  return (
    <div style={{border: "1px solid black", padding: "10px"}}>
      {
        tasks.map((task) => {
          return (
            <div key={task.taskName} style={{border: "1px solid black", padding: "10px", margin:"10px"}}>
              {task.taskName} || {task.taskTime}
            </div>
          )
        })
      }
    </div>
  )
}

export default DisplayTasks;