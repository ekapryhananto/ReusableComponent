import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Routing from './src/navigation/Routing';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routing />
    </SafeAreaView>
  );
}
