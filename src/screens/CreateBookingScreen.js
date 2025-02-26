import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import CustomTextInput from '../components/CustomTextField';
import CustomButton from '../components/CustomButton';
import {COLORS} from '../constants/colors';
import {ICONS} from '../constants/icons';

const CreateBookingScreen = ({navigation}) => {
  const [driverName, setDriverName] = useState('');
  const [driverContactNo, setDriverContactNo] = useState('');
  const [cnic, setCnic] = useState('');
  const [licenseNo, setLicenseNo] = useState('');
  const [motorType, setMotorType] = useState('');
  const [capacity, setCapacity] = useState('');

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}>
            <ICONS.titleIcon style={styles.headerTitleIcon} />
            <Text style={styles.title}>Booking</Text>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Customer Name</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  placeholder="Customer Name"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                  value={driverName}
                  onChangeText={setDriverName}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Mobile Number</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  placeholder="Mobile Number"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                  value={driverContactNo}
                  onChangeText={setDriverContactNo}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Customer CNIC</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  placeholder="Customer CNIC"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                  value={cnic}
                  onChangeText={setCnic}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Number of Member’s</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  placeholder="Number of Member’s"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                  value={licenseNo}
                  onChangeText={setLicenseNo}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Email Address</Text>
                <CustomTextInput
                  style={styles.TextInputField}
                  placeholder="Email Address"
                  placeholderTextColor={COLORS.primaryLightGrayHex}
                  value={motorType}
                  onChangeText={setMotorType}
                />
              </View>
            </View>
            <View style={styles.loginButtonContainer}>
              <CustomButton
                title="Confirm Booking"
                onPress={() => navigation.push('PaymentScreen')}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.primaryWhiteHex,
  },
  container: {
    flex: 1,
    paddingHorizontal: 18,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerTitleIcon: {
    marginTop: 30,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primaryBlackHex,
    marginTop: 20,
  },
  formContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  inputContainer: {
    marginTop: 12,
  },
  labelText: {
    fontSize: 14,
    color: COLORS.primaryBlackHex,
    marginBottom: 5,
    fontWeight: '600',
  },
  TextInputField: {
    backgroundColor: '#C4C4C4',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 0,
  },
  loginButtonContainer: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
});

export default CreateBookingScreen;
