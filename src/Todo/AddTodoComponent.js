import React, { Fragment, useState } from "react";
import { AddAction } from "../Actions/TodoAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";


export default function AddTodoComponent() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [state, setState] = useState({ title: '', desc: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const handleChange = (e) => {
    //     const key  = e.target.name;
    //     const value  = e.target.value;
    //     const data = {...state};
    //     data[key]= value;
    //     setState(data);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, desc);
        let obj = {
            title: title,
            description: desc
        }
        dispatch(AddAction(obj))
        navigate('/list')
    }

    return (
        <div className="container col-6">
            <h4>Add todo item</h4>
            <div className="mb-3">
                <label htmlFor="Title" className="form-label">Title</label>
                <input type="text" name="title" className="form-control" id="exampleFormControlInput1" value={title}
                    onChange={(e) => { setTitle(e.target.value) }} placeholder="Enter title" />
            </div>
            <div className="mb-3">
                <label htmlFor="Description" className="form-label">Description</label>
                <textarea className="form-control" name="description" id="exampleFormControlTextarea1" value={desc}
                    onChange={(e) => { setDesc(e.target.value) }} placeholder="Describe your todoitem" rows="3"></textarea>
            </div>
            <button type="button" className=" btn btn-primary" onClick={handleSubmit} >Submit</button>
        </div>
    );
}