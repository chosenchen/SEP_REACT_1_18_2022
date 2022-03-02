import React, { useEffect } from 'react';
import { myStore } from '../../MyRedux/MyRedux';
import {useMySelector, useMyDispatch } from '../../MyReactRedux/MyReactRedux';

const CounterFn = (props) => {
  //   const [state, setState] = React.useState({
  //     title: 'Counter Fn ',
  //     counter: 0,
  //   });

  console.log('CounterFn called');
  const [title] = React.useState('Counter Fn !');
  // const [counter, setCounter] = React.useState(0);
  const [shouldAlert, setShouldAlert] = React.useState(false);
  const [_, forceUpdate] = React.useState(false);
  const counter = useMySelector(counter => counter.value);
  const dispatch = useMyDispatch();

  useEffect(() => {
    myStore.subscribe(() => {
      forceUpdate((_) => !_);
    });
  }, []);

  //DIDMOUNT
  useEffect(() => {
    console.log('didMount!');
    return () => {
      console.log('willUnMount');
    };
  }, []);

  // DidUpdate + DidMount
  useEffect(() => {
    if (shouldAlert) {
      alert(counter);
      setShouldAlert(false);
    }
  }, [shouldAlert]);

  const hanldeClick = () => {
    // setCounter((preCounter) => preCounter + 1);
    dispatch({type: 'counter/incremented'});
  };
  const handleAlert = () => {
    setTimeout(() => {
      setShouldAlert(true);
    }, 5000);
  };
  return (
    <section>
      <header>{title}</header>
      <p>Counter: {counter}</p>
      <button onClick={hanldeClick}>Add</button>
      <button onClick={handleAlert}>AlertCounterAfter5s</button>
    </section>
  );
};

export default CounterFn;
