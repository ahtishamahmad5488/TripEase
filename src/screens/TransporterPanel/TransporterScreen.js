import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {ICONS} from '../../constants/icons';

const TransporterScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      {/* Header Part */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <ICONS.titleIcon />
        <TouchableOpacity onPress={() => {}}>
          <ICONS.logoIcon style={{right: 20}} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.heading}>Transporter</Text>
        <Text style={styles.heading}>Dashboard</Text>
      </View>

      <View style={{marginTop: 30}}>
        {/* Vehicle Registration */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Vehicle Registration</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>

        {/* View Available Biddings */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>View Available Biddings</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>

        {/* Accepted Biddings */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Accepted Biddings</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>

        {/* Tour Pickup Locations */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Tour Pickup Locations</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>
      </View>

      {/* Vehicle Info Section */}
      <View style={styles.vehicleInfo}>
        <Text style={styles.vehicleHeading}>Vehicle Info</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 6,
          }}>
          <Text style={styles.vehicleText}>Vehicle Type:</Text>
          <Text style={styles.vehicleText}>Nova Sky</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 6,
          }}>
          <Text style={styles.vehicleText}>Number Plate:</Text>
          <Text style={styles.vehicleText}>LEB-1234</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 6,
          }}>
          <Text style={styles.vehicleText}>Capacity:</Text>
          <Text style={styles.vehicleText}>18 persons</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 6,
          }}>
          <Text style={styles.vehicleText}>Registered:</Text>
          <Text style={styles.vehicleText}>✅</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#2D3E50',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6FA',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 0.5,
    justifyContent: 'space-between',
  },
  cardText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#2D3E50',
    fontWeight: '500',
  },
  vehicleInfo: {
    marginTop: 30,
    backgroundColor: '#F0F4F8',
    padding: 15,
    borderRadius: 10,
    paddingBottom: 30,
  },
  vehicleHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vehicleText: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 4,
    color: '#2D3E50',
  },
});

export default TransporterScreen;
