import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './source/navigation/BottomTabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import StackScreens from './source/navigation/StackScreens'

const Tab = createBottomTabNavigator();

export default function App() {

const[fontsLoaded] = useFonts({
  'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
  'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
})

if (!fontsLoaded){
  return null;
}

  return (
      <NavigationContainer>
        <StackScreens/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
