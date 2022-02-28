import React from 'react';
export const MyReactReduxContext = React.createContext(null);

// function mapStateToProps(state) {
//     const { todos } = state
//     return { todoList: todos.allIds }
//   }

// export default connect(mapStateToProps)(TodoList)

export const myConnect = function (mapStateToPropsFn) {
  return function (WrappedComponent) {
    return class NewComponent extends React.Component {
      static contextType = MyReactReduxContext;
      render() {
        console.log('test', this.context);
        return <WrappedComponent></WrappedComponent>;
      }
    };
  };
};

const useForceUpdate = () => {
  const [_, forceUdpate] = React.useState(false);
  return () => forceUdpate((pre) => !pre);
};

const useSubscribe = (store) => {
  const forceUpdate = useForceUpdate();
  React.useEffect(() => {
    store.subscribe(forceUpdate);
  }, []);
};

export const useMySelector = (selectFn) => {
  const store = React.useContext(MyReactReduxContext);
  useSubscribe(store);
  return selectFn(store.getState());
};

export const useMyDispatch = () => {
  const store = React.useContext(MyReactReduxContext);
  useSubscribe(store);
  return store.dispatch;
};

export const MyProvider = ({ children, store }) => {
  console.log('render provider');
  return (
    <MyReactReduxContext.Provider value={store}>
      {children}
    </MyReactReduxContext.Provider>
  );
};
