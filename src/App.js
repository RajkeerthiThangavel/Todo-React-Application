import React, { useState } from 'react';
import Todo from './components/todo';
import Header from './components/header';
import TodoList from './components/todoList';
const App = () => {
  const [todos, SetTodos] = useState([]);
  //ADD TODO HANDLER
  const todoAddHandler = (value) => {
    SetTodos((prevVals) => [...prevVals, { "todoName": value, "key": Math.floor(Math.random() * Date.now()) }]);
  };
  const todoClearHandler = () => {
    SetTodos([]);
  };


  return (
    <React.Fragment>
        <Header/>
        <Todo onAddTodo={todoAddHandler} />
        <TodoList
          todos={todos}
          onClearTodo={todoClearHandler}
          SetTodosHandler={SetTodos}
        />
    </React.Fragment>
  );
}

export default App;
