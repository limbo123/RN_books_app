import remoteConfig from '@react-native-firebase/remote-config';

export const fetchRemoteConfig = async (key: string) => {
  try {
    await remoteConfig().setDefaults({
      json_data: '{}',
    });
    await remoteConfig().fetchAndActivate();
    const data = remoteConfig().getValue(key).asString();
    return JSON.parse(data);
  } catch (error) {
    console.error('Error fetching Remote Config:', error);
    return null;
  }
};
