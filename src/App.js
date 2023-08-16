import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import TodoListComponent from './Todo/TodoListComponent';
import AddTodoComponent from "./Todo/AddTodoComponent";
import { DashBoardComponent } from './Todo/DashBoardComponent';
import TrailPostComponent from './TrailComponent';
import TrailTable from './TrailTable';


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
        <Route path="/task" element={< TrailTable />} />
      </Routes>
    </div>
  );
}


export default App;