import React, { useEffect, useState } from 'react';
import './App.css';

interface task {
  id: number,
  title: string,
  completed: boolean,
}

function App() {
  const [tasks, setTasks] = useState<task[]>([]);
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(response => response.json())
      .then(json => setTasks(json))
  }, [])

  return (
    <div className="App">
      <h1>Tasks</h1>
      {tasks && tasks.map(task => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}

export default App;
