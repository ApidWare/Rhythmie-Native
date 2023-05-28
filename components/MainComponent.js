import React from 'react';
import { View } from 'react-native';
import Homepage from '../screens/Homepage';
import Topbar from './homeComponents/Topbar';
import Navbar from './bottomNavComponents/Navbar';
import MiniPlayer from './bottomControls/MiniPlayer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from '../screens/Explore';

const Stack = createNativeStackNavigator();

function MainComponent() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="Home" component={Homepage} />
            <Stack.Screen name="Explore" component={Explore} />
          </Stack.Navigator>
        </View>
        <Topbar />
      </View>
    </NavigationContainer>
  );
}

export default MainComponent;
