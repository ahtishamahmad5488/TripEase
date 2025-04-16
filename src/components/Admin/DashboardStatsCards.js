import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const statsData = [
  {
    id: 1,
    label: 'Total Customers',
    value: '1,250',
  },
  {
    id: 2,
    label: 'Total Transporters',
    value: '150',
  },
  {
    id: 3,
    label: 'Total Bookings',
    value: '3,200',
  },
  {
    id: 4,
    label: 'Total Plans',
    value: '25',
  },
  {
    id: 5,
    label: 'Total Earnings',
    value: '$540,000',
  },
  {
    id: 6,
    label: 'Active Bookings',
    value: '180',
  },
];

const DashboardStatsCards = () => {
  return (
    <View style={styles.container}>
      {statsData.map(item => (
        <View key={item.id} style={styles.card}>
          <View style={styles.icon}>{item.icon}</View>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    width: '47%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    elevation: 2,
  },
  icon: {
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default DashboardStatsCards;
