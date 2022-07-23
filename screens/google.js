import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import * as React from 'react';
import {WebView} from 'react-native-webview';

function Google(){
        return(
        <WebView style={{padding:40,margin:10}} source={{uri:'https://google.com'}}/> 
        
        )
    }
export default Google;   