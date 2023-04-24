import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';


const backgroundImage = require('./../assets/homeimage.jpg');

const PlaylistScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6354be645emshbac7ee7e5ccafeep16e37bjsne941890b4668',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  const searchDeezer = () => {
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/playlist/${playlistId}`, options)
      .then(response => response.json())
      .then(response => setSearchResults(response))
      .catch(err => console.error(err));
  };

  const playAudio = (previewUrl) => {
    if (!previewUrl) {
      return;
    }

    const sound = new Sound(previewUrl, '', (error) => {
      if (error) {
        console.error(error);
        return;
      }

      sound.play((success) => {
        if (!success) {
          console.error('Playback failed due to audio decoding errors.');
        }
      });
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput} 
            placeholder="Find your favorite playlist here" 
            placeholderTextColor="gray"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.searchButton} onPress={searchDeezer}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          {searchResults.tracks?.data?.map(result => (
            <TouchableOpacity 
              key={result.id} 
              style={styles.button} 
              onPress={() => playAudio(result.preview)}
            >
              <Image source={{ uri: result.album.cover_medium }} style={styles.buttonImage}/>
            </TouchableOpacity>
          ))}
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
    fontSize: 20,
    color: '#333333',
    letterSpacing: 1.5,
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
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
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

export default PlaylistScreen;
