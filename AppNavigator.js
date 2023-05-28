import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Homepage from './screens/Homepage';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homepage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
