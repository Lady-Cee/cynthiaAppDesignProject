import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Contact from '../screens/Contact';

import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/icons/home.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#0077b6",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/icons/chat.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#0077b6",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/icons/searchbtn.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#0077b6",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/icons/user.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#0077b6",
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
