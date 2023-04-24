import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
  
    const user = await collection.findOne({ username, password });
    if (user) {
      navigation.navigate('Home');
    } else {
      alert('Invalid username or password');
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri:'https://media.istockphoto.com/id/1307860762/photo/sound-wave-finance-chart-neon-lightning-black-background.jpg?b=1&s=170667a&w=0&k=20&c=SskAw8pPfJtUYLzgBDudjqupQeGdDWx4nzYZ99e3dso=' }}
        style={styles.backgroundImage}
      />
      <Text style={styles.logo}>Boom-It</Text>
      <View style={styles.overlay}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('About')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity >
        
        <TouchableOpacity onPress={()=>navigation.navigate('Registeration')}>
          <Text style={styles.link}>new user? </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#ffffff',
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    paddingTop: 50,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#4b0082',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  link:{
    paddingTop: 50,
    color: 'white',
    fontWeight: 'bold',
  }
});
