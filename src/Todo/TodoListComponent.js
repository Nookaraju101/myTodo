import React, { Fragment } from "react";
import { Delete } from "../Actions/TodoAction";
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



function TodoListComponent(props) {
    const rows = useSelector((state => state?.todoList))
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'title ', width: 130 },
        { field: 'description', headerName: 'description', width: 200 },
        {
            field: 'edit',
            headerName: ' Edit / Delete ',
            type: 'button',
            width: 250,
            renderCell: (data) => {
                return (
                    <Fragment>
                        <Button variant="contained" onClick={(e) => { handleClick(e, data.row) }} startIcon={<Edit />}>Edit</Button>,
                        <Button variant="outlined" onClick={(e) => { onDeleteTodo(e, data.row)}} endIcon={<DeleteIcon />}>Delete</Button>

                    </Fragment>
                )
            }
        },
    ];
    const onDeleteTodo = (e, data) => {
        dispatch(Delete(data))
    }
    const handleClick = (e, data) => {
        console.log(data);
        e.preventDefault();
        navigate("/addtodo", {
            state: data
        })
    }
    return (
        <Fragment>
            <div className="contianer col-6 cent">
                <h2>todoList</h2>
                <p>todoitems</p>
                <DataGrid
                    rows={rows?.length ? rows : []}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },

                    }}
                    pageSizeOptions={[5, 10]}
                />
                <div className="button">
                    < Stack direction="row" >
                        <button type="button" className="btn btn-light"><Link to="/addtodo">Add</Link></button>


                    </Stack >
                </div>
            </div>
        </Fragment>
    )
}


export default TodoListComponent;