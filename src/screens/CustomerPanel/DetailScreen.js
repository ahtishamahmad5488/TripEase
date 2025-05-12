import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import CustomButton from '../../components/CustomButton';
import { COLORS } from '../../constants/colors';

const DetailScreen = ({route, navigation}) => {
  const tour = route.params?.tour || {};

  const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tour Details</Text> */}
      <Animatable.Image
        source={tour.image}
        style={styles.image}
        animation={'slideInUp'}
      />
      <AnimatedBtn
        animation={'slideInUp'}
        onPress={() => navigation.goBack()}
        style={styles.backBtn}>
        <Image
          style={styles.arrowBack}
          source={require('../../assets/icons/backArrow.png')}
        />
      </AnimatedBtn>
      <Animatable.View
        style={styles.headerTextContainer}
        animation={'slideInUp'}>
        <Text style={styles.title}>{tour.tourDetails.place}</Text>
        <Text style={styles.subTitle}>{tour.tourDetails.subTitle}</Text>
      </Animatable.View>
      <Animatable.View style={styles.infoRow} animation={'slideInUp'}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>⏳ {tour.tourDetails.duration}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>🕰 {tour.tourDetails.time}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>📅 {tour.tourDetails.date}</Text>
        </View>
      </Animatable.View>
      <Animatable.View style={styles.expenseContainer} animation={'slideInUp'}>
        <Text style={styles.expenseText}>
          Expense:{' '}
          <Text style={{color: '#1E6CE0', fontSize: 26, fontWeight: 'bold'}}>
            Rs {tour.tourDetails.expensive}
          </Text>
        </Text>
      </Animatable.View>
      <Animatable.View
        style={styles.detailInfoContainer}
        animation={'slideInUp'}>
        <Text style={styles.detailText}>{tour.tourDetails.info}</Text>
        <Text style={styles.terms}>
          Terms & Conditions: Admin will tell these.
        </Text>
      </Animatable.View>
      <Animatable.View style={styles.buttonContainer} animation={'slideInUp'}>
        <CustomButton
          title="Booking"
          style={styles.button}
          onPress={() => navigation.replace('CreateBookingScreen')}
        />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhiteHex,
  },
  image: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    position: 'absolute',
    left: 16,
    top: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowBack: {
    width: 36,
    height: 36,
    right: 2,
  },
  headerTextContainer: {
    paddingHorizontal: 18,
    marginTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color: 'black',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  infoBox: {
    backgroundColor: '#6787A0',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  expenseContainer: {
    marginTop: 20,
    paddingHorizontal: 18,
  },
  expenseText: {
    fontSize: 22,
    fontWeight: '500',
  },
  detailInfoContainer: {
    paddingHorizontal: 18,
  },
  detailText: {
    fontSize: 16,
    marginTop: 10,
    color: COLORS.primaryLightGrayHex,
    textAlign: 'justify',
  },
  terms: {
    marginTop: 30,
    fontSize: 14,
    fontStyle: 'italic',
    color: '#777',
    paddingHorizontal: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 18,
    marginTop: 30,
  },
  button: {
    backgroundColor: '#0ACF83',
    padding: 12,
    borderRadius: 5,
    marginBottom: 30,
  },
  buttonText: {
    color: COLORS.primaryWhiteHex,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default DetailScreen;
