import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';

//Screen
import {Home, NewPost} from '../screens';

//Nav Stack
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
      }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="NewPostScreen" component={NewPost} />
    </Stack.Navigator>
  );
};

export default AppStack;
