import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput,Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const backgroundImage = require('./../assets/image3.jpg');

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
 
  //email validation
  const [isValidEmail, setIsValidEmail] = useState(false);
  const emailRegex = /\S+@\S+\.\S+/;



 
  const handleRegistration = async () => {
    try {
      // Send a POST request to the server with the user data
      const response = await fetch('http://127.0.0.1:19000/api/users', {  //*****/
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          username,
          age,
          password,
          email
        })
      });
  
      if (!response.ok) {
        // If the response from the server is not ok (i.e. 4xx or 5xx status code),
        // throw an error with the response status text
        throw new Error(response.statusText);
      }
  
      // Navigate to login screen
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
      setErrorMessage('Registration failed. Please try again later.');
    }
  }
  
  
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (password !== retypePassword) {
      setErrorMessage("Passwords don't match");
    } else {
      // Handle form submission
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.logo}>BoomIt</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}          
            secureTextEntry={true}
            placeholder="Retype password"
            value={retypePassword}
            onChangeText={(text) => setRetypePassword(text)}
          />          
          <TextInput
          icon="mail"
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setIsValidEmail(emailRegex.test(text));
          }}
          />
          <TouchableOpacity style={[styles.button, !isValidEmail && { opacity: 0.5 }]} onPress={()=>navigation.navigate('Login')}
          disabled={!isValidEmail}>
          <Text style={styles.buttonText}>Register</Text> 
          </TouchableOpacity>
          {errorMessage ? <Text>{errorMessage}</Text> : null}
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.link}>Already an existing user? </Text>
        </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#ffffff',
    marginBottom: 50,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    maxWidth: 400,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
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
  },
  link:{
    paddingTop: 50,
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  }
});