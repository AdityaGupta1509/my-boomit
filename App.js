import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

// screens
import WelcomeScreen from './screens/Welcome';
import LoginScreen from './screens/Login';
import RegistrationScreen from './screens/Registeration';
import MusicScreen from './screens/Music';
import ArtistScreen from './screens/Artist';
import BoomIt from './screens/BoomIt';
import PlaylistScreen from './screens/Playlist';
import AboutScreen from './screens/About'


const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4b0082', // change the color here
            },
            headerTintColor: '#ffffff', // change the text color here
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Registeration" component={RegistrationScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="BoomIt" component={BoomIt} />
          <Stack.Screen name="Music" component={MusicScreen} />
          <Stack.Screen name="Artist" component={ArtistScreen} />
          <Stack.Screen name="Playlist" component={PlaylistScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
