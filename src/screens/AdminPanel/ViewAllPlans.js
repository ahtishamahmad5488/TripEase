import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { ICONS } from '../../constants/icons';
import { useNavigation } from '@react-navigation/native';

const ViewAllBiddingScreen = () => {
  const navigation = useNavigation();
  const [biddings, setBiddings] = useState([
    {
      id: '1',
      place: 'Hunza Tour',
      startDate: '2025-06-01',
      endDate: '2025-06-05',
      amount: '20K',
      time: 'Morning',
    },
    {
      id: '2',
      place: 'Skardu Tour',
      startDate: '2025-06-01',
      endDate: '2025-06-05',
      amount: '30K',
      time: 'Evening',
    },
    {
      id: '3',
      place: 'Murre Tour',
      startDate: '2025-06-01',
      endDate: '2025-06-05',
      amount: '10K',
      time: 'Morning',
    },
    {
      id: '4',
      place: 'kalam Tour',
      startDate: '2025-06-01',
      endDate: '2025-06-05',
      amount: '25K',
      time: 'Morning',
    },
  ]);

  const handleDelete = id => {
    const updatedList = biddings.filter(item => item.id !== id);
    setBiddings(updatedList);
  };

  const handleUpdate = item => {
    navigation.navigate('CreatePlanScreen', { planData: item });
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.tourName}>{item.place}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Start:</Text>
        <Text style={styles.value}>{item.startDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>End:</Text>
        <Text style={styles.value}>{item.endDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>{item.amount}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Time</Text>
        <Text style={styles.value}>{item.time}</Text>
      </View>

      {/* Buttons Row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#0ACF83" }]}
          onPress={() => handleUpdate(item)}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#D32F2F' }]}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F7F7' }}>
      <StatusBar backgroundColor="#5E3B76" barStyle="light-content" />
            <View style={styles.header}>
              <ICONS.titleIcon />
            </View>
      <FlatList
        data={biddings}
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
    shadowOffset: { width: 0, height: 3 },
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
    color: '#fff',
    fontWeight: 'bold',
  },
});
