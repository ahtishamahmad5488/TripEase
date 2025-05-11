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

const CreateBidding = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <ScrollView style={styles.container}>
 <StatusBar backgroundColor="#5E3B76" barStyle="light-content" />
      <View style={styles.header}>
        <ICONS.titleIcon />
      </View>
      <View style={{marginTop: 40,paddingHorizontal:18}}>
        <Text style={styles.heading}>Create Bidding</Text>
      </View>

      <View style={{marginBottom: 30,paddingHorizontal:18,marginTop:30}}>
        <View>
          <Text style={styles.labelText}>Tour Title</Text>
          <CustomTextInput
            style={styles.TextInputField}
            placeholder="Tour title"
            placeholderTextColor={COLORS.primaryLightGrayHex}
            value={title}
            onChangeText={setTitle}
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
      <View style={{paddingHorizontal:18}}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AdminDashBoardScreen")}>
        <Text style={styles.buttonText}>Create Bidding</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
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
    color: 'black',
    marginBottom: 5,
    fontWeight:"500",
    marginTop:10,
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

export default CreateBidding;
