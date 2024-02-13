import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';  // Import Provider from react-redux
import {store, persistor} from '../src/redux/store'; 

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
       <App />
  </PersistGate> 
  </Provider>
  </Router>,
  document.getElementById('root')
);


