import { View, Text, Image, TextInput, Platform } from 'react-native'
import React, {useState} from 'react';

const HeaderContent = () => {
    const [search, setSearch] = useState('');
  return (
       
    <View style={{flex: Platform.OS === 'ios' ? 0.6: 0.8}}>
           
       
    {/* Menu icons */}
  
               

       <View 
           style={{
               marginTop: Platform.OS === 'ios' ? 60 : 35, 
               marginHorizontal:17,
               flexDirection:'row', 
               justifyContent:'space-between'}}>

           <View style={{flex:1,justifyContent:'centre'}}>
               <Image
                   source={require('../../assets/icons/menu.png')}
                   style={{width:25, height:25, tintColor:'white'}} />
           </View>

           <View style={{paddingRight:25, justifyContent:'centre'}}>
               <Image
                   source={require('../../assets/icons/bag.png')}
                   style={{width:25, height:25, tintColor:'white'}} />

           </View>

           <View style={{justifyContent:'centre'}}>
               <Image
                   source={require('../../assets/icons/bell.png')}
                   style={{width:25, height:25, tintColor:'white'}} />

           </View>

     </View> 
   

      {/* header text */}

      <View style={{marginTop:30, marginLeft:16, marginBottom:30}}>
       
           <Text style={{color:'white', lineHeight:40,fontFamily:'Inter-SemiBold', fontSize:25, fontWeight:'600'}}>Delicious food ready to</Text>  
           
           <View style={{flexDirection:'row', justifyContent:'space-between'}}>
               <View style={{justifyContent:'center'}}>
               <Text style={{color:'white', lineHeight:30, fontFamily:'Inter-SemiBold', fontSize:25, fontWeight:'600'}}>delivered for you</Text>  
               </View>
           

           <View style={{flex:1, paddingLeft:10, justifyContent:'center'}}>
               <Image
                source={require('../../assets/icons/food.png')}
                style={{width:25, height:25, tintColor:'pink'}}/>

           </View>
           </View>
      </View>
                   {/* search bar */}

          <View 
           style={{
               backgroundColor:'#caf0ff8',
               height:50,
               borderWidth:0.25,
               borderColor:'white',
               // marginBottom:15,
               flexDirection:'row',
               paddingHorizontal:15,
               marginHorizontal:30,
               borderRadius:12,
               marginLeft:16

           }}>
               <View style={{justifyContent:'center'}}>
                   <Image
                       source={require('../../assets/icons/searchbtn.png')}
                           style={{width:25, height:25, tintColor:'white', justifyContent:'center'}}/>
               </View>

               <TextInput
                   autoFocus={false}
                   onChangeText={(text) => searchFilterFunction(text)}
                   value={search}
                   placeholder= {'Search food would you like to eat                                       '}
                   style={{
                       color:'white',
                       paddingLeft:12,
                       fontFamily:'Inter-Regular',
                       justifyContent:'center'
                   }}
                   />
          </View>
        </View> 
  )
}

export default HeaderContent;