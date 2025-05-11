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

const TransporterScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#5E3B76" barStyle="light-content" />
      <View style={styles.header}>
        <ICONS.titleIcon />
      </View>
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text style={styles.heading}>Transporter Dashboard</Text>
      </View>

      <View style={{marginTop: 20,paddingHorizontal:20}}>
        {/* Vehicle Registration */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('RegistrationScreen')}>
          <Text style={styles.cardText}>Vehicle Registration</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>

        {/* View Available Biddings */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ViewAvailableBiddingScreen')}>
          <Text style={styles.cardText}>View Available Biddings</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>

        {/* Accepted Biddings */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('AcceptedBiddingScreen')}>
          <Text style={styles.cardText}>Accepted Biddings</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>

        {/* Tour Pickup Locations */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Tour Pickup Locations</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
