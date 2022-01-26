import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main';

import HomeScreen from './components/Home';
import DetailsScreen from './components/Details';

const Stack = createNativeStackNavigator();

function App() {
  return (
  <Main/>
  );
}

export default App;