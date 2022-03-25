import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(true);
  }

  handleEdit = () => {
    this.myRef.current.disabled = false;
    this.myRef.current.focus();
  };
  updateTodo = (id, value, e) => {
    if (e.which === 13) {
      this.props.editTodoList({ id, content: value });
      this.myRef.current.disabled = true;
    }
  };
  render() {
    const { item, handleCompleted, handleDelete } = this.props;
    return (
      <div
        className='flex items-center border-b border-white pt-3 pb-3'
        key={item.id}
      >
        <label
          onClick={() => handleCompleted(item.id)}
          className='border-white border-solid border w-6 h-6 rounded-radius-circle p-1  text-center bg-transparent ml-4 mr-3 flex items-center cursor-pointer '
        >
          {item.completed === true ? (
            <i className='text-white text-xs flex-1 fa-solid fa-check'></i>
          ) : (
            ""
          )}
        </label>

        <input
          className={`bg-transparent border-none  text-white p-2 w-full capitalize text-lg ${
            item.completed === true ? "line-through text-gray-600" : ""
          }`}
          type='text'
          disabled={this.myRef}
          defaultValue={item.content}
          ref={this.myRef}
          onKeyPress={(e) =>
            this.updateTodo(item.id, this.myRef.current.value, e)
          }
        />
        {item.completed === true ? (
          ""
        ) : (
          <span onClick={this.handleEdit}>
            <i className='text-blue-700 fa-solid mr-5 cursor-pointer fa-pen-to-square fa-solid fa-pen-to-square'></i>
          </span>
        )}

        <span onClick={() => handleDelete(item.id)}>
          <i className='text-white mr-5 cursor-pointer hover:text-red-600 fa-solid fa-trash-can'></i>
        </span>
      </div>
    );
  }
}

export default TodoItem;
