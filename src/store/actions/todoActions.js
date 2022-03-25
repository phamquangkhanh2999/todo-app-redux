import actionTypes from "./actionTypes";

export const createTodoList = (data) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.CREATE_TODO_LIST,
    payload: data,
  });
  localStorage.setItem(
    "TodoData",
    JSON.stringify(getState().todoReducer.todoLists)
  );
};

export const removeIdTodo = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_iTEM_TODO_LIST,
    payload: id,
  });
  localStorage.setItem(
    "TodoData",
    JSON.stringify(getState().todoReducer.todoLists)
  );
};

export const removeAllTodo = () => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_ALL_TODO_LIST,
  });
  localStorage.removeItem("TodoData");
};

export const todoCompleted = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.TODO_COMPLETED,
    payload: id,
  });
  localStorage.setItem(
    "TodoData",
    JSON.stringify(getState().todoReducer.todoLists)
  );
};

export const editTodoList = (data) => (dispatch, getState) => {
  console.log(data);
  dispatch({
    type: actionTypes.TODO_EDIT,
    payload: data,
  });
  localStorage.setItem(
    "TodoData",
    JSON.stringify(getState().todoReducer.todoLists)
  );
};
