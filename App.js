import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Home from './screens/home';
import { AppLoading, SplashScreen } from 'expo';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

const getFonts = () =>
  Font.loadAsync({
    'Baloo-bold': require('./assets/fonts/BalooChettan2-Bold.ttf'),
    'Baloo-regular': require('./assets/fonts/BalooChettan2-Regular.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Home />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
