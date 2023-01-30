export const weatherFormatter = (value) => {
  if (value.includes('clouds') || value.includes('Mist') || value.includes('Smoke') || value.includes('Sand/dust') || value.includes('Fog') || value.includes('Flurries') || value.includes('Haze') ) {
    return 'cloudy';
  }
  if (value.includes('Clear')) {
    return 'sunny';
  }
  if (value.includes('snow') || value.includes('sleet')) {
    return 'snowy';
  }
    if (value.includes('rain') || value.includes('Thunderstorm') || value.includes('Drizzle') ) {
    return 'rainy';
  }
};