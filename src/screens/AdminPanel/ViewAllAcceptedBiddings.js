import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {ICONS} from '../../constants/icons';

const initialBiddings = [
  {
    id: '1',
    tourName: 'Hunza Tour',
    price: '25,000 PKR',
    startDate: '2025-06-01',
    endDate: '2025-06-05',
    time: '9:00 AM',
    status: 'Accepted',
    acceptedBy: 'Sindhu Transport',
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
  {
    id: '3',
    tourName: 'Swat Valley Tour',
    price: '28,500 PKR',
    startDate: '2025-08-01',
    endDate: '2025-08-05',
    time: '8:00 AM',
    status: 'Accepted',
    acceptedBy: 'Mountain Express Ltd.',
  },
  {
    id: '4',
    tourName: 'Kalam Valley Tour',
    price: '21,500 PKR',
    startDate: '2025-10-01',
    endDate: '2025-10-05', 
    time: '9:00 AM',
    status: 'Accepted',
    acceptedBy: 'Mianwali Express Ltd.',
  },
];

const ViewAllAcceptedBiddings = () => {
  const [biddings] = useState(
    initialBiddings.filter(bid => bid.status === 'Accepted'),
  );

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.tourName}>{item.tourName}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Price:</Text>
        <Text style={styles.value}>{item.price}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Start Date:</Text>
        <Text style={styles.value}>{item.startDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>End Date:</Text>
        <Text style={styles.value}>{item.endDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Departure Time:</Text>
        <Text style={styles.value}>{item.time}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Status:</Text>
        <Text style={[styles.value, styles.accepted]}>{item.status}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Accepted By:</Text>
        <Text style={styles.value}>{item.acceptedBy}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F7F7" />
      <View style={{marginTop:30}}>
        <ICONS.titleIcon />
      </View>

      <FlatList
        data={biddings}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No accepted biddings available.
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={true}
        alwaysBounceVertical={true}
      />
    </SafeAreaView>
  );
};

export default ViewAllAcceptedBiddings;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  container: {
    padding: 16,
    paddingBottom: 30, 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 4,
  },
  tourName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B2C83',
    marginBottom: 12,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontWeight: '600',
    color: '#333',
    width: 130,
  },
  value: {
    color: '#444',
    flex: 1,
  },
  accepted: {
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  emptyContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#999',
    fontWeight: '600',
  },
});
