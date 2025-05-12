import React, {useEffect, useState} from 'react';
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
import {COLORS} from '../../constants/colors';
import {ICONS} from '../../constants/icons';
import {useAuth} from '../../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {role, login, isAuthenticated} = useAuth();

  // const handleLogin = async () => {
  //   try {
  //     if (!role) {
  //       navigation.navigate("AdminScreen")
  //       return;
  //     }
  //     await login(role); // Wait for login to complete
  //     console.log(role);

  //   //   if (role === 'customer') {
  //   //     navigation.navigate('HomeScreen');
  //   //   } else if (role === 'transporter') {
  //   //     navigation.navigate('TransporterScreen');
  //   //   } else {
  //   //     navigation.navigate('AdminDashBoardScreen');
  //   //   }
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     alert('Login failed. Please try again.');
  //   }
  // };

  return (
    <ImageBackground
      source={require('../../assets/icons/backgroundImage.jpg')}
      e
      style={styles.background}>
      <View style={styles.overlay} />
      <StatusBar barStyle="light-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Login</Text>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Email</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  placeholder="Email"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                  value={email}
                  onChangeText={setEmail}
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
            </View>

            <View style={styles.forgotPassword}>
              <TouchableOpacity
                onPress={() => navigation.push('ForgotPasswordScreen')}>
                <Text style={styles.forgotText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginButtonContainer}>
              <CustomButton title="Login" 
              onPress={()=> navigation.navigate("HomeScreen")} />
            </View>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.signupLink}> Signup</Text>
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
    marginTop: 30,
  },
  inputContainer: {
    marginTop: 12,
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotText: {
    color: COLORS.primaryWhiteHex,
    fontSize: 14,
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

export default LoginScreen;
