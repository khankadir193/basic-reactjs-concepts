import React, { Component } from 'react'

class ClassComp extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      count: 0,
    }

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);

  }

  handleIncrement = (event) => {
    console.log('event..??', event);
    console.log('event.target.value', event.target.value);
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecrement = (event) => {
    console.log('event..??', event);
    this.setState({
      count: this.state.count - 1
    })
  }


  render() {
    return (
      <div>
        <h1>count Numb:{this.state.count}</h1>

        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

export default ClassComp;
