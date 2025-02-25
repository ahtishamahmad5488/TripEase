import React from 'react';
import {TouchableOpacity, Text, StyleSheet, StatusBar} from 'react-native';
import {COLORS} from '../constants/colors';

const CustomButton = ({title, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primaryLightGreenHex,
    padding: 12,
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19.5,
    textAlign: 'center',
  },
});

export default CustomButton;
