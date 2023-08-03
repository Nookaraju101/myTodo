import React, { Fragment } from "react";
import AddTodoComponent from "./AddTodoComponent";
import { Delete } from "../Actions/TodoAction";
import { Update } from "../Actions/TodoAction";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styled from "styled-components";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const change = () => < Stack direction="row" >
    <Button variant="contained" startIcon={<Edit />}>
        Edit
    </Button>
    <Button variant="outlined" endIcon={<DeleteIcon />}>
        Delete
    </Button>
</Stack >;
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'title ', width: 130 },
    { field: 'description', headerName: 'description', width: 200 },
    {
        field: 'edit',
        headerName: 'Edit/Delete',
        type: 'button',
        width: 150,
        valueGetter: (params) => {
            return <button>Test</button>;
        }
    },
];

function TodoListComponent() {

    const rows = useSelector((state => state?.todoList))
    return (
        <Fragment>
            <div className="contianer col-6 cent">
                <h2>todoList</h2>
                <p>todoitems</p>
                <DataGrid
                    rows={rows?.length ? rows:[]}
                    columns= { columns }
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },

                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
                <div className="button">
                    < Stack direction="row" >
                        <button type="button" className="btn btn-light"><Link to="/addtodo">Add</Link></button>
                        <Button variant="contained" startIcon={<Edit />}>
                            Edit
                        </Button>
                        <Button variant="outlined" endIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                    </Stack >
                </div>
                {/* <div className="card border-success mb-3">
                <div className="card-header bg-transparent border-success"></div>
                <div className="card-body text-success">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <button className=" btn btn-primary btn-left" onClick={Update}>UpdateItem</button>
                <button className="btn btn-danger btn-right" onClick={Delete}>DeleteItem</button>
            </div> */}
            </div>
        </Fragment>
    )
}

export default TodoListComponent;