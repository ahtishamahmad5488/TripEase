import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {ICONS} from '../../constants/icons';

const ViewAvailableBiddingsScreen = ({navigation}) => {
  // Dummy data for now
  const availableBiddings = [
    {id: '1', tourName: 'Northern Adventure', amount: 'PKR 25,000', status: 'Open'},
    {id: '2', tourName: 'Kashmir Escape', amount: 'PKR 18,500', status: 'Open'},
    {id: '3', tourName: 'Skardu Expedition', amount: 'PKR 28,000', status: 'Open'},
    {id: '4', tourName: 'Swat Valley Getaway', amount: 'PKR 15,000', status: 'Open'},
    {id: '5', tourName: 'Murree Day Tour', amount: 'PKR 10,000', status: 'Open'},
    {id: '6', tourName: 'Fairy Meadows Hike', amount: 'PKR 32,000', status: 'Open'},
    {id: '7', tourName: 'Neelum Valley Escape', amount: 'PKR 20,000', status: 'Open'},
  ];

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
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.heading}>Available Biddings</Text>
      </View>
      {availableBiddings.map(bid => (
        <View key={bid.id} style={styles.card}>
          <View>
            <Text style={styles.tourName}>{bid.tourName}</Text>
            <Text style={styles.bidDetail}>Amount: {bid.amount}</Text>
            <Text style={styles.bidDetail}>Status: {bid.status}</Text>
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.bidButton}>
            <Text style={{color: '#fff'}}>Bid Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2D3E50',
  },
  card: {
    backgroundColor: '#F5F6FA',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tourName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3E50',
  },
  bidDetail: {
    fontSize: 14,
    color: '#4A4A4A',
  },
  bidButton: {
    backgroundColor: '#2D9CDB',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
});

export default ViewAvailableBiddingsScreen;
