import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { v4 as uuidv4 } from "uuid";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };
  handleCreateTodo = (e) => {
    e.preventDefault();

    const item = {
      id: uuidv4(),
      content: this.state.value,
      completed: false,
    };
    this.props.createTodoList(item);

    this.setState({
      value: "",
    });
  };

  handleAddTod = () => {
    const item = {
      id: uuidv4(),
      content: this.state.value,
      completed: false,
    };
    this.props.createTodoList(item);

    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div className='todoForm'>
        <form
          className='rounded-md pl-1 pt-3 pb-3 bg-color-main flex items-center'
          onSubmit={this.handleCreateTodo}
        >
          <label
            className='border-white border-solid border w-6 h-6 rounded-radius-circle p-1 text-center bg-transparent ml-3 mr-3 flex items-center cursor-pointer hover:bg-slate-500'
            onClick={() => this.handleAddTod()}
          >
            <i className='text-white fa-solid fa-plus text-xs flex-1 '></i>
          </label>
          <input
            className='bg-transparent border-none outline-none text-white p-2 w-full '
            value={this.state.value}
            onChange={(e) => this.handleChangeInput(e)}
            type='text'
            placeholder='Create a new todo...'
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  createTodoList: (data) => dispatch(actions.createTodoList(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
