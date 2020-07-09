import React, {useState} from 'react';

import './App.css';
import Parent from './Parent';
import CounterContext from './CounterCiontext';


function App() {
  let countState = useState(0); //count

  return (

    <CounterContext.Provider value ={countState}>
        <div>
        <Parent name="unais"/>
        </div>
    </CounterContext.Provider>
      
  );
}

export default App;
