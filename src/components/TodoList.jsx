import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoApp: [],
      isActive: false,
    };
  }
  componentDidMount() {
    // this.props.getAllTodoList();
    const { todoLists } = this.props;
    if (todoLists) {
      this.setState({
        todoApp: todoLists,
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.todoLists !== prevProps.todoLists) {
      const { todoLists } = this.props;
      this.setState({
        todoApp: todoLists,
      });
    }
  }
  handleDelete = (id) => {
    this.props.removeIdTodo(id);
  };
  handleAllDelete = (data) => {
    this.props.removeAllTodo(data);
  };
  handleCompleted = (id) => {
    console.log(id);
    this.props.todoCompleted(id);
  };
  handleAll = () => {
    this.props.getAllTodoList();
    this.setState({
      isActive: true,
    });
  };
  handleActive = () => {
    this.props.getActiveTodoList();
    this.setState({
      isActive: true,
    });
  };
  handleCompletedActive = () => {
    this.props.getCompletedTodoList();
    this.setState({
      isActive: true,
    });
  };
  render() {
    const { todoLists } = this.props;
    const { isActive } = this.state;
    return (
      <div className='todoList mt-9 rounded-md pt-1 pb-1 bg-color-main '>
        {todoLists &&
          todoLists.length > 0 &&
          todoLists.map((item) => (
            <div
              className='flex items-center border-b border-white pt-3 pb-3'
              key={item.id}
            >
              <label
                onClick={() => this.handleCompleted(item.id)}
                className='border-white border-solid border w-6 h-6 rounded-radius-circle p-1  text-center bg-transparent ml-4 mr-3 flex items-center cursor-pointer '
              >
                {item.completed === true ? (
                  <i className='text-white text-xs flex-1 fa-solid fa-check'></i>
                ) : (
                  ""
                )}
              </label>

              <input
                className={`bg-transparent border-none outline-none text-white p-2 w-full capitalize text-lg ${
                  item.completed === true ? "line-through text-gray-600" : ""
                }`}
                type='text'
                disabled
                value={item.content}
              />
              <span onClick={() => this.handleDelete(item.id)}>
                <i className='text-white mr-5 cursor-pointer hover:text-red-600 fa-solid fa-trash-can'></i>
              </span>
            </div>
          ))}
        <div className='flex flex-wrap items-center justify-between gap-2 ml-4 pt-2 pb-2'>
          <div className='text-white'>
            {todoLists && todoLists.length > 0 ? (
              <span>{todoLists.length}</span>
            ) : (
              0
            )}
            &nbsp; item
          </div>
          <div className='text-white'>
            <span
              className={`pr-2 cursor-pointer  ${
                isActive === true ? "text-blue-600" : ""
              }`}
              onClick={() => this.handleAll()}
            >
              All
            </span>
            <span
              className={`pr-2 cursor-pointer  ${
                isActive === true ? "text-blue-600" : ""
              }`}
              onClick={() => this.handleActive()}
            >
              Active
            </span>
            <span
              className='pr-2 cursor-pointer'
              onClick={() => this.handleCompletedActive()}
            >
              Completed
            </span>
          </div>
          <div
            className='text-white mr-3 cursor-pointer '
            onClick={() => this.handleAllDelete([])}
          >
            <span>Clear Completed</span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todoLists: state.todoReducer.todoLists,
});

const mapDispatchToProps = (dispatch) => ({
  removeIdTodo: (id) => dispatch(actions.removeIdTodo(id)),
  removeAllTodo: (data) => dispatch(actions.removeAllTodo(data)),
  todoCompleted: (id) => dispatch(actions.todoCompleted(id)),
  getAllTodoList: () => dispatch(actions.getAllTodoList()),
  getActiveTodoList: () => dispatch(actions.getActiveTodoList()),
  getCompletedTodoList: () => dispatch(actions.getCompletedTodoList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
