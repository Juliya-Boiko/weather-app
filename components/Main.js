import { Loader } from './Loader';
import { WeatherCard } from './WeatherCard';
import { ImageBackground, StyleSheet } from "react-native";

export const Main = ({ loading, weatherData, bgImage }) => {
  return (
    <>
      {loading
        ? <Loader />
        : <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={styles.image}
        >
          {weatherData && <WeatherCard data={weatherData} />}
        </ImageBackground>
      }
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    paddingVertical: 120,
    paddingHorizontal: 35,
  },
});