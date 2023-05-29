import React from 'react';
import {View} from 'react-native';
import Homepage from '../screens/Homepage';
import Topbar from './homeComponents/Topbar';
import Navbar from './bottomNavComponents/Navbar';
import MiniPlayer from './bottomControls/MiniPlayer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Explore from '../screens/Explore';
import MainComponent from './MainComponent';

const Stack = createNativeStackNavigator();

function ParentContainer() {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={MainComponent} />
            <Stack.Screen name="Explore" component={Explore} />
          </Stack.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}

export default ParentContainer;
