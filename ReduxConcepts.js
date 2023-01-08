// we need a store, to have a store we need redux

const redux = require("redux");
// now we can create a store

//const store = redux.createStore();
//now store must have reducers to talk to the store therefore lets define the store

const CounterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "Increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "Decrement") {
    return {
      counter: state.counter - 1,
    };
  }
};

const store = redux.createStore(CounterReducer);

// need a component who subscribe to the store

const CounterComponent = () => {
    const latestState = store.getState();
    console.log(latestState);
};

//now this component has to subscribe to the store 

store.subscribe(CounterComponent)

//lets dispatch an action to change the state of the store 

store.dispatch({type: 'Increment'});
store.dispatch({type: 'Increment'});
store.dispatch({type: 'Increment'});
store.dispatch({type: 'Decrement'});
store.dispatch({type: 'Decrement'});
store.dispatch({type: 'Decrement'});

