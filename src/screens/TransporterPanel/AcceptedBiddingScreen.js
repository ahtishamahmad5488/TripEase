import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {ICONS} from '../../constants/icons';

const AcceptedBiddingScreen = ({navigation}) => {
  const [availableBiddings, setAvailableBiddings] = useState([
    {
      id: '1',
      title: 'Northern Adventure',
      startDate: '2025-06-01',
      endDate: '2025-06-05',
      time: '10:00 AM',
    },
    {
      id: '2',
      title: 'Kashmir Escape',
      startDate: '2025-06-10',
      endDate: '2025-06-14',
      time: '8:30 AM',
    },
    {
      id: '3',
      title: 'Skardu Expedition',
      startDate: '2025-06-15',
      endDate: '2025-06-20',
      time: '9:00 AM',
    },
    {
      id: '4',
      title: 'Swat Valley Getaway',
      startDate: '2025-06-18',
      endDate: '2025-06-21',
      time: '7:45 AM',
    },
  ]);

  // Function to remove bid on "Accepted"
  const handleAccept = id => {
    const filtered = availableBiddings.filter(bid => bid.id !== id);
    setAvailableBiddings(filtered);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#5E3B76" barStyle="light-content" />
      <View style={styles.header}>
        <ICONS.titleIcon />
      </View>

     <View style={{paddingHorizontal:20}}>
     <Text style={styles.heading}>Accepted Biddings</Text>
     </View>

      {availableBiddings.map(bid => (
        <View style={{paddingHorizontal:20}}>
          <View key={bid.id} style={styles.card}>
          <Text style={styles.tourTitle}>{bid.title}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Start Date:</Text>
            <Text style={styles.value}>{bid.startDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>End Date:</Text>
            <Text style={styles.value}>{bid.endDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Time:</Text>
            <Text style={styles.value}>{bid.time}</Text>
          </View>
        </View>
        </View>
      ))}

      {availableBiddings.length === 0 && (
        <Text style={styles.emptyText}>No biddings available.</Text>
      )}
    </ScrollView>
  );
};

export default AcceptedBiddingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#5E3B76',
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    color: '#2D3E50',
  },
  card: {
    backgroundColor: '#F1F3F6',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
  },
  tourTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D3E50',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    fontWeight: '600',
    color: '#444',
    width: 100,
  },
  value: {
    color: '#555',
  },
  acceptButton: {
    marginTop: 12,
    backgroundColor: '#27AE60',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  acceptText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#999',
    fontSize: 16,
  },
});
