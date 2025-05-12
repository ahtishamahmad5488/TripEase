import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { ICONS } from '../../constants/icons';

const bookings = [
  {
    id: 1,
    name: 'Ali Raza',
    phone: '03001234567',
    members: 4,
    payment: 'Paid via Stripe - 20k',
    tour: 'Lahore to Murree',
  },
  {
    id: 2,
    name: 'Sara Khan',
    phone: '03111234567',
    members: 2,
    payment: 'Paid via Stripe - 15k',
    tour: 'Lahore to Naran',
  },
  {
    id: 3,
    name: 'Ahmed Ali',
    phone: '03221234567',
    members: 3,
    payment: 'Paid via Stripe - 18k',
    tour: 'Lahore to Swat',
  },
  {
    id: 4,
    name: 'Ahmed Ali',
    phone: '03221234567',
    members: 3,
    payment: 'Paid via Stripe - 18k',
    tour: 'Lahore to Swat',
  },
  {
    id: 5,
    name: 'Ahmed Ali',
    phone: '03221234567',
    members: 3,
    payment: 'Paid via Stripe - 18k',
    tour: 'Lahore to Swat',
  },
  {
    id: 6,
    name: 'Ahmed Ali',
    phone: '03221234567',
    members: 3,
    payment: 'Paid via Stripe - 18k',
    tour: 'Lahore to Swat',
  },
  {
    id: 7,
    name: 'Ahmed Ali',
    phone: '03221234567',
    members: 3,
    payment: 'Paid via Stripe - 18k',
    tour: 'Lahore to Swat',
  },
];

const BookingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={"white"}/>
      {/* Header Part */}
      <View style={{marginTop:10}}>
        <ICONS.titleIcon />
      </View>
      <FlatList
        data={bookings}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.tour}>{item.tour}</Text>
            <Text style={styles.text}>Name: {item.name}</Text>
            <Text style={styles.text}>Phone: {item.phone}</Text>
            <Text style={styles.text}>Members: {item.members}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
    paddingHorizontal:20,
    marginTop:30,
  },
  card: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 2,
  },
  tour: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E6CE0',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 3,
  },
  payment: {
    marginTop: 5,
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default BookingScreen;
