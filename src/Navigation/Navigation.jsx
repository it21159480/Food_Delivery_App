import React  from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import ProductDetailsScreen from '../Screen/ProductDetailsScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
         <StatusBar backgroundColor={"white"} barStyle="dark-content"  />
         <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='HomeScreen'>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='ProductDetailsScreen' component={ProductDetailsScreen}/>
         </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation