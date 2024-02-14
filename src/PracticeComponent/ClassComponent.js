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
    // this.setState({
    //   count: this.state.count + 1
    // });
    // this is another way using async
    this.setState(prevState =>({
      count:prevState.count+1
    }));
  }

  handleDecrement = (event) => {
    console.log('event..??', event);
    // this.setState({
    //   count: this.state.count - 1
    // })
    // another ways...
    this.setState(prevState =>({
      count:prevState.count-1
    }));
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
