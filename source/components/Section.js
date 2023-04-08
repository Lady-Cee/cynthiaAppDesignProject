import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import NearSection from './NearSection'

const Section = ({onPress,title,myStyle}) => {
  return (

  
    <View 
    style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:15,
        marginTop:25,
        ...myStyle,

    }}>
      <View style={{
        flex:1, justifyContent:'center'}}>
            <Text style={{
                fontFamily:'Inter-SemiBold', 
                fontSize:18,
                 fontWeight:'500', 
                 color:'black'}}>{title}</Text>
      </View>

      <TouchableOpacity style={{justifyContent:'center'}} onPress={onPress}>
                <Text style={{fontFamily:'Inter-SemiBold', 
                fontSize:14, 
                 color:'green'}}>View All</Text>
      </TouchableOpacity>

   
      
    </View>

    

  )
}

export default Section