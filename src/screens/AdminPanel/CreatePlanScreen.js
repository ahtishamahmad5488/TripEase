import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {ICONS} from '../../constants/icons';
import CustomTextInput from '../../components/CustomTextField';
import {COLORS} from '../../constants/colors';

const CreatePlanScreen = ({navigation}) => {
  const [tourName, setTourName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setImageUri(uri);
      }
    });
  };

  const handleSubmit = () => {
    if (!tourName || !price || !imageUri) {
      Alert.alert('Please fill all fields');
      return;
    }

    console.log('Tour Name:', tourName);
    console.log('Price:', price);
    console.log('Image URI:', imageUri);
    Alert.alert('Details Submitted!');
    // Now you can send this data to Firebase or your backend
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
     <StatusBar backgroundColor="#5E3B76" barStyle="light-content" />
           <View style={styles.header}>
             <ICONS.titleIcon />
           </View>
      <View style={{marginTop: 30,paddingHorizontal:20}}>
      <View>
          <Text style={styles.labelText}>Tour Title</Text>
          <CustomTextInput
            style={styles.TextInputField}
            placeholder="Tour Name"
            placeholderTextColor={COLORS.primaryLightGrayHex}
            value={tourName}
            onChangeText={setTourName}
          />
        </View>
        <View>
          <Text style={styles.labelText}>Start Date</Text>
          <CustomTextInput
            style={styles.TextInputField}
            placeholder="Price"
            placeholderTextColor={COLORS.primaryLightGrayHex}
            value={price}
            onChangeText={setPrice}
          />
        </View>
      </View>

      <View style={{marginTop: 30,paddingHorizontal:20}}>
        <TouchableOpacity
          onPress={selectImage}
          style={{backgroundColor: '#ccc', padding: 12, borderRadius: 10}}>
          <Text style={{textAlign: 'center', fontWeight: '500', fontSize: 14}}>
            Select Image
          </Text>
        </TouchableOpacity>
      </View>

      {imageUri && (
        <Image
          source={{uri: imageUri}}
          style={{
            width: 150,
            height: 150,
            marginBottom: 10,
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 20,
            justifyContent: 'center',
          }}
        />
      )}
     <View style={{marginTop:30,paddingHorizontal:20}}>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CreatePlanDetailScreen")}>
        <Text style={styles.buttonText}>Next Plan Details</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
};

export default CreatePlanScreen;

const styles = StyleSheet.create({
   header: {
    backgroundColor: '#5E3B76',
    padding: 20,
  },
  labelText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  TextInputField: {
    backgroundColor: COLORS.primaryWhiteHexRGBA,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0ACF83',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
