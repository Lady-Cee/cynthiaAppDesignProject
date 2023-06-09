import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from './BottomTabs';
import Profile from "../screens/Profile";



const Stack = createNativeStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={BottomTabs} />
      <Stack.Screen name="ProfileScreen" component={Profile} />
     
    </Stack.Navigator>
  );
};

export default StackScreens;