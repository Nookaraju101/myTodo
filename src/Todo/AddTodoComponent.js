import React, { useState } from "react";
import { AddAction, Update  } from "../Actions/TodoAction";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";


export default function AddTodoComponent() {
    const location = useLocation();

    const [title, setTitle] = useState(location?.state?.title);
    const [desc, setDesc] = useState(location?.state?.description);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  console.log('location', location);

  const isEdit = location.state;
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
        if (isEdit) {
            obj.id = location.state.id
        }
        dispatch( isEdit ? Update(obj) : AddAction(obj))
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