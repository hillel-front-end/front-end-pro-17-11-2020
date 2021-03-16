import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      value: 6,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState({
      value: this.state.value + 1,
    });
  }
  
  decrease() {
    this.setState({
      value: this.state.value - 1,
    });
  }

  render() {
    const className = this.state.value > 0 ? 'green' : 'red';
    return (
      <div>
        <div className={className}>
          {this.state.value}
        </div>
        <div>
          <button
            onClick={this.increase}
            // onClick={event => {
            //   this.state.value += 1;
            //   // this.setState({
            //   //   value: this.state.value + 1,
            //   // })
            // }}
            type='button'>Increase</button>
          <button
            onClick={this.decrease}
            // onClick={event => this.setState({
            //   value: this.state.value - 1,
            // })}
            type='button'>
            Decrease
          </button>
        </div>
      </div>
    );
  };
}

// function Counter() {
//   return (
//     <div>Hello from counter</div>
//   );
// }

// const Counter = () => {
//   return (
//     <div>Hello from counter</div>
//   );
// };

export default Counter;
