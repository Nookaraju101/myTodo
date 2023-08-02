import './App.css';
import React from 'react';
import ReactDOM from 'react';
import { AddAction } from './Actions/TodoAction';
import { connect} from 'react-redux';
import TodoListComponent from './Todo/TodoListComponent';
import AddTodoComponent from './Todo/AddTodoComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App () {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
  

      
      {/* <TodoListComponent/> */}

      <Routes>
        <Route path="/" element={< TodoListComponent/>} />
        <Route path="addtodo" element={< AddTodoComponent/>} />
      </Routes>

    </div>
  );
}


export default App;