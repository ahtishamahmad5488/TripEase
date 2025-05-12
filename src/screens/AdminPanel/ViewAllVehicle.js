// admin/ViewAllVehacial.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const vehicleData = [
  {
    id: '1',
    driverName: 'Ahmed Khan',
    contact: '03111234567',
    cnic: '35201-1234567-1',
    licenseNo: 'LHR-12345',
    motorType: 'Truck',
    vehicleNo:"ALP-2323",
    model: 'Hino 2020',
    capacity: '5000 kg',
  },
  {
    id: '2',
    driverName: 'Rashid Ali',
    contact: '03001239876',
    cnic: '37405-6789012-2',
    licenseNo: 'ISB-67890',
    motorType: 'Mini Loader',
    vehicleNo:"ALP-2323",
    model: 'Suzuki Ravi 2022',
    capacity: '800 kg',
  },
  {
    id: '3',
    driverName: 'Faizan Ali',
    contact: '03221239876',
    cnic: '37405-4569012-2',
    licenseNo: 'ISB-70890',
    motorType: 'Bus',
    vehicleNo:"ALP-2323",
    model: 'Suzuki Ravi 2020',
    capacity: '400 kg',
  },
  {
    id: '4',
    driverName: 'Ali',
    contact: '03201239876',
    cnic: '37405-1789012-2',
    licenseNo: 'ISB-17890',
    motorType: 'High Rouf',
    vehicleNo:"ALP-2323",
    model: 'Youtang 2025',
    capacity: '1000 kg',
  },
  {
    id: '5',
    driverName: 'Ahtisham Ahmad',
    contact: '03001239832',
    cnic: '37405-6789012-1',
    licenseNo: 'IML-54884',
    motorType: 'Coster',
    vehicleNo:"ALP-2323",
    model: 'Nova 2022',
    capacity: '800 kg',
  },
];

const ViewAllVehicle = () => {

  const renderVehicleCard = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.driverName}>{item.driverName}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Contact:</Text>
        <Text style={styles.value}>{item.contact}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>CNIC:</Text>
        <Text style={styles.value}>{item.cnic}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>License No:</Text>
        <Text style={styles.value}>{item.licenseNo}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Motor Type:</Text>
        <Text style={styles.value}>{item.motorType}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Vehicle Number:</Text>
        <Text style={styles.value}>{item.vehicleNo}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Model:</Text>
        <Text style={styles.value}>{item.model}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Capacity:</Text>
        <Text style={styles.value}>{item.capacity}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#5E3B76" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Registered Vehicles</Text>
      </View>
      <FlatList
        data={vehicleData}
        keyExtractor={item => item.id}
        renderItem={renderVehicleCard}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No vehicles found.</Text>}
      />
    </SafeAreaView>
  );
};

export default ViewAllVehicle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F8',
  },
  header: {
    backgroundColor: '#5E3B76',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
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
  driverName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B2C83',
    marginBottom: 12,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 6,
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
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#999',
  },
});
