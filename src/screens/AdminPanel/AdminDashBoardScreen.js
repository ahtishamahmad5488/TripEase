import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {ICONS} from '../../constants/icons';

const bookingsData = [
  {
    id: '1',
    name: 'Ali Raza',
    phone: '03001234567',
    cnic: '35202-1234567-1',
    members: 4,
    payment: 'Easypaisa',
  },
  {
    id: '2',
    name: 'Hina Khan',
    phone: '03019876543',
    cnic: '37405-2345678-2',
    members: 2,
    payment: 'JazzCash',
  },
  {
    id: '3',
    name: 'Usman Tariq',
    phone: '03111234567',
    cnic: '36302-9876543-3',
    members: 5,
    payment: 'Easypaisa',
  },
  {
    id: '4',
    name: 'Ahtisham',
    phone: '03102234567',
    cnic: '35201-9876543-3',
    members: 6,
    payment: 'Easypaisa',
  },
  {
    id: '5',
    name: 'Talha',
    phone: '03134234567',
    cnic: '36222-9876543-3',
    members: 1,
    payment: 'Jazzcash',
  },
];

const AdminDashboardScreen = () => {
  const renderBookingCard = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{item.phone}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>CNIC:</Text>
        <Text style={styles.value}>{item.cnic}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Members:</Text>
        <Text style={styles.value}>{item.members}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Payment:</Text>
        <Text style={[styles.value, styles.paymentMethod]}>{item.payment}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#5E3B76" barStyle="light-content" />
      <View style={styles.header}>
        <ICONS.titleIcon />
      </View>
      <Text style={styles.heading}>
        Admin Dashboard
      </Text>
      <Text style={[styles.heading,{fontSize:22}]}>All Bookings</Text>
      <FlatList
        data={bookingsData}
        keyExtractor={item => item.id}
        renderItem={renderBookingCard}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No bookings found.</Text>}
      />
    </SafeAreaView>
  );
};

export default AdminDashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F8',
  },
  header: {
    backgroundColor: '#5E3B76',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    paddingLeft:20,
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    elevation: 4,
  },
  name: {
    fontSize: 20,
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
    width: 120,
    color: '#333',
  },
  value: {
    flex: 1,
    color: '#555',
  },
  paymentMethod: {
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#999',
  },
});
