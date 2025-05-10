import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { ICONS } from '../../constants/icons';

const dummyBiddings = [
  {
    id: '1',
    tourName: 'Hunza Tour',
    location: 'Lahore',
    startDate: '2025-06-01',
    endDate: '2025-06-05',
    vehicleType: 'Bus',
    capacity: '48',
  },
  {
    id: '2',
    tourName: 'Skardu Trip',
    location: 'Islamabad',
    startDate: '2025-07-10',
    endDate: '2025-07-15',
    vehicleType: 'Coster',
    capacity: '30',
  },
];

const ViewAllBiddingScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.tourName}>{item.tourName}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Start:</Text>
        <Text style={styles.value}>{item.startDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>End:</Text>
        <Text style={styles.value}>{item.endDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>{item.location}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Vehicle Type:</Text>
        <Text style={styles.value}>{item.vehicleType}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Capacity</Text>
        <Text style={styles.value}>{item.capacity}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F7F7F7'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F7F7" />
      {/* Header Part */}
      <View
        style={{
          marginTop: 30,
        }}>
        <ICONS.titleIcon />
      </View>
      <FlatList
        data={dummyBiddings}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
};

export default ViewAllBiddingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F7F7F7',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    elevation: 5,
  },
  tourName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B2C83',
    marginBottom: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
    width: 120,
  },
  value: {
    color: '#444',
    flex: 1,
  },
  accepted: {
    color: '#2E7D32', // Green
    fontWeight: 'bold',
  },
  pending: {
    color: '#D32F2F', // Red
    fontWeight: 'bold',
  },
});
