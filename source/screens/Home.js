import { View, Text, Button, ImageBackground, Image, FlatList, TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Section from '../components/Section';
import HeaderContent from '../components/HeaderContent';
import FoodItem from '../components/FoodItem';
import  {categories}  from '../external_data/externalData';
import NearSection from '../components/NearSection';
import ChickenSection from '../components/ChickenSection';
import { ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({navigation}) => {
   
  return (
    <SafeAreaView style={{ flex: 1,
        paddingTop: StatusBar.currentHeight,}}>
        <ScrollView style={{  marginHorizontal: 20,
        }}>
    <View  style={{flex:1}}>
        <ImageBackground
                source={require('../../assets/images/bkgrd.jpg')} 
                resizeMode="cover" 
                style={{width:'100%', height:'100%'}}>

                    {/*Header content details */}

                    <HeaderContent/>
      
                   {/*categories  */}
            <View 
            style={{
                flex:1, 
                borderTopLeftRadius:25,
                borderTopRightRadius:25,
                backgroundColor:'#f8f8f8'}}>

                    <Section title='Recommended'/>
                   
                   

                    
                    {/* list of food items */}

                    <FlatList
                    data={categories}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({item, index})=>{
                        return (
                           <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                                 <FoodItem
                                 FoodContent={item} 
                                 marginLeft={index == 0 ? 20 : 12}
                                 marginRight={index == item.length-1? 20 : 8}
                                 />
                           </TouchableOpacity>
                        ) 

                    }}/>


                    
        <NearSection title='Near of you'/> 

        <ChickenSection/>
    
                </View>
           
        </ImageBackground>
 
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home;