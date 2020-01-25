import React from 'react';
import {AddNewTask} from './addtask';
import {ToDoAppList} from './applist';

export class Todo extends React.Component {
  constructor(props){
    super();
    this.state = {tasks: props.tasks};
    this.updateList = this.updateList.bind(this);
  }

  // リストの更新
  updateList(text) {
    var updatedTasks = this.state.tasks;
    updatedTasks.push(text);
    this.setState({tasks: updatedTasks}); // stateを更新
  }

  render(){
    return(
      <div>
        <h1>Todo App</h1>
        <AddNewTask updateList={this.updateList} />
        <ToDoAppList tasks={this.state.tasks} />
      </div>
    );
  }
}