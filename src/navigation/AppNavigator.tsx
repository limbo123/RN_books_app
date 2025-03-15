import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BooksLibrary from '../screens/BooksLibrary';
import BookDetails from '../screens/BookDetails';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Main" component={BooksLibrary} />
        <Stack.Screen name="Details" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
