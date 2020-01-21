import React from 'react';
import {addNewTask} from './addtask';
import {ToDoAppList} from './applist';

export class Todo extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <h1>Todo App</h1>
        <addNewTask />
        <ToDoAppList />
      </div>
    );
  }
}