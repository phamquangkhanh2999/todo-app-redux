import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "all",
    };
  }

  handleDelete = (id) => {
    this.props.removeIdTodo(id);
  };
  handleAllDelete = () => {
    this.props.removeAllTodo();
  };
  handleCompleted = (id) => {
    this.props.todoCompleted(id);
  };

  render() {
    const { todoLists } = this.props;
    const { isActive } = this.state;
    return (
      <div className='todoList mt-9 rounded-md pt-1 pb-1 bg-color-main '>
        {todoLists && todoLists.length > 0 && isActive === "all"
          ? todoLists.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                handleCompleted={this.handleCompleted}
                handleDelete={this.handleDelete}
                editTodoList={this.props.editTodoList}
              />
            ))
          : null}
        {todoLists && todoLists.length > 0 && isActive === "active"
          ? todoLists.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    handleCompleted={this.handleCompleted}
                    handleDelete={this.handleDelete}
                    editTodoList={this.props.editTodoList}
                  />
                )
              );
            })
          : null}

        {todoLists && todoLists.length > 0 && isActive === "completed"
          ? todoLists.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    handleCompleted={this.handleCompleted}
                    handleDelete={this.handleDelete}
                    editTodoList={this.props.editTodoList}
                  />
                )
              );
            })
          : null}

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
                isActive === "all" ? "text-blue-600" : ""
              }`}
              onClick={() => this.setState({ isActive: "all" })}
            >
              All
            </span>
            <span
              className={`pr-2 cursor-pointer  ${
                isActive === "active" ? "text-blue-600" : ""
              }`}
              onClick={() => this.setState({ isActive: "active" })}
            >
              Active
            </span>
            <span
              className={`pr-2 cursor-pointer  ${
                isActive === "completed" ? "text-blue-600" : ""
              }`}
              onClick={() => this.setState({ isActive: "completed" })}
            >
              Completed
            </span>
          </div>
          <div
            className='text-white mr-3 cursor-pointer '
            onClick={() => this.handleAllDelete()}
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
  removeAllTodo: () => dispatch(actions.removeAllTodo()),
  todoCompleted: (id) => dispatch(actions.todoCompleted(id)),
  editTodoList: (data) => dispatch(actions.editTodoList(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
