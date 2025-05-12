import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { ICONS } from '../constants/icons';

const AboutUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={"white"}/>
      {/* App Logo */}
      <View style={styles.logoContainer}>
        <ICONS.titleIcon />
      </View>

      {/* Heading */}
      <Text style={styles.heading}>About Us</Text>

      {/* Description */}
      <Text style={styles.description}>
        Welcome to TripEase – your trusted travel partner. We provide tailored
        tour plans to help you explore the beauty of Pakistan with ease, comfort,
        and unforgettable experiences.
      </Text>

      {/* Card: Our Mission */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎯 Our Mission</Text>
        <Text style={styles.cardText}>
          To offer memorable travel experiences by delivering premium tour services
          with transparency, safety, and professionalism.
        </Text>
      </View>

      {/* Card: Our Services */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌍 Our Services</Text>
        <Text style={styles.cardText}>
          - Customized Travel Packages{'\n'}
          - Group & Family Tours{'\n'}
          - 24/7 Customer Support
        </Text>
      </View>

      {/* Card: Our Team */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>💼 Our Team</Text>
        <Text style={styles.cardText}>
          A passionate team of travel experts, guides, and coordinators committed
          to providing the best possible travel experience.
        </Text>
      </View>

      {/* Card: Contact Info */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📍 Contact Us</Text>
        <Text style={styles.cardText}>
          Email: support@tripease.pk{'\n'}
          Phone: +92 300 1234567{'\n'}
          Location: Lahore, Pakistan
        </Text>
      </View>

      {/* Optional Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contact Support</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1E6CE0',
  },
  cardText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#0ACF83',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
