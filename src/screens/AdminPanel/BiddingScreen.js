// AdminDashboardScreen.js

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ICONS} from '../../constants/icons';

const BiddingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header Part */}
      <View
        style={{
          marginTop: 10,
        }}>
        <ICONS.titleIcon />
      </View>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CreateBidding')}>
            <Text style={styles.buttonText}>Create Bidding</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ViewAllBiddings')}>
            <Text style={styles.buttonText}>View All Biddings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ViewAllAcceptedBiddings")}>
            <Text style={styles.buttonText}>View All Accept Biddings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BiddingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  buttonRow: {
    justifyContent: 'center',
    gap: 20, // Or use margin for older versions
  },
  button: {
    backgroundColor: '#0ACF83',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign:"center"
  },
});
