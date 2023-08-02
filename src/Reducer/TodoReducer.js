
const todoList = [];

export default function reducer (state = todoList, action ) {

    switch(action.type) {
        case "Add":
            const list = state.todoList;
            if (action?.payload) {
                list.push(action.payload);
            }
            return {
                ...state,
                todoList: list
            }
        default:
            break;
    }
}