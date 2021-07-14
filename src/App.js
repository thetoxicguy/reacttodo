import React, {useState, useEffect} from 'react';
import './App.css';

// Components
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {

  
  // name of the data, function to transform the data. Initial value: "" (empty string), [] (empty array)
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run once when the app starts (COMES BEFORE ANYTHING)
  useEffect( () => {
    getLocalTodos();
  }, []); // The empty array indicates it only runs once
  
  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case "uncompleted":
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;   
          default:
            setFilteredTodos(todos)
            break;
          }  
        }  
        
        useEffect(() => {
          filteredHandler();
          saveLocalTodos();
        }, [todos, status]); // this useEffect function activates whenever "todos" or "status" values change  
        
        // Save to local storage
        const saveLocalTodos = () => {
          localStorage.setItem('todos', JSON.stringify(todos));
        };  
        const getLocalTodos = () => {
          if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
          } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
          }  
        };  
        
        return (
  <div className="App">
    <header>
      <h1>Daniel's Todo List</h1>
    </header>
    <Form
    todos = {todos}
    setTodos = {setTodos}
    inputText = {inputText}
    setInputText = {setInputText} 
    setStatus={setStatus} /> {/* We pass the function setInputText to "Form" (with the same name) */}
    <TodoList
    todos = {todos}
    setTodos={setTodos}
    filteredTodos={filteredTodos}/>
  </div>
  );
}

export default App;
