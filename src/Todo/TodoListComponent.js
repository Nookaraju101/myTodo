import React from "react";
import AddTodoComponent from "./AddTodoComponent";
import { Delete } from "../Actions/TodoAction";
import { Update } from "../Actions/TodoAction";

function TodoListComponent() {
    return (
        <div className="contianer col-6">
            <h2>todoList</h2>
            <div className="card border-success mb-3">
                <div className="card-header bg-transparent border-success"></div>
                <div className="card-body text-success">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <button onClick={Update}>UpdateItem</button>
                <button onClick={Delete}>DeleteItem</button>
            </div>
        </div>
    )
}

export default TodoListComponent;