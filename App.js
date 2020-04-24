import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import HomeScreen from './components/HomeScreen';


const Stack = createStackNavigator();

function App() {
  useEffect(()=>{
    // SplashScreen.hide();
  },[]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Signup' component={SignupScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
