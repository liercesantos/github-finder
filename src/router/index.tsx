import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Details from '../screens/details';

const {Navigator, Screen} = createStackNavigator();

const Router = () => {

  return (
    <NavigationContainer>
      <Navigator initialRouteName={'Home'}>
        <Screen
          name={'Home'}
          component={Home}
          options={{
            title: 'Repositórios',
            headerTitleStyle: {
              fontSize: 34,
              fontWeight: '700',
              lineHeight: 41,
              marginLeft: 16,
              marginTop: 19,
            },
          }}
        />
        <Screen name={'Details'} component={Details} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
