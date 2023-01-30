import { useEffect, useState } from 'react';
import { getCurrentPosition } from '../services/getCurrentPosition';
import { getPermission } from '../services/getPermission';
import { fetchByLocation } from '../api/axios';
import { bgImagePicker } from '../helpers/bgImagePicker';
import { Main } from '../components/Main';
import { View, Text, StyleSheet } from "react-native";
import { colors } from '../styles/colors';

export const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [bgImage, setBgImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const status = await getPermission();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied. Sorry, but without permission we cannot show weather in youre location')
      } else {
        const location = await getCurrentPosition();
        const { latitude, longitude } = location;
        try {
          const result = await fetchByLocation(latitude, longitude);
          setWeatherData(result);
          const image = await bgImagePicker(result.weather.description);
          setBgImage(image);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}> 
      {errorMsg
        ? <Text style={styles.text}>{errorMsg}</Text>
        : <Main loading={loading} weatherData={weatherData} bgImage={bgImage} />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.default.bg
  },
  text: {
    paddingHorizontal: 20,
    fontFamily: 'Poppins-600',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 24,
    color: colors.default.color,
  },
});