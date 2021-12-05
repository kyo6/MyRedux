import "./styles.css";
import Child from './Child';
import {useState, useEffect} from 'react';
import store  from "./MyStore";
let initalState = store.getState();


export default function App(props) {
  
  const [state, setState]  = useState(initalState)

  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      setState(state)
    })
  }) 
  
  console.log('inital',state);
  return (
    <div className="App">
      <Child num ={state.num} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
