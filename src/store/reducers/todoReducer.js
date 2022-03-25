import actionTypes from "../actions/actionTypes";

const storage = localStorage.getItem("TodoData")
  ? JSON.parse(localStorage.getItem("TodoData"))
  : [];
const initialState = {
  todoLists: storage,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TODO_LIST:
      return { ...state, todoLists: [...state.todoLists, action.payload] };
    case actionTypes.REMOVE_iTEM_TODO_LIST:
      const todoItem = state.todoLists.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        todoLists: todoItem,
      };
    case actionTypes.REMOVE_ALL_TODO_LIST:
      return {
        ...state,
        todoLists: [],
      };

    case actionTypes.TODO_COMPLETED:
      return {
        ...state,
        todoLists: state.todoLists.map((item) => {
          if (item.id === action.payload) item.completed = !item.completed;
          return item;
        }),
      };
    case actionTypes.TODO_EDIT:
      return {
        ...state,
        todoLists: state.todoLists.map((item) => {
          if (item.id === action.payload.id)
            item.content = action.payload.content;
          return item;
        }),
      };
    default:
      return { ...state };
  }
};

export default todoReducer;
