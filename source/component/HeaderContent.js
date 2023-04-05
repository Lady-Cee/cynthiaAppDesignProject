import { View, Text, Image, TextInput, Platform, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';



const HeaderContent = () => {
    const[search, setSearch] =useState('');

    const navigation = useNavigation();

   
  
      const nextPage = () => {
      navigation.navigate("Profile");
    }; 
  return (
        
         <View 
             style ={{ flex: Platform.OS === "ios" ? 0.6 : 0.5}}>

                <View 
                 style={{
                   marginTop: Platform.OS === 'ios' ? 60 : 35,
                   marginHorizontal:17, 
                   flexDirection:'row',
                   justifyContent: 'space-between'}}>

                   <View style={{flex:1, justifyContent:'center'}}>
                     <Image 
                       source={require('../../assets/icons/home.png')}
                      style={{width:25, height:25, tintColor:'white'}}/>
                   </View>

                   <View style={{ paddingRight:25, justifyContent:'center'}}>
                     <Image 
                     source={require('../../assets/icons/bag.png')}
                     style={{width:25, height:25, tintColor:'white'}}/>
                   </View>

                   <View style={{justifyContent:'center'}}>
                     <Image source={require('../../assets/icons/bell.png')}
                      style={{width:25, height:25, tintColor:'white'}}/>
                   </View>
                </View>

             {/* header text */}

                   <View  style={{marginTop:30, marginLeft:16}}>
                     <Text
                         style={{
                           color:'white', 
                           lineHeight:35, 
                           fontSize:25, 
                           fontWeight:'600', 
                           fontFamily:'Inter-Regular'}}>
                             Delicious food ready to
                           </Text>
                     <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                      <TouchableOpacity onPress={nextPage}>
                      <View style={{justifyContent:'center'}}>
                         <Text 
                           style={{
                             color:'white', 
                             lineHeight:35, 
                             fontSize:25, 
                             fontWeight:'600', 
                             fontFamily:'Inter-Regular'}}>
                               delivered for you
                        </Text>
                       </View>

                      </TouchableOpacity>
              
                     
                     <View style={{ flex:1, paddingLeft: 10, justifyContent:'center'}}>
                       <Image
                         source={require('../../assets/icons/food.png')}
                         style={{width:25, height:25, tintColor:'white'}}
                         />
                     </View>
                   </View>
                   </View>

                   {/* serch bar */}

                   <View 
                     style={{
                       backgroundColor:null,
                       height:50,
                       borderWidth:1,
                       borderColor:'white',
                       marginTop:12,
                       marginBottom:15,
                       flexDirection:'row',
                       paddingHorizontal:15,
                       marginHorizontal:30,
                       borderRadius:21,

                       }}>
                       
                         <View style={{justifyContent:'center'}}>
                             <Image
                               source={require('../../assets/icons/searchbtn.png')}
                               style={{
                                   width:25,
                                   height:25,
                                   justifyContent:'center',
                                   tintColor:'white'
                               }}
                               />
                         </View>
                         <TextInput
                           autoFocus={false}
                           onChangeText={(setSearch)}
                           value={search}
                           placeholder={'Search food would you like to eat'}
                           placeholderTextColor={'white'}
                           style={{
                             color:'black',
                             paddingLeft:12,
                             justifyContent:'center',
                           }}
                         />
                   </View>
             </View>
  );
};

export default HeaderContent