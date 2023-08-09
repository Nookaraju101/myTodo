import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function TrailPostComponent() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [editId, setEditId] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setPosts(res.data);
            });
    }, [])

    const TrailPost = (e) => {
        if (editId) {
            UpdatePost(editId)
            setEditId(null);
        } else {
            axios.post("https://jsonplaceholder.typicode.com/posts", {
                title: title,
                body: body
            }).then((res) => {
                const data = [...posts]
                data.unshift(res.data);
                setPosts(data);
                console.log(data);
            });
            e.preventDefault();
            setTitle("");
            setBody("");
        }
    }

    const DeletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                const dataList = [...posts]
                let dataIndex = dataList.findIndex(x => x.id === id)
                if (dataIndex !== -1) {
                    dataList.splice(dataIndex, 1)
                }
                setPosts(dataList)
            })
    }

    const UpdatePost = (id) => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title: title,
            body: body
        })
            .then((res) => {
                const updateList = [...posts]
                let editIndex = updateList.findIndex(x => x.id === id)
                if (editIndex !== -1) {
                    // updateList.unshift(res.data);
                    updateList[editIndex].title = title;
                    updateList[editIndex].body = body;
                    setPosts(updateList);
                }
                console.log(res.data);
            });
        setTitle("");
        setBody("");
    }
    const Editpost = (post) => {
        setEditId(post.id);
        setTitle(post.title);
        setBody(post.body);
    }
    return (
        <div>
            <form className="container col-6">
                <label htmlFor="Title" className="form-label" >Title</label>
                <input type="text" name="title" className="form-control" id="exampleFormControlInput1" value={title}
                    onChange={(e) => { setTitle(e.target.value) }} />
                <label htmlFor="body" className="form-label" >body</label>
                <input type="text" name="body" className="form-control" id="exampleFormControlInput1" value={body}
                    onChange={(e) => { setBody(e.target.value) }} />
                <button type="button" disabled={(!title || !body)} onClick={TrailPost}>Submit</button>
            </form>
            {
                posts.map((post) => {
                    return (
                        <div className="row" key={post.id}>
                            <div className="col-sm-6">
                                <div className="card ">
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text ">{post.body}</p>
                                        <button type="button" className="edit btn btn-secondary" onClick={() => { Editpost(post) }} >update</button>
                                        <button type="button" className="delete btn btn-danger" onClick={() => { DeletePost(post.id) }} >Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )

}
export default TrailPostComponent;