import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import TodoListComponent from './Todo/TodoListComponent';
import AddTodoComponent from "./Todo/AddTodoComponent";
import { DashBoardComponent } from './Todo/DashBoardComponent';
import axios from 'axios';
import TrailPostComponent from './TrailComponent';
import AxiosApiCall from './shws';

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
        <Route path="/post" element={< TrailPostComponent />} />
        <Route path="/items" element={< AxiosApiCall />} />
        
      </Routes>
    </div>
  );
}


export default App;