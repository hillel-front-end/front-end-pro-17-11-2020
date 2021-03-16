import { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    console.log('Mounting');
  }

  componentDidMount() {
    console.log('Mounted');
  }

  componentWillUnmount() {
    console.log('Unmounted');
  }

  render() {
    const props = this.props;
    return (
      <li>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    );
  }
}

// function TodoItem({ title, description }) {
//   return (
//       <li>
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </li>
//   );
// }

export default TodoItem;
