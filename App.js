import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import AllNews from './screens/allNews';
import Splash from './screens/splash';
import Google from './screens/google';
import Info from './screens/info';
import About from './screens/about';



const Stack = createStackNavigator();
// screenOptions={{headerShown:false}}

function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown:false}}
        />
      <Stack.Screen
          name="AllNews"
          component={AllNews}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="About"
          component={About}
          
        />
        <Stack.Screen
          name="Google"
          component={Google}
          
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;