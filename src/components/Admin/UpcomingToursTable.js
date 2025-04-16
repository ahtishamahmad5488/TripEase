import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const upcomingTours = [
  {id: 1, name: 'Swat Tour', date: '12 April 2025', customers: '12 Customers'},
  {id: 2, name: 'Skardu Tour', date: '14 April 2025', customers: '9 Customers'},
];

const UpcomingToursList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upcoming Tours</Text>
      <View style={styles.tableHeader}>
        <Text style={[styles.cell, styles.bold]}>Tour</Text>
        <Text style={[styles.cell, styles.bold]}>Date</Text>
        <Text style={[styles.cell, styles.bold]}>Customers</Text>
      </View>
      {upcomingTours.map(tour => (
        <View key={tour.id} style={styles.tableRow}>
          <Text style={styles.cell}>{tour.name}</Text>
          <Text style={styles.cell}>{tour.date}</Text>
          <Text style={styles.cell}>{tour.customers}</Text>
        </View>
      ))}
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
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  cell: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default UpcomingToursList;
