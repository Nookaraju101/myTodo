import './App.css';
import React from 'react';
import ReactDOM from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import TodoListComponent from './Todo/TodoListComponent';
import AddTodoComponent from "./Todo/AddTodoComponent";
import { Link } from "react-router-dom";
import { DashBoardComponent } from './Todo/DashBoardComponent';

function App() {
  return (
    <div className="App">
      < DashBoardComponent />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/list" replace />}
        />
        <Route path="/list" element={< TodoListComponent />} />
        <Route path="/addtodo" element={< AddTodoComponent />} />
      </Routes>
    </div>
  );
}


export default App;