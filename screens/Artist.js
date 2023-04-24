import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';


const backgroundImage = require('./../assets/homeimage.jpg');

const ArtistScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const artists = [
    {
      id: 1,
      name: 'BTS',
      image: 'https://assets.teenvogue.com/photos/5f4b199ccdf5ef8a7ed62a1d/1:1/w_1950,h_1950,c_limit/tout.jpg',
    },
    {
      id: 2,
      name: 'Taylor Swift',
      image: 'https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/ypl8mcswjow3jibjgmjn.jpg',
    },
    {
      id: 3,
      name: 'TXT',
      image: 'https://i.pinimg.com/474x/87/02/c0/8702c0f557b385c6733a6bb67a90ede8.jpg',
    },
    {
      id: 4,
      name: 'Arijit Singh',
      image: 'https://pbs.twimg.com/profile_images/1552550436795990016/R4sCpDtJ_400x400.jpg',
    },
    {
      id: 5,
      name: 'Rihanna',
      image: 'https://pyxis.nymag.com/v1/imgs/c51/283/02672dc4316e74ab7b3b9d932bcbd537a8-rihanna.1x.rsquare.w1400.jpg',
    },
    {
      id: 6,
      name: 'Bruno Mars',
      image: 'https://pm1.narvii.com/6702/2674ce1be2f804b782ec289b8cff735e2edc474e_00.jpg',
    },
    {
      id: 7,
      name: 'Ariana Grande',
      image: 'https://64.media.tumblr.com/960fb6b609bc277ea126db50ce44d64d/c46d10c50e928815-c5/s1280x1920/30c651ce4f6dbd44e0633b24ac0d514953a7d1a3.jpg',
    },
    {
      id: 8,
      name: 'Bruno Mars',
      image: 'https://pm1.narvii.com/6702/2674ce1be2f804b782ec289b8cff735e2edc474e_00.jpg',
    },
    {
      id: 9,
      name: 'Lady Gaga',
      image: 'https://hips.hearstapps.com/hmg-prod/images/lady-gaga-642fdd6b77ab7.png',
    },
  ];

  const handleSearch = () => {
    const filteredArtists = artists.filter(artist =>
      artist.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredArtists);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for your favorite artists"
            placeholderTextColor="gray"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />
          {!!searchQuery && (
            <TouchableOpacity style={styles.clearSearchButton} onPress={handleClearSearch}>
              <Text style={styles.clearSearchButtonText}>Clear</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.buttonContainer}>
          {searchResults.length > 0 ? (
            searchResults.map(artist => (
              <TouchableOpacity key={artist.id} style={styles.button}>
                <Image source={{ uri: artist.image }} style={styles.buttonImage} />
                <Text style={styles.buttonText}>{artist.name}</Text>
              </TouchableOpacity>
            ))
          ) : (
            artists.map(artist => (
              <TouchableOpacity key={artist.id} style={styles.button}>
                <Image source={{ uri: artist.image }} style={styles.buttonImage} />
                <Text style={styles.buttonText}>{artist.name}</Text>
              </TouchableOpacity>
              
            ))
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

// const ArtistScreen = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '6354be645emshbac7ee7e5ccafeep16e37bjsne941890b4668',
//       'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//     }
//   };

//   const searchDeezer = () => {
//     fetch(`https://deezerdevs-deezer.p.rapidapi.com/playlist/${playlistId}`, options)
//       .then(response => response.json())
//       .then(response => setSearchResults(response))
//       .catch(err => console.error(err));
//   };

//   const playAudio = (previewUrl) => {
//     if (!previewUrl) {
//       return;
//     }

//     const sound = new Sound(previewUrl, '', (error) => {
//       if (error) {
//         console.error(error);
//         return;
//       }

//       sound.play((success) => {
//         if (!success) {
//           console.error('Playback failed due to audio decoding errors.');
//         }
//       });
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <ImageBackground source={backgroundImage} style={styles.image}>
//         <View style={styles.searchContainer}>
//           <TextInput 
//             style={styles.searchInput} 
//             placeholder="Search for your favorite artists" 
//             placeholderTextColor="gray"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//           <TouchableOpacity style={styles.searchButton} onPress={searchDeezer}>
//             <Text style={styles.searchButtonText}>Search</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.buttonContainer}>
//           {searchResults.tracks?.data?.map(result => (
//             <TouchableOpacity 
//               key={result.id} 
//               style={styles.button} 
//               onPress={() => playAudio(result.preview)}
//             >
//               <Image source={{ uri: result.album.cover_medium }} style={styles.buttonImage}/>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

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

export default ArtistScreen;
