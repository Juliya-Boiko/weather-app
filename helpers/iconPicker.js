export const iconPicker = (descr) => {
  if (descr.includes('Fog') || descr.includes('Mist') || descr.includes('Smoke') || descr.includes('Haze') || descr.includes('Sand/dust')) {
    return 'weather-fog';
  }
  if (descr.includes('Thunderstorm')) {
    return 'weather-lightning';
  }
  if (descr.includes('clouds')) {
    return 'weather-cloudy';
  }
  if (descr.includes('Clear')) {
    return 'weather-sunny';
  }

  if (descr.includes('Flurries')) {
    return 'weather-windy';
  }
  if (descr.toLowerCase().includes('rain') || descr.includes('Drizzle')) {
    return 'weather-rainy';
  }
    if (descr.toLowerCase().includes('snow')) {
    return 'weather-snowy-heavy';
  }
    if (descr.toLowerCase().includes('sleet')) {
    return 'weather-snowy-rainy';
  }
};