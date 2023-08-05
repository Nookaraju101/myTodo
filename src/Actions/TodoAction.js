
export const AddAction = (data) => async dispatch => {
    console.log(data);
    dispatch({
        type: "Add",
        payload: data
    })
}
export const Update = (data) => async dispatch => {
    console.log(data);
    dispatch({
        type: "Update",
        payload: data
    })
}
export const Delete = (del) => async dispatch => {
    dispatch({
        type: "Delete",
        payload: del
    })
}