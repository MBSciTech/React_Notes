import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tlist, setList] = useState([]);

  const add = () => {
    if (task.trim() !== '') {
      setList([...tlist, task]);
      setTask('');
    }
  };

  const remove = (id) => {
    setList(tlist.filter((_, i) => i !== id));
  };

  const inputStyle = {
    padding: '10px 20px',
    width: '250px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    outline: 'none',
    transition: '0.3s',
  };

  const addBtnStyle = {
    backgroundColor: '#32a852',
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '24px',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s',
  };

  const removeBtnStyle = {
    backgroundColor: '#ed5858',
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s',
  };

  const listItemStyle = {
    backgroundColor: '#f3f3f3',
    padding: '10px 15px',
    margin: '10px 0',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '16px',
  };

  const containerStyle = {
    padding: '30px',
    maxWidth: '400px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'sans-serif',
  };

  const inputContainerStyle = {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: '20px' }}>To Do List</h1>
      <div style={inputContainerStyle}>
        <input
          style={inputStyle}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
        />
        <button style={addBtnStyle} onClick={add}>+</button>
      </div>
      <div id="List" style={{ width: '100%' }}>
        {tlist.map((v, id) => (
          <div style={listItemStyle} key={id}>
            {v}
            <button style={removeBtnStyle} onClick={() => remove(id)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
