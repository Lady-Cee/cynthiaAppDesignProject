import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Contact from '../screen/Contact';
import Profile from '../screen/Profile';
import Search from '../screen/Search';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{headerShown:true, tabBarShowLabel:false}}
    >
        <Tab.Screen
            name ='Home' 
            component={Home}
            options={{
                headerShown:false,
                tabBarIcon: () => {
                    return(
                        <View
                            style={{
                                paddingTop:12,
                                alignItems:'center',
                                justifyContent:'center',
                            }}>
                            
                            <Image
                                source={require('../../assets/icons/home.png')}
                                style={{
                                    width:20,
                                    height:20,
                                    tintColor:'#9CBAAD',
                                }} />                
                        </View>
                    )
                }
            }}
       />

        <Tab.Screen
            name ='Contact' 
            component={Contact}
            options={{
                headerShown:false,
                tabBarIcon: () => {
                    return(
                        <View
                            style={{
                                paddingTop:12,
                                alignItems:'center',
                                justifyContent:'center',
                            }}>
                            
                            <Image
                                source={require('../../assets/icons/chat.png')}
                                style={{
                                    width:20,
                                    height:20,
                                    tintColor:'#9CBAAD',
                                }} />                
                        </View>
                    )
                }
            }}
       />

    <Tab.Screen
            name ='Search' 
            component={Search}
            options={{
                headerShown:false,
                tabBarIcon: () => {
                    return(
                        <View
                            style={{
                                paddingTop:12,
                                alignItems:'center',
                                justifyContent:'center',
                            }}>
                            
                            <Image
                                source={require('../../assets/icons/searchbtn.png')}
                                style={{
                                    width:20,
                                    height:20,
                                    tintColor:'#9CBAAD',
                                }} />                
                        </View>
                    )
                }
            }}
       />

        <Tab.Screen
            name ='Profile' 
            component={Profile}
            options={{
                headerShown:false,
                tabBarIcon: () => {
                    return(
                        <View
                            style={{
                                paddingTop:12,
                                alignItems:'center',
                                justifyContent:'center',
                            }}>
                            
                            <Image
                                source={require('../../assets/icons/user.png')}
                                style={{
                                    width:20,
                                    height:20,
                                    tintColor:'#9CBAAD',
                                }} />                
                        </View>
                    )
                }
            }}
       />
   
       
        

    </Tab.Navigator>
  )
}

export default BottomTabs