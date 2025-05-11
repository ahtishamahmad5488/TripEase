import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import CustomButton from '../../components/CustomButton';

import {COLORS} from '../../constants/colors';
import {deviceHeight, deviceWidth} from '../../components/Dimensions';
import CustomTextInput from '../../components/CustomTextField';

const RegistrationScreen = ({navigation}) => {
  const [driverName, setDriverName] = useState('');
  const [driverContactNo, setDriverContactNo] = useState('');
  const [cnic, setCnic] = useState('');
  const [licenseNo, setLicenseNo] = useState('');
  const [motorType, setMotorType] = useState('');
  const [capacity, setCapacity] = useState('');

  return (
    <ImageBackground
      source={require('../../assets/icons/backgroundImage.jpg')}
      style={styles.background}>
      <View style={styles.overlay} />
      <StatusBar barStyle="light-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Vehicle Registration</Text>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Driver Name</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  placeholder="Driver Name"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                  value={driverName}
                  onChangeText={setDriverName}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Driver Contact No.</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  placeholder="Driver Contact No"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                  value={driverContactNo}
                  onChangeText={setDriverContactNo}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>CNIC</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  placeholder="CNIC"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                  value={cnic}
                  onChangeText={setCnic}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>License No.</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  placeholder="License No"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                  value={licenseNo}
                  onChangeText={setLicenseNo}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Motor Type</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  placeholder="Motor Type"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                  value={motorType}
                  onChangeText={setMotorType}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Capacity</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  placeholder="Capacity"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                  value={capacity}
                  onChangeText={setCapacity}
                />
              </View>
            </View>
            <View style={styles.loginButtonContainer}>
              <CustomButton
                title="Register"
                onPress={() => navigation.navigate('TransporterScreen')}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: deviceWidth,
    height: deviceHeight,
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
    color: '#fff',
    marginBottom: 5,
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
});

export default RegistrationScreen;
