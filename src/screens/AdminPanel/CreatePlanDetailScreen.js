import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {ICONS} from '../../constants/icons';
import CustomTextInput from '../../components/CustomTextField';
import {COLORS} from '../../constants/colors';

const CreatePlanDetailScreen = ({navigation}) => {
  const [place, setPlace] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [amount, setAmount] = useState('');
  const [time,setTime] = useState('');
 
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#5E3B76" barStyle="light-content" />
            <View style={styles.header}>
              <ICONS.titleIcon />
            </View>
      <View style={{marginTop: 40,paddingHorizontal:20}}>
        <Text style={styles.heading}>Create Tour Plan</Text>
      </View>

      <View style={{marginBottom: 30,paddingHorizontal:20}}>
        <View>
          <Text style={styles.labelText}>Place</Text>
          <CustomTextInput
            style={styles.TextInputField}
            placeholder="Place"
            placeholderTextColor={COLORS.primaryLightGrayHex}
            value={place}
            onChangeText={setPlace}
          />
        </View>
        <View>
          <Text style={styles.labelText}>Start Date</Text>
          <CustomTextInput
            style={styles.TextInputField}
            placeholder="Start Date (e.g. 2025-05-10)"
            placeholderTextColor={COLORS.primaryLightGrayHex}
            value={startDate}
            onChangeText={setStartDate}
          />
        </View>
        <View>
          <Text style={styles.labelText}>End Date</Text>
          <CustomTextInput
            style={styles.TextInputField}
            placeholder="End Date (e.g. 2025-05-15)"
            placeholderTextColor={COLORS.primaryLightGrayHex}
            value={endDate}
            onChangeText={setEndDate}
          />
        </View>
        <View>
          <Text style={styles.labelText}>Amount</Text>
          <CustomTextInput
            style={styles.TextInputField}
            placeholder="Amount"
            placeholderTextColor={COLORS.primaryLightGrayHex}
            value={amount}
            onChangeText={setAmount}
          />
        </View>
        <View>
          <Text style={styles.labelText}>Time</Text>
          <CustomTextInput
            style={styles.TextInputField}
            placeholder="Time"
            placeholderTextColor={COLORS.primaryLightGrayHex}
            value={time}
            onChangeText={setTime}
          />
        </View>
      </View>
      <View style={{paddingHorizontal:20}}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.pop(2)}>
        <Text style={styles.buttonText}>Create Plan</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#5E3B76',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D3E50',
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
  button: {
    backgroundColor: '#0ACF83',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    marginBottom:40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreatePlanDetailScreen;
