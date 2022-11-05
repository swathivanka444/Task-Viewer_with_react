import React, { useState } from 'react';

const TasksForm = ({setTasks}) => {

 

  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      taskName,
      taskDesc,
      taskTime,
      taskDate
    }
    setTasks( tasks => [...tasks, newTask]);
  }


  return (

      <center>
    <form onSubmit={onSubmitHandler} style ={{border: "1px solid black", padding:"10px"}}>

      <label for="taskName">Task Name  : </label>
      <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} name="taskName" />

      <br />

      <label for="taskDesc">Task Description : </label>
      <input type="text" value={taskDesc} onChange={(e) => setTaskDesc(e.target.value)}  name="taskDesc" />

      <br />

      <label for="taskDate">Task Date : </label>
      <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} name="taskDate" />

      <br />

      <label for="taskTime">Task Time : </label>
      <input type="time" value={taskTime} onChange={(e) => setTaskTime(e.target.value)} name="taskTime" />


      <br />
      <button type="Create Task" name="Create Task">Create Task</button>
    </form>
   </center>
  )
}

export default TasksForm;