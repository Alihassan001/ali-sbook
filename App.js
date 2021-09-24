import 'react-native-gesture-handler';
import NavigationContainer from './src/navigation';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';

import ConfigureStore from './src/store';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <ConfigureStore>
      <NavigationContainer />
    </ConfigureStore>
  );
};

export default App;
