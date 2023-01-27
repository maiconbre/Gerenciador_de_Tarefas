import React, { useState } from 'react';
import './App.css';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask) return;
    const task = { id: Math.random(), name: newTask };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const removerTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-manager">
      <h1>Gerenciador de Tarefas</h1>
      <form onSubmit={e => {
        e.preventDefault();
        addTask();
      }}>
        <input type="text"
          name="task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Escreva uma Tarefa" />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => removerTask(task.id)}>X</button>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default TaskManager;