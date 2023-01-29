import * as Font from 'expo-font';

export const loadApplication = async () => {
  await Font.loadAsync({
    'Poppins-400': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-500': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-600': require('../assets/fonts/Poppins-Medium.ttf'),
  });
};