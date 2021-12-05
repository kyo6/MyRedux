import store from './MyStore';

function Child({num}) {
  const add = () => {
    store.dispatch({ type: "add" });
  };
  const add1 = () => {
     console.log('1111');
     store.dispatch(
       (dispatch) => {
        setTimeout(() => {
          dispatch({ type: "add" }) 
        }, 100)
       }
     );
    
  };
  const minus = () => {
    store.dispatch({ type: "minus" });
  };
  const state = store.getState();
  return (
     <div>
        <button onClick={add1}>+</button>
        <span className="result">{state.num}</span>
        <button onClick={minus}>-</button>
      </div>
  )
}

export default Child;