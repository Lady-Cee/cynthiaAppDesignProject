import { View, Text, Pressable,  Button, Image,ImageBackground, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';


const Profile = () => {

  const [count, setCount] = useState(0);
  let incrementCount = () =>{
      setCount (count + 1) 
  }

  let decrementCount = () =>{
    if (count > 0) {
      setCount (count - 1) 
    }
  }

  // let resetCount = () => {
  //     let count=0
  // }

  return (
    <SafeAreaView style={{ flex: 1,
      paddingTop: StatusBar.currentHeight,}}>
    <ScrollView style={{  marginHorizontal: 20,
    }}>
    
    <View style={{ flex: 1}}>

      <ImageBackground 
      
         source={require('../../assets/images/foodbkgrd.png')} 
         resizeMode="cover" 
         style={{width:'100%', height:'100%', }}>

        <View style={{flexDirection:'row', 
        justifyContent:'space-between',
         margin:20,
         
       
       }}>
            <View>
              <Image
                source={require('../../assets/icons/backarrow.png')}
                style={{width:30, height:30, tintColor:'black', backgroundColor:'white',borderColor:'white', borderWidth:5, borderRadius:8  }}/>
                
          </View>

          <View style={{flexDirection:'column'}}>
              <Image
                source={require('../../assets/icons/bag.png')}
                style={{width:30, height:30, tintColor:'black', backgroundColor:'white', borderColor:'white', borderWidth:5, borderRadius:8 }}/>
                
          </View>
          </View>

          <View style={{flex:1,alignItems:'center'}} >
              <Image 
                source={require('../../assets/images/food1.jpg')}
                style={{resizeMode: 'contain', justifyContent:'center', marginTop:30, width:200, height:100}}/>
          </View>

     

          <View 
            style={{
                flex:1, 
                 backgroundColor:'white'}}>

                  <View style={{flexDirection:'row'}}>

                <View style={{padding:20}}>
                  <Text style={{fontFamily:'Inter-Bold', fontSize:18}}>Grilled Cheese Salad</Text>
                  <Text style={{fontFamily:'Inter-Bold', fontSize:18}}>with cream</Text>
                
                  </View>

                      <View style={{flexDirection:'row', marginTop:20, borderWidth:3, borderRadius:40, paddingRight:30, borderColor:'whitesmoke', backgroundColor:'whitesmoke', marginLeft:220, paddingTop:15, marginBottom:20}}>
                                
                         <View style={{marginLeft:20, }}>
                            <Pressable onPress={decrementCount} >
                              <Image source={require('../../assets/icons/minus.png')}
                              style={{width:10,
                              height:10,
                              borderWidth:5, 
                              marginTop:5,
                              marginTop:-10 ,
                              borderRadius:50,
                              padding:7,
                              borderColor:'white',
                              tintColor:'orange'  }}/>
                            </Pressable>
                       </View>
                              <Text style={{marginTop:-7, marginLeft:20, fontFamily:'Inter-SemiBold', fontSize:16}}>{count}</Text>

                       <View style={{}}>
                         <Pressable onPress={incrementCount}>
                         <Image source={require('../../assets/icons/plus.png')}
                            style={{width:5,height:5, 
                            marginLeft:25,
                            borderWidth:5, 
                            marginTop:5,
                            marginTop:-10 ,
                            borderRadius:50,
                            padding:7,
                            borderColor:'orange',
                            backgroundColor:'orange',
                            tintColor:'white'}}/>


                         </Pressable>
                       </View>
                       </View>

                     </View>

                  <View style={{flexDirection:'row' ,paddingLeft:20, justifyContent:'space-between'}}>
                      <View>
                         <Image source={require('../../assets/icons/location.png')}
                         style={{width:20, height:20, tintColor:'orange'}}/>
                      </View>

                      <View>
                         <Text style={{fontFamily:'Inter-Regular', paddingTop:2,  fontSize:12, color:'grey'}}>2.3 km</Text>
                      </View>
                 

                    <View>
                         <Image source={require('../../assets/icons/star.png')}
                         style={{width:20, height:20, tintColor:'orange'}}/>
                      </View>

                      <View>
                         <Text style={{fontFamily:'Inter-Regular', paddingTop:2,  fontSize:12, color:'grey'}}>4.7 Ratings</Text>
                      </View>

                      <View>
                         <Image source={require('../../assets/icons/calendar.png')}
                         style={{width:20, height:20, tintColor:'orange'}}/>
                      </View>

                      <View>
                         <Text style={{fontFamily:'Inter-Regular', paddingTop:2,  fontSize:12, color:'grey', paddingRight:50}}>20-24 Min</Text>
                      </View>

                 </View>

                   
  


                      <View style={{justifyContent:'center', marginTop:30, paddingLeft:20}}> 
                            <Text style={{fontFamily:'Inter-Bold', fontSize:18}}>Description</Text>
                            <Text style={{marginTop:20, color:'grey', fontFamily:'Inter-Regular', fontSize:14}}>Originating from Cyprus, semisoft and slightly</Text>
                            <Text style={{ color:'grey', fontFamily:'Inter-Regular', lineHeight:25, fontSize:14}}>nutty halloumi cheese resists melting when </Text>
                            <Text style={{ color:'grey', fontFamily:'Inter-Regular', fontSize:14}}>heated so you can luxuriate <TouchableOpacity style={{fontFamily:'Inter-SemiBold', color:'green'}}>Read More...</TouchableOpacity></Text>
                      </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                      <View style={{flexDirection:'row', marginTop:30, 
                            borderRadius:40,
                            borderWidth:2,
                            borderColor:'orange',
                            padding:20 }}>
                         <View>
                            <Image source={require('../../assets/icons/chat.png')}
                            style={{width:30, height:30, tintColor:'orange', }}/>
                         </View>

                         <View>
                          <Text style={{ color:'orange', paddingLeft:15, fontFamily:'Inter-SemiBold', fontSize:14,  marginTop:5}}>Chat</Text>
                         </View>

                       

                      </View>

                      <View style={{marginTop:30,  paddingRight:50}}>
                          <Text style={{borderWidth:3,
                             borderRadius:40, 
                             borderColor:'orange', 
                             fontFamily:'Inter-SemiBold', 
                             fontSize:14,
                             padding:20, 
                             color:'white', 
                             backgroundColor:'orange',
                             }}>Add Cart</Text>
                        </View> 

                      </View>
        
         </View>


      </ImageBackground>

      </View>

  
</ScrollView>
</SafeAreaView>
    
  );
}

export default Profile

    
{/* <View>
      <Button
        title="Go back"
        onPress={() => navigation.navigate('Home')}
      />
      </View> */}