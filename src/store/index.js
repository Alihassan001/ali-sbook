import React from 'react';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

//Reducers
import AllReducers from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, AllReducers);

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));

const persistor = persistStore(store, {}, () => {});

export default ConfigureStore = props => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{props.children}</PersistGate>
    </Provider>
  );
};
