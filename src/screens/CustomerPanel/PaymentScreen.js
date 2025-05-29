import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import {ICONS} from '../../constants/icons';
import {COLORS} from '../../constants/colors';
import CustomTextInput from '../../components/CustomTextField';
import CustomButton from '../../components/CustomButton';

const PaymentScreen = ({navigation}) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <ICONS.titleIcon style={{marginTop: 30}} />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Payment</Text>
            </View>
           
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 30,
              }}>
                <Text style={styles.label}>Email Address</Text>
              <CustomTextInput
                placeholder="Email Address"
                keyboardType="email-address"
                style={styles.inputTextField}
                placeholderTextColor={COLORS.primaryLightGrayHex}
              />
               <Text style={styles.label}>Card Information</Text>
              <CustomTextInput
                placeholder="Card Information"
                keyboardType="email-address"
                style={styles.inputTextField}
                placeholderTextColor={COLORS.primaryLightGrayHex}
              />
               
              <View style={{flexDirection:"row",width:"50%"}}>
                <CustomTextInput
                placeholder="MM/YY"
                keyboardType="email-address"
                style={[styles.inputTextField,{marginRight:10}]}
                placeholderTextColor={COLORS.primaryLightGrayHex}
              />
              <CustomTextInput
                placeholder="CVC"
                keyboardType="email-address"
                style={styles.inputTextField}
                placeholderTextColor={COLORS.primaryLightGrayHex}
              />
              </View>
              <Text style={styles.label}>CardHolder Name</Text>
              <CustomTextInput
                placeholder="Full Name on Card"
                style={styles.inputTextField}
                placeholderTextColor={COLORS.primaryLightGrayHex}
              />
              <Text style={styles.label}>Country or Region</Text>
              <CustomTextInput
                placeholder="United State"
                keyboardType="email-address"
                style={styles.inputTextField}
                placeholderTextColor={COLORS.primaryLightGrayHex}
              />
              <CustomTextInput
                placeholder="ZIP"
                keyboardType="email-address"
                style={styles.inputTextField}
                placeholderTextColor={COLORS.primaryLightGrayHex}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                marginTop: 20,
                paddingHorizontal: 20,
              }}>
              <CustomButton
                title="Confirm Payment"
                onPress={() => navigation.pop(2)}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhiteHex,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.primaryLightGrayHex,
    marginRight: 8,
  },
  selected: {
    backgroundColor: COLORS.primaryLightGrayHex,
  },
  radioText: {
    fontSize: 16,
    fontWeight: '500',
  },
  label: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  inputTextField: {
    backgroundColor: '#C4C4C4',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 0,
  },
});

export default PaymentScreen;
