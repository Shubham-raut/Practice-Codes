import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import CakeContainer from './Components/CakeContainer/CakeContainer';
import { store, persistor } from './Redux/Store';
import HooksCakeContainer from './Components/CakeContainer/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer/IceCreamContainer';
import NewCakeContainer from './Components/CakeContainer/NewCakeContainer';
import ItemContainer from './Components/ItemContainer/ItemContainer';
import UserContainer from './Components/UserContainer/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <UserContainer />
          {/* <ItemContainer cake />
        <ItemContainer /> */}
          <CakeContainer />
          {/* <HooksCakeContainer /> */}
          <IceCreamContainer />
          {/* <NewCakeContainer /> */}
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
