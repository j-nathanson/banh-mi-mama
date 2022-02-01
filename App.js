import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './components/Main';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import AppLoading from 'expo-app-loading';
import { useFonts, LobsterTwo_400Regular_Italic } from '@expo-google-fonts/lobster-two';
import { DMSans_400Regular } from '@expo-google-fonts/dm-sans'


function App() {
  let [fontsLoaded] = useFonts({
    LobsterTwo_400Regular_Italic,
    DMSans_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </NavigationContainer>

  );
}

export default App;