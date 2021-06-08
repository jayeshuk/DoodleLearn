import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import DrawField from '../screens/DrawField';
import SelectCategory from '../screens/SelectCategory';
import SelectItem from '../screens/SelectItem';

const {Navigator, Screen} = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator headerMode={false} initialRouteName="MainScreen">
        <Screen name="MainScreen" component={MainScreen} />
        <Screen name="SelectCategory" component={SelectCategory} />
        <Screen name="SelectItem" component={SelectItem} />
        <Screen name="DrawField" component={DrawField} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
