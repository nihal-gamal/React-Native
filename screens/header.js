import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity ,SafeAreaView} from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

// import { goBack } from './../node_modules/.staging/@react-navigation/routers-e705f498/lib/module/CommonActions';

function Header(){
    const navigation=useNavigation();
        return(
        <SafeAreaView style={{width:"100%",height:70,backgroundColor:"#ccc",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:30}}>
            <TouchableOpacity onPress={() =>navigation.navigate('AllNews')}>
                <Image source={require('../assets/home.png')} style={{width:30,height:30,margin:30}} />
            </TouchableOpacity>
            <Text style={{fontSize:20,fontWeight:"bold"}}>All News</Text>
            <TouchableOpacity onPress={() =>navigation.navigate('Google')}>
                <Image source={require('../assets/search.png')} style={{width:30,height:30,margin:30}} />
            </TouchableOpacity>
        </SafeAreaView>
        )
    }
export default Header;  