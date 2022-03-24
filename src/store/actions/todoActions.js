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

export const removeAllTodo = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_ALL_TODO_LIST,
    payload: data,
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

export const getAllTodoList = () => (dispatch) => {
  try {
    let getAll = JSON.parse(localStorage.getItem("TodoData"));

    dispatch({
      type: actionTypes.GET_ALL_TODO_LIST,
      payload: getAll,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getActiveTodoList = () => (dispatch) => {
  try {
    let getAll = JSON.parse(localStorage.getItem("TodoData"));
    let active = getAll.filter((item) => item.completed === false);
    dispatch({
      type: actionTypes.TODO_ACTIVE,
      payload: active,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompletedTodoList = () => (dispatch) => {
  try {
    let getAll = JSON.parse(localStorage.getItem("TodoData"));
    let active = getAll.filter((item) => item.completed === true);
    dispatch({
      type: actionTypes.TODO_COMPLETED_ACTIVE,
      payload: active,
    });
  } catch (error) {
    console.log(error);
  }
};
