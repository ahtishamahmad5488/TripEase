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
    price: '25,000 PKR',
    startDate: '2025-06-01',
    endDate: '2025-06-05',
    time: '9:00 AM',
    status: 'Pending',
    acceptedBy: 'Not Yet Accepted',
  },
  {
    id: '2',
    tourName: 'Skardu Trip',
    price: '30,000 PKR',
    startDate: '2025-07-10',
    endDate: '2025-07-15',
    time: '7:30 AM',
    status: 'Accepted',
    acceptedBy: 'Zia Transport Co.',
  },
];

const ViewAllBiddingScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.tourName}>{item.tourName}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Price:</Text>
        <Text style={styles.value}>{item.price}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Start:</Text>
        <Text style={styles.value}>{item.startDate}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>End:</Text>
        <Text style={styles.value}>{item.endDate}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Time:</Text>
        <Text style={styles.value}>{item.time}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Status:</Text>
        <Text
          style={[
            styles.value,
            item.status === 'Accepted' ? styles.accepted : styles.pending,
          ]}>
          {item.status}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Accepted By:</Text>
        <Text style={styles.value}>{item.acceptedBy}</Text>
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
