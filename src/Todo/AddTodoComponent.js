import React, { Fragment } from "react";
import { AddAction } from "../Actions/TodoAction";

export default function AddTodoComponent () {
    return (
        <div>
            <h4>Add todo item</h4>
            <button onClick={AddAction}>AddItem</button>
        </div>
    );
}