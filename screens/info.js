import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,ScrollView,TouchableOpacity,Linking} from 'react-native';
import * as React from 'react';
import Header from './header';
// import TestFooter from './header copy';


function Info({route}){
        return(
        <View style={{backgroundColor:"#eee",position:"relative",height:"100%"}}>
            <Header style={{position:"sticky", top:0,zIndex: 100}}/>
            <View  style={{margin:5,padding:5,backgroundColor:"#fff"}}>
                <View >
                    <Image source={{uri:route.params.item.image}} style={{width:"100%",height:200}}/>
                    
                </View>
                <View style={{flexShrink:1,margin:10}}>
                    <Text style={{fontSize:22,marginBottom:10,fontWeight:"bold",textAlign:"center"}}>{route.params.item.title}</Text>
                    <Text style={{fontSize:16}}>{route.params.item.body}</Text>

                </View>
            </View>
            {/* <TestFooter/> */}
        </View>
        )
    }
export default Info;   