import { weatherFormatter } from './weatherFormatter';

export const bgImagePicker = (value) => {
  const weather = weatherFormatter(value);
  //console.log(weather);
  if (weather === 'cloudy') {
    return require('../assets/backgrounds/cloudy.png');
  }
  if (weather === 'sunny') {
    return require('../assets/backgrounds/sunny.png');
  }
  if (weather === 'snowy') {
    return require('../assets/backgrounds/snowy.png');
  }
  if (weather === 'rainy') {
    return require('../assets/backgrounds/rainy.png');
  }
};