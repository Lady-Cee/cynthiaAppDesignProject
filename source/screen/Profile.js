
import { View, Text,  ImageBackground, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const Profile = () => {
  const[fontsLoaded] = useFonts({
    'Inter-Black': require('../../assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
  })
  
  if (!fontsLoaded){
    return null;
  }
  return (
    <View style={{ alignItems:'center', flex:0.5, justifyContent:'center'}}>
         <ImageBackground 
            source={require('../../assets/images/foodbkgrd1.jpg')}
            resizeMode='cover' 
            style={{ width:'100%',height:'90%',}}
            >
                {/* headercontent */}
      <View style={{flexDirection:'row', margin:30, justifyContent:'space-between' }}>
          <View style={{justifyContent:'center'}}>
            <Image
            source={require('../../assets/icons/backarrow.png')}
            style={{width:20, height:20, tintColor:'black', backgroundColor:'white', borderRadius:5}}/>
            
          </View>

          <View style={{justifyContent:'center'}}>
            <Image
            source={require('../../assets/icons/bag.png')}
            style={{width:20, height:20, tintColor:'black', backgroundColor:'white', borderRadius:5}}/>
            
          </View>
   </View>

          <View style={{flex:0.5, justifyContent:'center'}}>
              <Image
              source={require('../../assets/images/food1.jpg')}
              style=
              {{width:150, 
              height:150,
               marginHorizontal:110,
               }}/>
          </View>
        <View>

      </View>


            </ImageBackground>

               <View style={{}}>
                <View style={{}}>
                <Text style={{fontSize:18, fontFamily:'Inter-Bold' }}>Grilled Chilled Salad     </Text>
                </View>
               
                <Text style={{fontSize:18, fontFamily:'Inter-Bold'}}>with cream</Text>
                </View>

                <View>
                  <View></View>
                </View>
            
    </View>
  )
}

export default Profile