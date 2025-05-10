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
  const [description, setDescription] = useState('');

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      {/* Header */}
      <View style={{paddingTop: 20}}>
        <ICONS.titleIcon />
      </View>
      <View style={{marginTop: 40}}>
        <Text style={styles.heading}>Create Tour Plan</Text>
      </View>

      <View style={{marginBottom: 30}}>
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
        <View>
          <Text style={styles.labelText}>Description</Text>
          <CustomTextInput
            style={[styles.TextInputField, {height: 100}]}
            placeholder="Description"
            placeholderTextColor={COLORS.primaryLightGrayHex}
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Create Plan</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
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

export default CreateBidding;
