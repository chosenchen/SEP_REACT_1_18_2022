import React from "react";
export const MyReactReduxContext = React.createContext(null);

// function mapStateToProps(state) {
//     const { todos } = state
//     return { todoList: todos.allIds }
//   }

// export default connect(mapStateToProps)(TodoList)

export const myConnect = function (mapStateToPropsFn, mapDispatchToPropsFn) {
  return function (WrappedComponent) {
    return class NewComponent extends React.Component {
      static contextType = MyReactReduxContext;

      componentDidMount() {
        const { subscribe } = this.context;
        subscribe(() => {
          console.log("add sub", this);
          this.forceUpdate();
        });
      }

      componentWillUnmount() {
        console.log("will unmount");
      }

      render() {
        const { getState, dispatch } = this.context;
        const mapStateToProps = mapStateToPropsFn(getState());

        const mapDispatchToProps = mapDispatchToPropsFn(dispatch);
        const { children, ...rest } = this.props;

        return (
          <WrappedComponent
            {...mapStateToProps}
            {...mapDispatchToProps}
            {...rest}
          ></WrappedComponent>
        );
      }
    };
  };
};

const useForceUpdate = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, forceUdpate] = React.useState(false);
  return () => forceUdpate((pre) => !pre);
};

const useSubscribe = (store) => {
  const forceUpdate = useForceUpdate();
  React.useEffect(() => {
    store.subscribe(forceUpdate);

    return () => {
      store.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  return (
    <MyReactReduxContext.Provider value={store}>
      {children}
    </MyReactReduxContext.Provider>
  );
};
