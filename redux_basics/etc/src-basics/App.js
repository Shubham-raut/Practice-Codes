import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './Components/CakeContainer/CakeContainer';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
