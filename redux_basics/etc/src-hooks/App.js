import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './Components/CakeContainer/CakeContainer';
import store from './Redux/Store';
import HooksCakeContainer from './Components/CakeContainer/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
