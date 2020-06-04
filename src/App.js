import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const listStorage = JSON.parse(localStorage.getItem("list"));
  const [todoList, setTodoList] = useState(listStorage ? listStorage : [])

  const removeTodoClick = (todo) => {
    console.log(todo);
    const index = JSON.parse(localStorage.getItem("list")).findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    localStorage.setItem("list", JSON.stringify(newTodoList))
  }

  const handleTodoFormSubmit = (formValues) => {
    console.log('Form submit: ', formValues);
    // add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    localStorage.setItem("list", JSON.stringify(newTodoList));
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={removeTodoClick} />
    </div>
  );
}

export default App;
