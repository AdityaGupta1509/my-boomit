import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MusicControls = ({ currentSong, isPlaying, onPlay, onPause }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.currentSong}>{currentSong}</Text>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={isPlaying ? onPause : onPlay}>
          <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  currentSong: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4b0082',
    padding: 10,
    borderRadius: 5,
    marginLeft: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
};

export default MusicControls;
