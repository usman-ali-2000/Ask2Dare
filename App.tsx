import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './src/navigations/BottomNav';
import PostChallange from './src/screens/PostChallange';
import ChallengeDetail from './src/screens/ChallengeDetail';
import CameraSearch from './src/screens/CameraSearch';
import Search from './src/screens/Search';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name='BottomNav' component={BottomNav} options={{headerShown:false}} />
      <Stack.Screen name='PostChallange' component={PostChallange} options={{headerShown:false}} />
      <Stack.Screen name='ChallengeDetail' component={ChallengeDetail} options={{headerShown:false}} />
      <Stack.Screen name='CameraSearch' component={CameraSearch} options={{headerShown:false}} />
      <Stack.Screen name='Search' component={Search} options={{headerShown:false}} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})