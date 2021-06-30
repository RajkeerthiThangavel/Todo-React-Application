import Section from './UI/section';
import TodoForm from './todoForm';

const Todo = (props) => {
    const enterTodoHandler = (value) =>{
         props.onAddTodo(value);
    };

    return (
        <Section>
            <TodoForm onEnterTask={enterTodoHandler} />
        </Section>
    );
};

export default Todo;