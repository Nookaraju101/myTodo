
export const AddAction = (data) => async dispatch => {
    console.log(data);
    dispatch({
        type: "Add",
        payload: data
    })
}
export const Delete = () => async dispatch => {
    dispatch({
        type: "Delete"
    })
}
export const Update = () => async dispatch => {
    dispatch({
        type: "Update"
    })
}