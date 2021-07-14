import React from 'react';

const Todo = ({todo, text, todos, setTodos}) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id){
                return {
                    // ...item to preserve props, completed is changed to its opposite
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
        );
    };

    return(
        <div className="todo">
            {/* "completed class makes css to mark a line-through and opacity style to the text" */}
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;