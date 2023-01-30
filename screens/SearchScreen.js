import { Text } from "react-native";
import cities from 'cities.json';
import { useState } from 'react';
import { inputFormatter } from '../helpers/inputFormatter';
import { fetchByLocation } from '../api/axios';
import { bgImagePicker } from '../helpers/bgImagePicker';
import { StyleSheet, ImageBackground } from "react-native";
import { SearchForm } from '../components/SearchForm';
import { CitiesList } from '../components/CitiesList';
import { WeatherCard } from '../components/WeatherCard';

export const SearchScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [cityCoords, setCityCoords] = useState(null);
  const [citiesList, setCitiesList] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [bgImage, setBgImage] = useState(require('../assets/backgrounds/default.png'));

  const inputHandler = (text) => {
    setInputValue(text);
    if (text === '') {
      setCitiesList([]);
    }
    if (text.length >= 3) {
      const data = inputFormatter(text);
      const result = cities.filter(city => city.name.includes(data));
      setCityCoords(null);
      setCitiesList(result);
      setWeatherData(null);
    }
  };

  const cityHandler = (item) => {
    const { lat, lng, name } = item;
    setInputValue(name);
    setCityCoords({ lat, lng });
    setCitiesList([]);
    setWeatherData(null);
  };

  const searchHandler = async (coords) => {
    const { lat, lng } = coords;
    const result = await fetchByLocation(lat, lng);
    const image = await bgImagePicker(result.weather.description);
    setWeatherData(result);
    setInputValue('');
    setCitiesList([]);
    setBgImage(image);
  };

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <SearchForm inputValue={inputValue} inputHandler={inputHandler} coords={cityCoords} weatherData={weatherData} searchHandler={searchHandler} />
      {citiesList && <CitiesList list={citiesList} cityHandler={cityHandler} />}
      {weatherData && <WeatherCard data={weatherData} />}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 100,
  },
});