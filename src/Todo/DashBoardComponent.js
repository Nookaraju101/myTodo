import React from "react";
import { Fragment } from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import TodoListComponent from "./TodoListComponent";
import AddTodoComponent from "./AddTodoComponent";
import { Link } from "react-router-dom";

export function DashBoardComponent() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link"><Link to="/">Home</Link><span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/list">list</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/addtodo">AddItem</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>
            

        </Fragment>
    )
} 