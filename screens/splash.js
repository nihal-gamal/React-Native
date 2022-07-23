import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ActivityIndicator } from 'react-native';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Splash({navigation}){
const navigateHome =()=>{
    AsyncStorage.getItem("nihal").then((value)=>{
        if(value){
            setTimeout(()=>{
                navigation.navigate('AllNews')
            },200)
        }else{
            setTimeout(()=>{
                navigation.navigate('About')
            },200)
        }
    })
    }
        return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"black"}}>
            <Image source={require('../assets/car.png')} style={{width:100,height:100,borderRadius:50}}/>
            <Text style={{color:"white",margin:10,fontSize:20}}>News</Text>
            <ActivityIndicator size="large" color="white"></ActivityIndicator>
            {navigateHome()}
        </View>
        )
    }
export default Splash;  