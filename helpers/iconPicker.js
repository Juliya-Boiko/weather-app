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

// import Thunderstorm from '../assets/icons/thunderstorms.svg';
// import Drizzle from '../assets/icons/drizzle.svg';
// import Rain from '../assets/icons/rain.svg';
// import Snow from '../assets/icons/snow.svg';
// import Sleet from '../assets/icons/sleet.svg';
// import Flurries from '../assets/icons/wind-beaufort-9.svg';
// import Mist from '../assets/icons/mist.svg';
// import Smoke from '../assets/icons/smoke.svg';
// import Haze from '../assets/icons/haze.svg';
// import Dust from '../assets/icons/dust.svg';
// import Fog from '../assets/icons/fog.svg';
// import Clear from '../assets/icons/clear-day.svg';
// import Clouds from '../assets/icons/cloudy.svg';
// import { View } from 'react-native';

// export const iconPicker = (descr) => {
//   console.log(descr);

//   // if (descr.includes('Thunderstorm')) {
//   //   return <Thunderstorm width={130} height={130} />;
//   // }
//   // if (descr.includes('Drizzle')) {
//   //   return <Drizzle width={130} height={130} />;
//   // }
//   // if (descr.toLowerCase().includes('rain')) {
//   //   return <Rain width={130} height={130} />;
//   // }
//   // if (descr.toLowerCase().includes('snow')) {
//   //   return <Snow width={130} height={130} />;
//   // }
//   // if (descr.toLowerCase().includes('sleet')) {
//   //   return <Sleet width={130} height={130} />;
//   // }
//   // if (descr.includes('Flurries')) {
//   //   return <Flurries width={130} height={130} />;
//   // }
//   // if (descr.includes('Mist')) {
//   //   return <Mist width={130} height={130} />;
//   // }
//   // if (descr.includes('Smoke')) {
//   //   return <Smoke width={130} height={130} />;
//   // }
//   // if (descr.includes('Haze')) {
//   //   return <Haze width={130} height={130} />;
//   // }
//   // if (descr.includes('Sand/dust')) {
//   //   return <Dust width={130} height={130} />;
//   // }
//   // if (descr.includes('Fog')) {
//   //   return <Fog width={130} height={130} />;
//   // }
//   if (descr.includes('Clear')) {
//     return '<Clear width={130} height={130} />';
//   }
//   // if (descr.includes('clouds')) {
//   //   return <Clouds width={130} height={130} />;
//   // }
// }; 