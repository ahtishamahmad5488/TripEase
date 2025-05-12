import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import CustomTextInput from '../../components/CustomTextField';
import { COLORS } from '../../constants/colors';
import { ICONS } from '../../constants/icons';

const HomeScreen = ({ navigation }) => {
  const tourPlans = [
    {
      id: 1,
      title: 'Lahore to Murree',
      details: 'Learn More Details',
      price: '15k',
      image: require('../../assets/icons/Murree.png'),
      tourDetails: {
        subTitle: 'Pakistan',
        info: 'A scenic hill station known for its lush green mountains, cool weather, and Mall Road, making it a popular tourist destination in Pakistan',
        place: 'Murree',
        duration: '2 Days',
        time: '10 AM',
        date: '15 March',
        expensive: '15k',
      },
    },
    {
      id: 2,
      title: 'Lahore to Naran',
      details: 'Learn More Details',
      price: '15k',
      image: require('../../assets/icons/Naran.png'),
      tourDetails: {
        place: 'Naran',
        duration: '5 Days',
        time: '10 AM',
        date: '10 March',
        expensive: '18k',
        subTitle: 'Pakistan',
        info: 'A breathtaking valley in the Kaghan region, famous for its lakes, including Saif-ul-Muluk, lush meadows, and adventure activities',
      },
    },
    {
      id: 3,
      title: 'Lahore to Kashmir',
      details: 'Learn More Details',
      price: '15k',
      image: require('../../assets/icons/Kashmir.png'),
      tourDetails: {
        place: 'Kashmir',
        duration: '7 Days',
        time: '10 AM',
        date: '20 March',
        expensive: '25k',
        subTitle: 'Pakistan',
        info: 'A paradise on earth with stunning landscapes, snow-capped peaks, and serene rivers, offering unmatched natural beauty and cultural heritage',
      },
    },
    {
      id: 4,
      title: 'Lahore to Swat',
      details: 'Learn More Details',
      price: '15k',
      image: require('../../assets/icons/Sawat.png'),
      tourDetails: {
        place: 'Sawat',
        duration: '10 Days',
        time: '10 AM',
        date: '25 March',
        expensive: '30k',
        subTitle: 'Pakistan',
        info: 'Known as the Switzerland Pakistan Swat boasts majestic mountains, beautiful rivers, and historical Buddhist sites, attracting nature and history lovers alike',
      },
    },
    {
      id: 5,
      title: 'Lahore to Swat',
      details: 'Learn More Details',
      price: '15k',
      image: require('../../assets/icons/Sawat.png'),
      tourDetails: {
        place: 'Sawat',
        duration: '10 Days',
        time: '10 AM',
        date: '25 March',
        expensive: '30k',
        subTitle: 'Pakistan',
        info: 'Known as the Switzerland Pakistan Swat boasts majestic mountains, beautiful rivers, and historical Buddhist sites, attracting nature and history lovers alike',
      },
    },
    {
      id: 6,
      title: 'Lahore to Swat',
      details: 'Learn More Details',
      price: '15k',
      image: require('../../assets/icons/Sawat.png'),
      tourDetails: {
        place: 'Sawat',
        duration: '10 Days',
        time: '10 AM',
        date: '25 March',
        expensive: '30k',
        subTitle: 'Pakistan',
        info: 'Known as the Switzerland Pakistan Swat boasts majestic mountains, beautiful rivers, and historical Buddhist sites, attracting nature and history lovers alike',
      },
    },
    {
      id: 7,
      title: 'Lahore to Swat',
      details: 'Learn More Details',
      price: '15k',
      image: require('../../assets/icons/Sawat.png'),
      tourDetails: {
        place: 'Sawat',
        duration: '10 Days',
        time: '10 AM',
        date: '25 March',
        expensive: '30k',
        subTitle: 'Pakistan',
        info: 'Known as the Switzerland Pakistan Swat boasts majestic mountains, beautiful rivers, and historical Buddhist sites, attracting nature and history lovers alike',
      },
    },
    {
      id: 8,
      title: 'Lahore to Swat',
      details: 'Learn More Details',
      price: '15k',
      image: require('../../assets/icons/Sawat.png'),
      tourDetails: {
        place: 'Sawat',
        duration: '10 Days',
        time: '10 AM',
        date: '25 March',
        expensive: '30k',
        subTitle: 'Pakistan',
        info: 'Known as the Switzerland Pakistan Swat boasts majestic mountains, beautiful rivers, and historical Buddhist sites, attracting nature and history lovers alike',
      },
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar barStyle="light-content" />

        {/* Header Part */}
        <View style={styles.headerContainer}>
          <ICONS.titleIcon />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <ICONS.searchIcon style={styles.searchIconStyle} />
          <CustomTextInput
            style={styles.inputTextFieldStyle}
            placeholder="Search tours..."
            placeholderTextColor="white"
          />
        </View>

        {/* Scrollable Tour Plans Section */}
        <View style={styles.listDataContainer}>
          <Text style={styles.heading}>Tour Plans</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={tourPlans}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
              scrollEnabled={false}
              contentContainerStyle={styles.listContainer}
              renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                  <View style={styles.card}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('DetailScreen', { tour: item })
                      }>
                      <Text style={styles.details}>{item.details}</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.priceButtonContainer}>
                    <Text style={styles.price}>
                      Price: <Text style={{ color: '#1E6CE0' }}>{item.price}</Text>
                    </Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.push('CreateBookingScreen')}>
                      <Text style={styles.buttonText}>Book Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  headerContainer: {
    marginTop: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 20,
  },
  searchIconStyle: {
    position: 'absolute',
    left: 4,
  },
  inputTextFieldStyle: {
    color: COLORS.primaryBlackHex,
    paddingLeft: 44,
    fontSize: 16,
    borderWidth: 0,
  },
  listDataContainer: {
    flex: 1,
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  listContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  cardContainer: {
    marginBottom: 20,
    width: '48%',
    marginHorizontal: 4,
  },
  card: {
    backgroundColor: '#6787A0',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  priceButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  title: {
    color: COLORS.primaryBlackHex,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  details: {
    color: COLORS.primaryWhiteHex,
    fontSize: 14,
    marginTop: 2,
  },
  price: {
    color: COLORS.primaryBlackHex,
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#052D47',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.primaryWhiteHex,
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default HomeScreen;
