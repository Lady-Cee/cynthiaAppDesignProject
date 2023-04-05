import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Fooditem = ({item}) => {


  const navigation = useNavigation();

  // const navigate = () => {
  //   navigation.navigate("GrilledChicken");
  // };

    const pressHandler = () => {
    navigation.navigate("Profile");
  }; 
  return (
    
    <TouchableOpacity onPress={pressHandler}>
      <View
    style={{
       backgroundColor:'white',
       margin:20,
       padding:8,
       borderRadius:12,
    }}>
       
     <Image
       source={item.image}
       resizeMode='cover'
        style={{width:100, height:80,borderRadius:12}}
     />
     <View style={{padding:12}}>
       <Text style={{fontSize:16, fontFamily:'Inter-SemiBold',fontWeight:'700'}}>
         {item.title}
       </Text>

       <Text style={{
         fontSize:14, 
         paddingTop:8, 
         fontFamily:'Inter-Regular',
         fontWeight:'600',
         color:'green'}}>
         ${item.price}
       </Text>
     </View>
     </View>    
       
    </TouchableOpacity>
  )
}

export default Fooditem