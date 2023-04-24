import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-dom';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../assets/imageW.gif')}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>BoomIt</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Registeration')}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
         
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText} >Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fff',
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 25,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default WelcomeScreen;
