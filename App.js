import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/router/Router';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
    <Router/>
    </Provider>
  );
}

