import React, { useState, useEffect } from 'react';
import './App.css';
import TasksForm from './TaskForm.js';
import DisplayTasks from './DisplayTask.js';

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);



  return (
    <div>
      
      <TasksForm setTasks={setTasks} />
      <input type="type" name='Upcoming' placeholder='Upcoming' style={{padding:"8px",margin:"20px",width:"60px"}}/>
      <input type="type" name='Upcoming' placeholder='ALL' style={{padding:"8px",margin:"20px",width:"25px"}}/>
      <DisplayTasks tasks={tasks} />
     
    </div>


  );
}

export default App;