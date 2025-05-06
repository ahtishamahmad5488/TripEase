import React from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import { ICONS } from '../../constants/icons';

const AcceptedBiddingsScreen = () => {
  // Dummy data for now
  const acceptedBiddings = [
    {id: '1', tourName: 'Hunza Valley Tour', amount: 'PKR 30,000', pickup: 'Lahore'},
    {id: '2', tourName: 'Skardu Adventure', amount: 'PKR 22,000', pickup: 'Islamabad'},
    {id: '3', tourName: 'Murree Fun Trip', amount: 'PKR 12,000', pickup: 'Rawalpindi'},
    {id: '4', tourName: 'Swat Summer Tour', amount: 'PKR 18,000', pickup: 'Multan'},
    {id: '5', tourName: 'Neelum Valley Luxury', amount: 'PKR 24,000', pickup: 'Karachi'},
    {id: '6', tourName: 'Azad Kashmir Tour', amount: 'PKR 19,500', pickup: 'Gujranwala'},
    {id: '7', tourName: 'Fairy Meadows Explorer', amount: 'PKR 35,000', pickup: 'Faisalabad'},
    {id: '8', tourName: 'Ratti Gali Adventure', amount: 'PKR 27,000', pickup: 'Hyderabad'},
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
      <View style={{marginTop:30}}>
      <Text style={styles.heading}>Accepted Biddings</Text>
      </View>

      {acceptedBiddings.map(bid => (
        <View key={bid.id} style={styles.card}>
          <Text style={styles.tourName}>{bid.tourName}</Text>
          <Text style={styles.bidDetail}>Amount: {bid.amount}</Text>
          <Text style={styles.bidDetail}>Pickup Location: {bid.pickup}</Text>
        </View>
      ))}
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
    marginBottom: 20,
    color: '#2D3E50',
  },
  card: {
    backgroundColor: '#F0F4F8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
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
});

export default AcceptedBiddingsScreen;
