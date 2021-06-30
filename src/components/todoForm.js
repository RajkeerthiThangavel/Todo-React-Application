import { useRef } from 'react';

import classes from './TodoForm.module.css';

const TodoForm = (props) => {
  const todoInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = todoInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
      todoInputRef.current.value = "";
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' maxLength="50" placeholder="Enter Todo" ref={todoInputRef} />
      <button className={classes.addBtn}>Add Task</button>
    </form>
  );
};

export default TodoForm;
