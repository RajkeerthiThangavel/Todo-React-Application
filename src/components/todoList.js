import Section from './UI/section';
import deleteIcon from './assets/deleteIcon.png';
import classes from './TodoList.module.css';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = (props) => {
    const [todoList, setTodoList] = useState(null);
    const [completedTodoList, setCompletedTodoList] = useState([]);
    useEffect(() => {
        if (props.todos) {
            setTodoList(props.todos);
        }
    }, [props.todos]);

    const handleTodoCheck = (e) => {
        const TodoCompleted = todoList.find(element => element.key == e.target.value);
        if (e.target.checked) {
            setCompletedTodoList((prevVals) => [...prevVals, TodoCompleted]);
        } else {
            let tempCompTodo = Object.assign([], completedTodoList);
            let objectIndex = tempCompTodo.findIndex(x => x.key == e.target.value);
            tempCompTodo.splice(objectIndex, 1);
            setCompletedTodoList(tempCompTodo);
        }
    };

    const handleTodoDelete = (e) => {
        const TodoToDelete = todoList.find(element => element.key == e.target.id);
        if (window.confirm("Are you sure? you wanna remove task " + TodoToDelete.todoName)) {
            let tempTodo = Object.assign([], todoList);
            let tempCompTodo = Object.assign([], completedTodoList);
            let objectIndex = tempTodo.findIndex(x => x.key == e.target.id);
            let objectCIndex = tempCompTodo.findIndex(x => x.key == e.target.id);
            tempCompTodo.splice(objectCIndex, 1);
            tempTodo.splice(objectIndex, 1);
            setTodoList(tempTodo);
            setCompletedTodoList(tempCompTodo);
            props.SetTodosHandler(tempTodo);
            toast.dark("Task Deleted Successfully!");
        }
    };

    const handleTodoClear = () => {
        setTodoList("");
        setCompletedTodoList([]);
        props.onClearTodo();
    };

    return (
        <><ToastContainer/>
            {todoList && todoList.length > 0 ?
                <Section>
                    {todoList.map((item) => (
                        <Row className={classes.todoRow} key={item.key}>
                            <Col className={classes.todoColLeft} md={6} lg={6} xl={6}>
                                <input type="checkbox" className={classes.todoCheck} value={item.key} onChange={handleTodoCheck} /><span>{item.todoName}</span>
                            </Col>
                            <Col className={classes.todoColRight} value={item.key} md={6} lg={6} xl={6}><img src={deleteIcon} alt='Delete Todo' id={item.key} onClick={handleTodoDelete} className={classes.deleteBtn} /></Col>
                        </Row>
                    ))}
                    <div className={classes.todoClearBtn} onClick={handleTodoClear}>Clear</div>
                </Section> : <Section><div>No Todos available! Start Adding</div></Section>}

            {completedTodoList && completedTodoList.length > 0 ?
                <Section>
                    <div>Completed Todo List:</div>
                    {completedTodoList.map((item) => (
                        <Row className={classes.todoRow} key={item.key}>
                            <Col className={classes.todoCompleted} md={6} lg={6} xl={6}>
                                <span>{item.todoName}</span>
                            </Col>
                        </Row>
                    ))}
                </Section> : <></>}

        </>
    );
};

export default TodoList;