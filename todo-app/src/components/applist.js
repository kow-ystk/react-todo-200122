import React from 'react';

export class ToDoAppList extends React.Component {
  constructor(){
    super();
  }

  render(){
    var items = this.props.tasks.map((elem, i) => {
    return <li key={i}>{elem}</li>
    });
    return(
      <ul>
        {items}
      </ul>
    );
  }
}