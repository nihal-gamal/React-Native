
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import * as React from 'react';
// import {Button} from 'react-native-web';

function HomeScreen({navigation}){
        return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>Home Screen </Text>
            <Button title='Go To About' onPress={() =>navigation.navigate('About')}/>
        </View>
        )
    }
export default HomeScreen;   