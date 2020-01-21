import React from 'react';

export class ToDoAppList extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    );
  }
}