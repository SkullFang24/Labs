import * as React from 'react';
import { View } from 'react-native';
import Header from './components/Header.js';
import WelcomeScreen from './components/Welcome.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <WelcomeScreen />
      <Footer />
    </View>
  );
}