import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const ChickenSection = () => {
  return (
   
    <View style={{ flexDirection:'row'}}>
        <View>
        <Image
            source={require('../../assets/images/chicken.png')}
            style={{width:150, height:120, borderRadius:10, marginLeft:10}}/>
        </View>

       <View style={{marginLeft:25, marginTop:20}}>
            <View  >
                <Text style={{fontFamily:'Inter-Bold', fontSize:20, lineHeight:30}} >Big Fried Chicken</Text>
            </View>

            <View >
                <Text style={{fontFamily:'Inter-Regular', fontSize:14, color:'grey', lineHeight:30}}>Gamnibar . 9.2km</Text>
            </View>

            <View style={{flexDirection:'row'}} >
                <Image source={require('../../assets/icons/star.png')}
                style={{width:15, height:15}}/><Text  style={{fontFamily:'Inter-Bold', fontSize:14, marginLeft:10}}>4.4</Text>
            </View>
            </View>

        </View>


    
  
  )
}

export default ChickenSection