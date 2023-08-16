import React, { useEffect, useState } from "react";
import axios from "axios";

function TrailTable() {
    const [item, setItem] = useState([]);
    const [title, setTitle] = useState();
    const [editId, setEditId] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                setItem(res.data);
            });
    }, []);
    console.log(item);
    const SubmitPost = (e) => {
        if (editId) {
            UpdatePost(editId);
            setEditId(null);
        } else {
            axios.post("https://jsonplaceholder.typicode.com/todos", {
                title: title
            })
                .then((res) => {
                    const list = [...item];
                    list.unshift(res.data);
                    setItem(list);
                });
            e.preventDefault();
            setTitle("");
        }
    }
    const EditPost = (product) => {
        setEditId(product.id);
        setTitle(product.title)
    }
    const UpdatePost = (id) => {
        axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            title: title
        })
            .then((res) => {
                let EditList = [...item];
                let editIndex = EditList.findIndex(x => x.id === id)
                if (editIndex !== -1) {
                    EditList[editIndex].title = title;
                }
                setItem(EditList);
            });
        setTitle("");
    }

    const DeletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) => {
                let delList = [...item];
                let delIndex = delList.findIndex(x => x.id === id)
                if (delIndex !== -1) {
                    delList.splice(delIndex, 1);
                }
                setItem(delList);
            })
    }
    return (
        <div>
            <form className="container col-6">
                <div className="form-group">
                    <label for="exampleInputEmail1">todoItem</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value={title}
                        onChange={(e) => { setTitle(e.target.value) }} placeholder="Enter todoItem" />
                    <button type="submit" className="btn btn-primary" onClick={SubmitPost} disabled={(!title)} >Submit</button>
                </div>
            </form>
            <div className="todo">
                {
                    item.map((product) => {
                        return (
                            <div className="card  todo-item ">
                                <div className="card-body">
                                    <h5 className="card-title">todo item: {product.id}</h5>
                                    <p className="card-text">{product.title}</p>
                                    <p className="card-text">completed :<span>{product.completed}</span></p>
                                    <button type="button" className="edit btn btn-secondary" onClick={() => EditPost(product)} >update</button>
                                    <button type="button" className="delete btn btn-danger" onClick={() => DeletePost(product.id)}  >Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </div >
    )

}
export default TrailTable;