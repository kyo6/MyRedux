
const initalState = {
  num: 1
};

export function reducer(state = initalState, action) {
  console.log(action);
  switch (action.type) {
    case "add": {
      return {
        ...state,
        num: state.num + 1
      };
    }
    case "minus": {
      return {
        ...state,
        num: state.num - 1
      };
    }
    default: {
      return initalState;
    }
  }
}

function enhancer(fn, reducer) {
 return (action) => {
   const store = fn(reducer);
    store.dispatch(action);
 }
};

function createStore(reducer, enhancer) {
  let state = {};
  const listener = [];

  if(enhancer) {
    return enhancer(createStore, reducer)
  }

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    console.log(state);
    listener.map((fn) => fn());
  }

  function subscribe(fn) {
    listener.push(fn);
  }

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe
  };
}

const store = createStore(reducer);

export default store;