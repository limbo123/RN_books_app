import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import remoteConfig from '@react-native-firebase/remote-config';

const App = () => {
  useEffect(() => {
    remoteConfig()
      .setDefaults({
        json_data: '{}',
      })
      .then(() => remoteConfig().fetchAndActivate())
      .then(fetchedRemotely => {});
  }, []);
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
