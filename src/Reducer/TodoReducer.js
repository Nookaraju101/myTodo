
const initialState = {
    todoList: []
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case "Add":
            let list = [...state?.todoList];
            if (action?.payload) {
                action.payload.id = list.length + 1;
                list = [...list, action.payload];
            }

            return {
                ...state,
                todoList: list
            }
        case "Update":
            let editList = [...state?.todoList];
            let index = editList.findIndex(x => x.id === action.payload.id);
            console.log(index);
            if (index !== -1) {
                editList[index] = action.payload
            }
            return {
                ...state,
                todoList: editList
            }
        case "Delete":
            let delList = [...state?.todoList]
            console.log(delList);
            let delIndex = delList.findIndex(x => x.id === action.payload.id);
            console.log(delIndex);
            if (delIndex !== -1) {
                delList.splice(delIndex, 1);
            }
            return {
                ...state,
                todoList: delList
            }
        default:
            break;
    }
}