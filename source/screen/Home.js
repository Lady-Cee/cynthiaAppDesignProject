import { View, Text, Image } from 'react-native'
import React from 'react'
import TopHeader from '../component/TopHeader'


const Home = () => {
  return (
      <TopHeader header_img={require('../../assets/icons/menu.png')}/>
  )
}

export default Home