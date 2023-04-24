import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// const backgroundImage = { uri: 'https://media.istockphoto.com/id/1307860762/photo/sound-wave-finance-chart-neon-lightning-black-background.jpg?b=1&s=170667a&w=0&k=20&c=SskAw8pPfJtUYLzgBDudjqupQeGdDWx4nzYZ99e3dso=' };

export default function AboutScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
        source={require('./../assets/imageW.gif')}
        style={styles.background}
      >
      <View style={styles.container}>
        <Text style={styles.title}>Boom It</Text>
        <Text style={styles.description}>Listen to the latest music and discover the endless world of music at the click of a button</Text>
        <Button style={styles.button} title="Start Exploring" onPress={()=>navigation.navigate('BoomIt')} color='#4b0082'/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4b0082',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

