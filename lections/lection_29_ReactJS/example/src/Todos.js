import { Component } from "react";
import TodoItem from './TodoItem';

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          title: 'Learn React',
          description: 'https://reactjs.org/',
        },
        {
          title: 'Learn Webpack',
          description: 'https://webpack.org',
        },
      ],
    };
  }

  addTodo() {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          title: 'Learn JS',
          description: '',
        },
      ],
    });
  }

  removeTodo() {
    this.setState({
      todos: this.state.todos.slice(0, 1),
    });
  }

  render() {
    const item = <TodoItem title={'Learn React'} description={'http;sss'} />;
    return (
      <div>
        <button
          type='button'
          onClick={() => this.addTodo()}>Add todo</button>
        <button
          type='button'
          onClick={() => this.removeTodo()}>Remove todo</button>
        <ul>
          {/* {[
            // item,
            <TodoItem title={'Learn React'} description={'http;sss'} />,
            <TodoItem title={'Learn Webpack'} description={'http;sss'} />
          ]} */}
          {this.state.todos.map(todo => {
            return (
              <TodoItem title={todo.title} description={todo.description} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todos;
