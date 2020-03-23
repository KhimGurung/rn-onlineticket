import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './redux/store';
import LoginStack from './navigation/loginStack';

export default function App() {
  return (
    <Provider store={store} >
      <LoginStack />
    </Provider>
  );
}
