import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Grows from '../../screens/Grows';
import Settings from '../../screens/Settings';
import Calculators from '../../screens/Calculators';
import Upgrade from '../../screens/Upgrade';
import AddGrow from '../../screens/AddGrow';
import EditGrow from '../../screens/EditGrow';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
     <Stack.Screen
        name="Grows"
        component={Grows}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddGrow"
        component={AddGrow}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditGrow"
        component={EditGrow}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Calculators"
        component={Calculators}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Upgrade"
        component={Upgrade}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
