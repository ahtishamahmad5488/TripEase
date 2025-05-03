import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextField';
import { ICONS } from '../../constants/icons';
import { COLORS } from '../../constants/colors';

const SignUpScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ImageBackground
      source={require('../../assets/icons/backgroundImage.jpg')}
      style={styles.background}>
      <View style={styles.overlay} />
      <StatusBar barStyle="light-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>SignUp</Text>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>User name</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  value={userName}
                  onChangeText={setUserName}
                  placeholder="User name"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Email</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Password</Text>
                <View style={styles.passwordContainer}>
                  <CustomTextInput
                    placeholder="Password"
                    placeholderTextColor={COLORS.primaryLightGrayHex}
                    style={styles.TextInputField}
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity
                    style={{position: 'absolute', right: 10}}
                    onPress={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ? (
                      <ICONS.visibilityIcon />
                    ) : (
                      <ICONS.visibilityIcon />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Confirm Password</Text>
                <View style={styles.passwordContainer}>
                  <CustomTextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={COLORS.primaryLightGrayHex}
                    style={styles.TextInputField}
                    secureTextEntry={!confirmPasswordVisible}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                  />
                  <TouchableOpacity
                    style={{position: 'absolute', right: 10}}
                    onPress={() =>
                      setConfirmPasswordVisible(!confirmPasswordVisible)
                    }>
                    {confirmPasswordVisible ? (
                      <ICONS.visibilityIcon />
                    ) : (
                      <ICONS.visibilityIcon />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.loginButtonContainer}>
              <CustomButton title="SignUp" />
            </View>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>
                Already have an account! {''}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.signupLink}>Login</Text>
              </TouchableOpacity>
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
    justifyContent: 'center',
    paddingHorizontal: 18,
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
  formContainer: {
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 12,
  },
  labelText: {
    fontSize: 14,
    color: COLORS.primaryWhiteHex,
    marginBottom: 5,
    fontWeight: '700',
  },
  TextInputField: {
    backgroundColor: COLORS.primaryWhiteHexRGBA,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginButtonContainer: {
    marginTop: 30,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  },
  signupText: {
    color: COLORS.primaryWhiteHex,
    fontSize: 14,
  },
  signupLink: {
    color: COLORS.primaryLightGreenHex,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
