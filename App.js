import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import persist from './src/config/store'
import Routes from './src/navigation';

const persistStore = persist();

export default function App() {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}