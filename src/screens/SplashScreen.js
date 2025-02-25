import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {deviceHeight, deviceWidth} from '../components/Dimensions';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="zoomInUp"
        style={styles.logo}
        source={require('../assets/icons/splashScreen.png')}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: deviceWidth,
    height: deviceHeight,
  },
});
