import React, { useState } from 'react';
import './style.css'; //

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

 
  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue(''); 
    } else {
      alert('Пожалуйста, введите задачу.');
    }
  };

  
  const handleDeleteTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

 
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="container">
      <h2>React Task Manager</h2>
      
      <div className="input-group">
        <input 
          type="text"
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          onKeyPress={handleKeyPress}
          placeholder="Введите новую задачу..."
        />
        <button onClick={handleAddTask}>Добавить</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button 
              className="delete-btn" 
              onClick={() => handleDeleteTask(index)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;