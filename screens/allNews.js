import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,ScrollView, TouchableOpacity,Linking,ActivityIndicator} from 'react-native';
import * as React from 'react';
import {useState,useEffect}from 'react';
import Header from './header';
import TestFooter from './header copy';

function AllNews({navigation}){
    const [news, setNews] = useState([]);
    const [apiState, setApiState] = useState(false);
    useEffect(() => {
        fetch('https://meendah.s3.us-east-2.amazonaws.com/allposts.json')
        .then((res)=>res.json())
        .then((data)=>{
            setNews(data),setApiState(true)
            
        })
    }, [])
    const renderData=()=>{
        if(apiState === true){
            return(
                news.map((item)=>{
                    return(
                        <TouchableOpacity key={item.id} onPress={() =>navigation.navigate('Info',{item})}>
                        <View  style={{flexDirection:"row" ,margin:5,padding:5,backgroundColor:"#fff",borderRadius:10}}>
                            <View >
                                <Image source={{uri:item.image}} style={{width:150,borderRadius:10,height:280}}/>
                            </View>
                            <View style={{flexShrink:1,margin:10}}>
                                <Text style={{fontSize:22,marginBottom:10,fontWeight:"bold"}}>{item.title}</Text>
                                <Text style={{fontSize:16}}>{item.body}</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    )
                })
            )
        }else{
            return(
                <ActivityIndicator size='large' style={{display:"flex",alignItems:"center",justifyContent:"center"}}/>
            )
        }
    }
        return(
            <View style={{backgroundColor:"#eee",height:"100%"}}>
            <Header style={{position:"sticky", top:0,zIndex: 100}} />
            <ScrollView>
            {renderData()}
            </ScrollView>
            <TestFooter/>
        </View>
        )
    }
export default AllNews;   