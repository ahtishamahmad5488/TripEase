import {ImageBackground, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {ICONS} from '../constants/icons';

const Splash = ({navigation}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/icons/backgroundImage.jpg')}
      style={styles.container}
      onLoad={() => setIsImageLoaded(true)}>
      {isImageLoaded && (
        <Animatable.View animation="slideInUp" duration={3000}>
          <ICONS.splashTitle />
        </Animatable.View>
      )}
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
