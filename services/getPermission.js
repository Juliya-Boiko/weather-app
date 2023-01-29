import * as Location from 'expo-location';

export const getPermission = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  return status;
};