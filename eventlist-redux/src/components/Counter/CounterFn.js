import React, { useEffect } from 'react';
import { myStore } from '../../MyRedux/Myredux'

const CounterFn = (props) => {
  //   const [state, setState] = React.useState({
  //     title: 'Counter Fn ',
  //     counter: 0,
  //   });

  console.log('CounterFn called');
  const [title] = React.useState('Counter Fn !');
  const [counter, setCounter] = React.useState(0);
  const [shouldAlert, setShouldAlert] = React.useState(false);
  const [_, forceUpdate] = React.useState(false);

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
    setCounter((preCounter) => preCounter + 1);
  };
  const handleAlert = () => {
    setTimeout(() => {
      setShouldAlert(true);
    }, 5000);
  };
  return (
    <section>
      <header>{title}</header>
      <p>Counter: {myStore.getState().value}</p>
      <button onClick={hanldeClick}>Add</button>
      <button onClick={handleAlert}>AlertCounterAfter5s</button>
    </section>
  );
};

export default CounterFn;