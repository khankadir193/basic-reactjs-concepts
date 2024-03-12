import React from 'react'
import { connect } from 'react-redux';
import { increment,decrement } from '../state/action-creator/action';

const CounterRedux = ({count,increment,decrement}) => {
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state)=>({
  count:state.count,
});

const mapDispatchProps = {
  increment,
  decrement
};

export default connect(mapStateToProps,mapDispatchProps)(CounterRedux);
