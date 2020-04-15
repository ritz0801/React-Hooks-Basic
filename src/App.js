import React, { useState } from 'react';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Có làm thì mới có ăn!' },
    { id: 2, title: 'Không làm mà đòi ăn!' },
    { id: 3, title: 'Chỉ có ăn ...!' },
  ]);

  const handleTodoClick = (todo) => {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>Welcome to React Hooks!</h1>
      {/* <ColorBox /> */}
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
