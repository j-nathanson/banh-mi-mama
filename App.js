import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './components/Main';
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </NavigationContainer>

  );
}

export default App;