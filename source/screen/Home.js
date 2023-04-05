import { View,
   Text, 
   Image, 
   Platform,
    ImageBackground, 
    TextInput, 
    FlatList} from 'react-native'

import React  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Search from './Search';
import Section from '../component/Section';
import HeaderContent from '../component/HeaderContent';
import { useState } from 'react'
import {categories }from '../externalData/ExternalData';
import Fooditem from '../component/Fooditem';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  // const navigate = () => {
  //   navigation.navigate("GrilledChicken");
  // };

    const pressHandler = () => {
    navigation.navigate("Profile");
  }; 

  return (

    <View style={{flex:1, backgroundColor:'red'}}>
        <ImageBackground 
            source={require('../../assets/images/bkgrd.jpg')}
            resizeMode="cover" 
            style={{ width:'100%',height:'100%'}}
            >

           {/* header content */}

           <HeaderContent/>
                            {/* categories */}
                      <View 
                        style={{
                          flex:1,
                          backgroundColor:'#f8f8f8',
                          borderTopRightRadius:25,
                          borderTopLeftRadius:25}}>
                            
             <Section title='Recommended'/>

                          


          </View>      
       </ImageBackground>
  
            {/* list of food item */}

            <FlatList 
            data={categories}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              console.log('items', item);
              return <Fooditem item={item}/>;

            }}/>

    </View>
  );
};

export default Home