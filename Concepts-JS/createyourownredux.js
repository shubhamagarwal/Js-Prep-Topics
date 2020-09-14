/*

https://codepen.io/Shubham150/pen/ZEbwmWY
https://medium.com/@patrykandrzejewski/how-to-create-your-own-redux-9f89a80875e5 https://blog.jakoblind.no/learn-react-redux-by-coding-the-connect-function-yourself/

*/

import React from "react";

const connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
  class Connect extends React.Component {
    constructor(props) {
      super(props);

      this.state = props.store.getState();
    }

    componentDidMount() {
      this.props.store.subscribe((state) => {
        this.setState(state);
      });
    }

    render() {
      const { store } = this.props;

      return (
        <Component
          {...this.props}
          {...mapStateToProps(store.getState())}
          {...mapDispatchToProps(store.dispatch)}
        />
      );
    }
  }

  return (props) => (
    <ReduxContext.Consumer>
      {(store) => <Connect {...props} store={store} />}
    </ReduxContext.Consumer>
  );
};

const ReduxContext = React.createContext("redux");

const Provider = ({ store, children }) => (
  <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);

const combineReducers = (reducers) => {
  const nextState = {};
  const reducerFunctions = {};
  const reducersKeys = Object.keys(reducers);
  reducersKeys.forEach((reducerKey) => {
    if (typeof reducers[reducerKey] === "function") {
      reducerFunctions[reducerKey] = reducers[reducerKey];
    }
  });
  const reducerFunctionsKeys = Object.keys(reducerFunctions);

  return (state = {}, action) => {
    reducerFunctionsKeys.forEach((reducerKey) => {
      const reducer = reducerFunctions[reducerKey];
      nextState[reducerKey] = reducer(state[reducerKey], action);
    });

    return nextState;
  };
};

const createStore = (rootReducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = rootReducer(state, action);
    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

export { createStore, combineReducers, connect, Provider };
