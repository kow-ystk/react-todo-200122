import React from 'react';
import {AddNewTask} from './addtask';
import {ToDoAppList} from './applist';

export class Todo extends React.Component {
  constructor(props){
    super();
    this.state = {tasks: props.tasksList};
  }

  render(){
    return(
      <div>
        <h1>Todo App</h1>
        <AddNewTask />
        <ToDoAppList tasks={this.state.tasks} />
      </div>
    );
  }
}