import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { Audio } from 'expo-av';
import { Playback } from 'expo-av/build/AV';

const backgroundImage = require('./../assets/homeimage.jpg');

const MusicScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [audioObject, setAudioObject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const searchDeezer = (query) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '484e65b6f9msh6281e9ca07bf7b6p19eda8jsn9481d2f2c32a',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, options)
      .then(response => response.json())
      .then(response => setSearchResults(response.data))
      .catch(err => console.error(err));
  };

  const playAudio = async (audioUrl) => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync({ uri: audioUrl });
      await soundObject.playAsync();
      setAudioObject(soundObject);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (audioObject !== null) {
      return () => {
        audioObject.stopAsync();
      };
    }
  }, [audioObject]);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search for the song of your mood" 
            placeholderTextColor="gray"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.searchButton} onPress={() => searchDeezer(searchQuery)}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          {searchResults.map(result => (
            <TouchableOpacity 
              key={result.id} 
              style={styles.button} 
              onPress={() => playAudio(result.preview)}
            >
              <Image source={{ uri: result.album.cover_big }} style={styles.buttonImage}/>
              
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
    marginHorizontal: 30,
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
    backgroundColor: '#4b0082',
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

export default MusicScreen;
