import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const acceptedBiddings = [
  {
    id: '1',
    transporter: 'Ali Logistics',
    tour: 'Hunza Plan',
    date: '10 Apr 2025',
    status: 'accepted',
  },
  {
    id: '2',
    transporter: 'Fast Movers',
    tour: 'Skardu Plan',
    date: '12 Apr 2025',
    status: 'accepted',
  },
];

const AcceptedBiddingList = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.transporter}>{item.transporter}</Text>
        <Text style={styles.details}>
          {item.tour} - {item.date}
        </Text>
      </View>
      <Text style={styles.acceptedBadge}>ACCEPTED</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Accepted Biddings</Text>
      <FlatList
        data={acceptedBiddings}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 20}}
      />
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
    marginBottom: 12,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transporter: {
    fontSize: 16,
    fontWeight: '600',
  },
  details: {
    fontSize: 13,
    color: '#666',
  },
  acceptedBadge: {
    backgroundColor: '#4caf50',
    color: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default AcceptedBiddingList;
