import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import * as React from 'react';
import{useEffect,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function About(){
    const [first, setfirst] = useState()
    useEffect(() => {
      AsyncStorage.setItem("nihal","yeeess")
    
      
    }, [])
    
        return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Image source={require('../assets/car.png')} style={{width:200,height:200}}/>
            <Text>About Screen Test</Text>
        </View>
        )
    }
export default About;   