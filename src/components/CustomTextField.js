import React, {forwardRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';

const CustomTextInput = forwardRef(
  (
    {
      value,
      onChangeText,
      placeholder,
      secureTextEntry,
      keyboardType,
      style,
      containerStyle,
      placeholderTextColor,
      maxLength,
      onKeyPress,
      multiline,
    },
    ref,
  ) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onKeyPress={onKeyPress}
          style={[styles.input, style]}
          ref={ref}
          multiline={multiline}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    textAlign: 'left',
    color: COLORS.primaryBlackHex,
  },
});

export default CustomTextInput;
