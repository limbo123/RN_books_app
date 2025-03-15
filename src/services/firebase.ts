import remoteConfig from '@react-native-firebase/remote-config';

export const fetchRemoteConfig = async () => {
  try {
    await remoteConfig().setDefaults({
      json_data: '{}',
    });
    await remoteConfig().fetchAndActivate();
    const data = remoteConfig().getValue('json_data').asString();
    return JSON.parse(data);
  } catch (error) {
    console.error('Error fetching Remote Config:', error);
    return null;
  }
};
