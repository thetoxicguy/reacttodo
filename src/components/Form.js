import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos, setStatus, filteredTodos} // We use setInputText into Form (not necessary to summon "props")
    ) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value); // We inherit the value from "App.js" to "Form.js"
    }

    const submitTodoHandler = (e) => {
        // avoid page refresh with prevent
        e.preventDefault();
        setTodos([
            ...todos, {text : inputText, completed: false, id: Math.random() * 1000},
        ]);
        setInputText("")
      }    

      const statusHandler = (e) => {
          setStatus(e.target.value)
      }

    return(
        <form>
        <input value = {inputText} onChange = {inputTextHandler} type="text" className="todo-input" />
        <button onClick = {submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      );
};

export default Form;