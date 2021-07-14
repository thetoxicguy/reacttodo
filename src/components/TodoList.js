import React from 'react';

// Import components
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return(
        <div className="todo-container">
        <ul className="todo-list">
            {/* We will map the "todos" hook: each todo will create a "Todo" component containing the text of the corresponding "todo" */}
            {filteredTodos.map(todo => (
                <Todo
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                key={todo.id}
                text={todo.text}/>
            ))}            
        </ul>
      </div>  
    );
};

export default TodoList;