import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  ScrollView,
} from 'react-native';

import CustomTextInput from '../../components/CustomTextField';
import CustomButton from '../../components/CustomButton';
import {COLORS} from '../../constants/colors';

const NewPasswordScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    if (!phone || !newPassword || !confirmPassword) {
      alert('Please fill all fields');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Here you would call your backend/API to update password
    alert('Password reset successfully');
    navigation.navigate('LoginScreen');
  };

  return (
    <ImageBackground
      source={require('../../assets/icons/backgroundImage.jpg')}
      style={styles.background}>
      <View style={styles.overlay} />
      <StatusBar barStyle="light-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Reset Password</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Phone Number</Text>
              <CustomTextInput
                style={styles.TextInputField}
                placeholder="Enter phone number"
                placeholderTextColor={COLORS.primaryLightGrayHex}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>New Password</Text>
              <CustomTextInput
                style={styles.TextInputField}
                placeholder="Enter new password"
                placeholderTextColor={COLORS.primaryLightGrayHex}
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Confirm Password</Text>
              <CustomTextInput
                style={styles.TextInputField}
                placeholder="Confirm new password"
                placeholderTextColor={COLORS.primaryLightGrayHex}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>

            <View style={styles.buttonContainer}>
              <CustomButton title="Reset Password" onPress={handleReset} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primaryWhiteHex,
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 18,
  },
  labelText: {
    fontSize: 14,
    color: COLORS.primaryWhiteHex,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  TextInputField: {
    backgroundColor: COLORS.primaryWhiteHexRGBA,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default NewPasswordScreen;
