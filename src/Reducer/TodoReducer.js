
const initialState = {
todoList: []
}

export default function reducer (state = initialState, action) {

    switch(action.type) {
        case "Add":
            let list = state?.todoList;
            if (action?.payload) {
                action.payload.id = list.length + 1;
                list = [...list, action.payload];
            }
            
            return {
                ...state,
                todoList: list
            }
        default:
            break;
    }
}