import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const activities = [
  'User All booked “Noorthern Tour Plan”',
  'Transporter ABC registered a new vehicle',
  'Hostel Service added to–Hunza Package',
  'Payment received. Rs. 15,000 from Useriz3',
];

const RecentActivityList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent Activities</Text>
      {activities.map((item, index) => (
        <Text key={index} style={styles.activity}>
          • {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  activity: {
    fontSize: 14,
    color: '#333',
    marginVertical: 4,
  },
});

export default RecentActivityList;
