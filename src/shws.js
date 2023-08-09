import React, { useEffect, useState } from "react";
import axios from "axios";

// component for trail & practice

function AxiosApiCall() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [editId, setEditId] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setPosts(res.data);
            })
    }, [])

    const handleChange = (e) => {
        if (editId) {
            UpdateItem(editId)
            setEditId(null);
        } else {
            axios.post("https://jsonplaceholder.typicode.com/posts", {
                title: title,
                body: body
            })
                .then((res) => {
                    const rajList = [...posts];
                    rajList.unshift(rs.data)
                    setPosts(rajList);
                });
            e.preventDefault();
            setTitle("");
            setBody("");
        }
    }
    const deleteItem = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                const someData = [...posts]
                let someIndex = someData.findIndex(x => x.id === id)
                if (someIndex !== -1) {
                    someData.splice(someIndex, 1);
                }
                setPosts(someData);
            })
    }
    const UpdateItem = (id) => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title: title,
            body: body,
        })
            .then((res) => {
                const editList = [...posts]
                let editIndex = editList.findIndex(x => x.id === id)
                if (editIndex = -1) {
                    editList[editIndex].title = title;
                    editList[editIndex].body = body;
                }
            });
            setTitle("");
            setBody("");
    }
    const editItem = (post) => {
        setEditId(post.id);
        setTitle(post.title);
        setBody(post.body);
    }
    return (
        <div>
            <form>
                <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <input type="text" name="body" value={body} onChange={(e) => { setBody(e.target.value) }} />
                <button type="button" disabled={(!title || !body)} onClick={handleChange}>setdata</button>
            </form>
            {
                posts.map((post) => {
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button type="button" onClick={() => { editItem(post) }} >delete</button>
                        <button type="button" onClick={() => { deleteItem(post.id) }} >delete</button>
                    </div>
                })
            }
        </div>
    )


}

export default AxiosApiCall;