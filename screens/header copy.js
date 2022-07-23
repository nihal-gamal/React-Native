import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity ,Linking} from 'react-native';

import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

// import { goBack } from './../node_modules/.staging/@react-navigation/routers-e705f498/lib/module/CommonActions';

function TestFooter(){
    const navigation=useNavigation();
        return(
            <View style={{width:"100%",padding:30,height:70,backgroundColor:"#ccc",flexDirection:"row",alignItems:"center",justifyContent:"space-between",position:'sticky',bottom:0,left:0,right:0}}>
                <TouchableOpacity onPress={()=>{Linking.openURL('whatsapp://send?Text=nihal&phone=+201003919825')}}>
                    <Image source={require("../assets/whatsapp.png")} style={{width:30,height:30}}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() =>navigation.navigate('About')}>
                    <Image source={require("../assets/information.png")} style={{width:30,height:30}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>navigation.navigate('AllNews')}>
                    <Image source={require("../assets/home.png")} style={{width:30,height:30}}/>
                </TouchableOpacity>
            </View>
        )
    }
export default TestFooter;  