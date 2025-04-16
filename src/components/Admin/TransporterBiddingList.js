import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const initialBiddings = [
  {
    id: '1',
    transporter: 'Ali Logistics',
    tour: 'Hunza Plan',
    date: '10 Apr 2025',
    status: 'pending',
  },
  {
    id: '2',
    transporter: 'Fast Movers',
    tour: 'Skardu Plan',
    date: '12 Apr 2025',
    status: 'pending',
  },
  {
    id: '3',
    transporter: 'NorthTrack',
    tour: 'Swat Plan',
    date: '15 Apr 2025',
    status: 'pending',
  },
];

const TransporterBiddingList = () => {
  const [biddings, setBiddings] = useState(initialBiddings);

  const handleStatusChange = (id, newStatus) => {
    const updated = biddings.map(bid =>
      bid.id === id ? {...bid, status: newStatus} : bid,
    );
    setBiddings(updated);
  };

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.transporter}>{item.transporter}</Text>
        <Text style={styles.details}>
          {item.tour} - {item.date}
        </Text>
      </View>

      {item.status === 'pending' ? (
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.btn, styles.accept]}
            onPress={() => handleStatusChange(item.id, 'accepted')}>
            <Text style={styles.btnText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.reject]}
            onPress={() => handleStatusChange(item.id, 'rejected')}>
            <Text style={styles.btnText}>Reject</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text
          style={[
            styles.statusBadge,
            item.status === 'accepted' ? styles.accepted : styles.rejected,
          ]}>
          {item.status.toUpperCase()}
        </Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transporter Biddings</Text>
      <FlatList
        data={biddings}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 16},
  heading: {fontSize: 18, fontWeight: 'bold', marginBottom: 12},
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
  transporter: {fontSize: 16, fontWeight: '600'},
  details: {fontSize: 13, color: '#666'},
  actions: {flexDirection: 'row', gap: 10},
  btn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  accept: {
    backgroundColor: '#4caf50',
  },
  reject: {
    backgroundColor: '#f44336',
  },
  btnText: {
    color: '#fff',
    fontSize: 13,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontWeight: 'bold',
    fontSize: 13,
    color: '#fff',
  },
  accepted: {
    backgroundColor: '#4caf50',
  },
  rejected: {
    backgroundColor: '#f44336',
  },
});

export default TransporterBiddingList;
