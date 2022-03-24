import React, { Component } from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

class Todo extends Component {
  render() {
    return (
      <div className='bg-background-desktop max-h-screen h-screen p-2 bg-cover'>
        <div className='container mx-auto max-w-screen-sm mt-20 p-5'>
          <div className='flex justify-between items-center text-white mb-10 rounded-md '>
            <h2 className='font-bold uppercase text-4xl'>Todo</h2>
            <span>
              <i className='fa-solid fa-sun text-2xl'></i>
            </span>
          </div>
          <div className='todo-form'>
            <TodoForm />
          </div>
          <div className='todo-list'>
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
