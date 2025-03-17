import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BooksLibrary from 'src/screens/BooksLibrary';
import BookDetails from 'src/screens/BookDetails';
import LoadingScreen from 'src/screens/LoadingScreen';
import { SCREENS } from 'src/navigation/screens';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.LOADING_SCREEN}>
        <Stack.Screen
          name={SCREENS.LOADING_SCREEN}
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={SCREENS.BOOK_LIBRARY_SCREEN} component={BooksLibrary} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS.BOOK_DETAILS_SCREEN} component={BookDetails} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
