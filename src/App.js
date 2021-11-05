
import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from './actions/index';

const App = ()=> {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <>
    <div className="main-div">
      <h1 className="h1">Increment/Decrement Counter</h1>
      <h3 className="h3">Using Redux</h3>

    <div className="mid-div">
      <button className="minus" title="Decrement" onClick={()=> dispatch(decNumber())}> 
        <span> - </span>  </button>

        <input className="input" type="text" value={myState}/>

      <button className="plus" title="Increment" onClick={()=> dispatch(incNumber())}> 
        <span> + </span>  </button>
        
    </div>

    </div>

    </>
  );
};

export default App;