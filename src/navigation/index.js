import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from '../utils/';
import {useSelector} from 'react-redux';

//Stacks
import AuthStack from './authStack';
import AppStack from './appStack';

export default Routes = () => {
  const isLogin = useSelector(state => state.loginReducer.isLogin);
  return (
    <NavigationContainer
      ref={navigatorRef => Navigator.setTopLevelNavigator(navigatorRef)}>
      {isLogin ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
