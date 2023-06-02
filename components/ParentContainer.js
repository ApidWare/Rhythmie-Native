import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Explore from '../screens/Explore';
import MainComponent from './MainComponent';
// import {TransitionPresets} from '@react-navigation/stack';
// import Navbar from './bottomNavComponents/Navbar';
import Topbar from './homeComponents/Topbar';
import MVs from '../screens/MVs';
import Library from '../screens/Library';

const Stack = createNativeStackNavigator();

function ParentContainer() {
  return (
    <NavigationContainer>
      <View style={{flex: 1, backgroundColor: '#1d112d'}}>
        <View style={{flex: 1}}>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={MainComponent} />
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen name="MVs" component={MVs} />
            <Stack.Screen name="Library" component={Library} />
          </Stack.Navigator>
        </View>
        {/*<Navbar />*/}
        <Topbar />
      </View>
    </NavigationContainer>
  );
}

export default ParentContainer;
