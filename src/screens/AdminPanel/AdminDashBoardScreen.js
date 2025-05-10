// admin/AdminDashboardScreen.js
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {ICONS} from '../../constants/icons';

const AdminDashboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />
      {/* Header */}
      <View style={styles.header}>
        <ICONS.titleIcon />
      </View>

      {/* Content */}
      <View style={styles.body}>
        <Text style={styles.heading}>Admin Dashboard</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewAllBiddings')}>
          <Text style={styles.buttonText}>View All Bidding</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewAllPlans')}>
          <Text style={styles.buttonText}>View All Plans</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewAllBookings')}>
          <Text style={styles.buttonText}>View All Bookings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdminDashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#5E3B76',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 30,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    // flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});
