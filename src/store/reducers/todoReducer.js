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
    case actionTypes.GET_ALL_TODO_LIST:
      return { ...state, todoLists: action.payload };

    case actionTypes.REMOVE_iTEM_TODO_LIST:
      const todoItem = state.todoLists.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        todoLists: todoItem,
      };
    case actionTypes.GET_ALL_TODO_LIST:
      state.todoLists = action.payload;
      return {
        ...state,
      };
    case actionTypes.TODO_ACTIVE:
      state.todoLists = action.payload;
      return {
        ...state,
      };
    case actionTypes.TODO_COMPLETED_ACTIVE:
      state.todoLists = action.payload;
      return {
        ...state,
      };
    case actionTypes.TODO_COMPLETED:
      return {
        ...state,
        todoLists: state.todoLists.map((item) => {
          if (item.id === action.payload) item.completed = !item.completed;
          return item;
        }),
      };
    default:
      return { ...state };
  }
};

export default todoReducer;
