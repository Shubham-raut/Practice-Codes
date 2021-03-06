import React, { useState } from 'react';
import './App.css';


export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>This is counter app</h1>
      <div id='counter-value'>{counter}</div>
      <input type='text' id='asdf' />
      <button id='increment-btn' onClick={() => setCounter(counter + 1)}>Increment</button>
      <button id='decrement-btn' onClick={() => (counter > 0) && setCounter(counter - 1)}>Decrement</button>
    </>
  );
}


function App() {

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
