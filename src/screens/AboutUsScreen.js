// // import React from 'react';
// // import {View, ScrollView, Image} from 'react-native';
// // import {Text, Card, Button, Appbar, Avatar} from 'react-native-paper';
// // import MapView, {Marker} from 'react-native-maps';

// // const AboutUsScreen = () => {
// //   return (
// //     <ScrollView style={{flex: 1, backgroundColor: '#1A1A1A'}}>
// //       <Appbar.Header style={{backgroundColor: '#121212'}}>
// //         <Appbar.Content title="About Us" titleStyle={{color: 'white'}} />
// //       </Appbar.Header>

// //       <View style={{padding: 20}}>
// //         <Text
// //           variant="headlineMedium"
// //           style={{color: 'white', marginBottom: 10}}>
// //           Welcome to TRIPEASE
// //         </Text>
// //         <Text style={{color: '#ccc', marginBottom: 20}}>
// //           Your ultimate travel companion, making your journeys smooth and
// //           hassle-free.
// //         </Text>

// //         {/* Travel Experience Images */}
// //         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
// //           {[1, 2, 3].map((_, index) => (
// //             <Image
// //               key={index}
// //               source={{
// //                 uri: 'https://source.unsplash.com/random/300x200?travel',
// //               }}
// //               style={{
// //                 width: 150,
// //                 height: 100,
// //                 borderRadius: 10,
// //                 marginRight: 10,
// //               }}
// //             />
// //           ))}
// //         </ScrollView>

// //         {/* Contact Us Section */}
// //         <Card style={{backgroundColor: '#222', marginTop: 20, padding: 15}}>
// //           <Text
// //             variant="titleMedium"
// //             style={{color: 'white', marginBottom: 10}}>
// //             Contact Us
// //           </Text>
// //           <Text style={{color: '#ccc'}}>📍 Office: XYZ Street, Your City</Text>
// //           <Text style={{color: '#ccc'}}>📞 Phone: +123 456 789</Text>
// //           <Text style={{color: '#ccc'}}>✉️ Email: support@tripease.com</Text>
// //         </Card>

// //         {/* Social Media Icons */}
// //         <View
// //           style={{
// //             flexDirection: 'row',
// //             justifyContent: 'space-around',
// //             marginVertical: 20,
// //           }}>
// //           {['facebook', 'instagram', 'twitter', 'linkedin'].map(
// //             (icon, index) => (
// //               <Avatar.Icon
// //                 key={index}
// //                 size={50}
// //                 icon={icon}
// //                 style={{backgroundColor: '#333'}}
// //               />
// //             ),
// //           )}
// //         </View>

// //         {/* Map Section */}
// //         <MapView
// //           style={{height: 200, borderRadius: 10}}
// //           initialRegion={{
// //             latitude: 37.78825,
// //             longitude: -122.4324,
// //             latitudeDelta: 0.0922,
// //             longitudeDelta: 0.0421,
// //           }}>
// //           <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}} />
// //         </MapView>

// //         {/* Live Chat Button */}
// //         <Button
// //           mode="contained"
// //           style={{marginTop: 20, backgroundColor: '#4CAF50'}}>
// //           Live Chat
// //         </Button>
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // export default AboutUsScreen;
// import React from 'react';
// import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
// import {Button, Card, Avatar} from 'react-native-paper';
// import MapView, {Marker} from 'react-native-maps';
// // import Icon from 'react-native-vector-icons/FontAwesome';

// const AboutUsScreen = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header Image */}
//       <Image
//         source={require('../assets/icons/backgroundImage.jpg')}
//         style={styles.headerImage}
//       />

//       {/* About Us Section */}
//       <View style={styles.section}>
//         <Text style={styles.title}>About Us</Text>
//         <Text style={styles.description}>
//           Welcome to TripEase! We offer the best travel experiences with expert
//           guidance.
//         </Text>
//       </View>

//       {/* Contact Details */}
//       <Card style={styles.card}>
//         <Card.Title
//           title="Contact Us"
//           left={props => <Avatar.Icon {...props} icon="phone" />}
//         />
//         <Card.Content>
//           <Text style={styles.contactText}>
//             {/* <Icon name="map-marker" size={16} /> 123 Street, Karachi, Pakistan */}
//           </Text>
//           <Text style={styles.contactText}>
//             {/* <Icon name="phone" size={16} /> +92 300 1234567 */}
//           </Text>
//           <Text style={styles.contactText}>
//             {/* <Icon name="envelope" size={16} /> info@tripease.com */}
//           </Text>
//         </Card.Content>
//       </Card>

//       {/* Social Media Icons */}
//       {/* <View style={styles.socialIcons}>
//         <Icon name="facebook" size={30} color="#3b5998" />
//         <Icon name="twitter" size={30} color="#1DA1F2" />
//         <Icon name="instagram" size={30} color="#C13584" />
//         <Icon name="linkedin" size={30} color="#0077B5" />
//       </View> */}

//       {/* Google Map */}
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 24.8607,
//           longitude: 67.0011,
//           latitudeDelta: 0.02,
//           longitudeDelta: 0.02,
//         }}>
//         <Marker
//           coordinate={{latitude: 24.8607, longitude: 67.0011}}
//           title="Our Office"
//         />
//       </MapView>

//       {/* Chat Button */}
//       <Button mode="contained" style={styles.chatButton} icon="message">
//         Live Chat
//       </Button>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, backgroundColor: '#fff'},
//   headerImage: {width: '100%', height: 200, resizeMode: 'cover'},
//   section: {padding: 20},
//   title: {fontSize: 22, fontWeight: 'bold', color: '#333'},
//   description: {fontSize: 16, color: '#666', marginTop: 5},
//   card: {margin: 20, padding: 10},
//   contactText: {fontSize: 16, marginVertical: 5},
//   socialIcons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 20,
//   },
//   map: {
//     width: '90%',
//     height: 200,
//     alignSelf: 'center',
//     borderRadius: 10,
//     marginVertical: 20,
//   },
//   chatButton: {margin: 20, backgroundColor: '#0077B5'},
// });

// export default AboutUsScreen;
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AboutUsScreen = () => {
  return (
    <View>
      <Text>AboutUsScreen</Text>
    </View>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({});
