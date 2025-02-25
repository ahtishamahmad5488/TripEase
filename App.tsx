import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import MainNavigator from './src/routes/MainNavigator';
import {COLORS} from './src/constants/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigator />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.primaryWhiteHex,
  },
});
