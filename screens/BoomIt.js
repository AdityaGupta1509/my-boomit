import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('./../assets/homeimage.jpg');
const buttonImage1 = require('./../assets/artistimage.jpg');
const buttonImage2 = require('./../assets/musicimage.jpg');
const buttonImage3 = require('./../assets/playlistimage.jpg');


const BoomIt= () => {
  const handleButtonPress = () => {
    // handle button press
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       
      <ImageBackground source={backgroundImage} style={styles.image}>
        
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search for artists or songs" placeholderTextColor="gray"/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('Music')} style={styles.button}> <text style={styles.inside}>Songs</text>
            <Image source={buttonImage1} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Artist')} style={styles.button}> <text style={styles.inside}>Artist</text>
            <Image source={buttonImage2} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Playlist')} style={styles.button}> <text style={styles.inside}>Playlists</text>
            <Image source={buttonImage3} style={styles.buttonImage} />
          </TouchableOpacity>
          
          
        </View>
      </ImageBackground>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  inside: {
    color: 'white',
    fontWeight: "bold",
  },
  title: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 60,
    color: '#ffffff',
    alignSelf: 'center',
    paddingBottom: 50,
    letterSpacing: 1.5,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  searchContainer: {
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    paddingLeft: 10
  },
  searchInput: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
  width: 400,
  height: 400,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  marginHorizontal: 10,
  marginVertical: 20,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: '#fff',
  shadowColor: '#000',
  shadowOffset: { width: 2, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  elevation: 5,width: 400,
  height: 400,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  marginHorizontal: 10,
  marginVertical: 20,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: '#fff',
  },
  buttonImage: {
    width: 350,
    height: 350,
    borderRadius: 10,
    resizeMode: "contain"
  }
});

export default BoomIt;