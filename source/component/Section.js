import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Fooditem from "./Fooditem";
import { useNavigation } from "@react-navigation/native";

const Section = ({ onPress, title, myStyle }) => {

  const navigation = useNavigation();

   
  
  const nextPage = () => {
  navigation.navigate("Profile");
}; 
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 25,
        ...myStyle,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "500", color: "black" }}>
          {title}
        </Text>
      </View>
      <TouchableOpacity style={{ justifyContent: "center" }} onPress={onPress}>
        <Text style={{ color: "green", fontSize: 14 }}>View All   </Text>
      </TouchableOpacity>


    

      <View >

      <TouchableOpacity onPress={nextPage}>
        <View style={{flexDirection:'row'}}>
       <Image source ={require('../../assets/images/food2.jpg')}
       style={{width:0, width:40}}/>
       <Image/>
       </View>
       </TouchableOpacity>
       <View>
       <Image/>
       <Text></Text>
       </View>
      </View>
    </View>
    
  );
};

export default Section;
