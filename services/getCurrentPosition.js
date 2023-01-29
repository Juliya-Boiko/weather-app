import * as Location from 'expo-location';

export const getCurrentPosition = async () => {
  const location = await Location.getCurrentPositionAsync({});
  return location.coords;
};