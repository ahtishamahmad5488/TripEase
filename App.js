import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from './src/constants/colors';
import MainNavigator from './src/routes/MainNavigator';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <MainNavigator/>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhiteHex,
  },
});
