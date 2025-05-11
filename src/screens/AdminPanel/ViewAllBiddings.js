import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ICONS} from '../../constants/icons';

const initialBiddings = [
  {
    id: '1',
    tourName: 'Hunza Tour',
    price: '25,000 PKR',
    startDate: '2025-06-01',
    endDate: '2025-06-05',
    time: '9:00 AM',
    status: 'Pending',
  },
  {
    id: '2',
    tourName: 'Skardu Trip',
    price: '30,000 PKR',
    startDate: '2025-07-10',
    endDate: '2025-07-15',
    time: '7:30 AM',
    status: 'Pending',
  },
];

const ViewAllBiddingScreen = () => {
  const navigation = useNavigation();
  const [biddings, setBiddings] = useState(initialBiddings);

  const handleUpdate = item => {
    navigation.navigate('CreateBidding', {bidding: item});
  };

  const handleDelete = id => {
    const updatedBiddings = biddings.filter(bid => bid.id !== id);
    setBiddings(updatedBiddings);
  };

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

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#0ACF83'}]}
          onPress={() => handleUpdate(item)}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#D32F2F'}]}
          onPress={() => handleDelete(item.id)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F7F7F7'}}>
      <StatusBar backgroundColor="#5E3B76" barStyle="light-content" />
      <View style={styles.header}>
        <ICONS.titleIcon />
      </View>
      <FlatList
        data={biddings}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
        ListEmptyComponent={
          <View style={{marginTop: 50}}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 20,
                color: '#777',
                fontSize: 18,
                fontWeight: '600',
              }}>
              No biddings available.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default ViewAllBiddingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    backgroundColor: '#5E3B76',
    padding: 20,
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
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  pending: {
    color: '#D32F2F',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    flex: 0.48,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
