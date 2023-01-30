import { View, Text, StyleSheet } from "react-native";
import { dateFormatter } from "../helpers/dateFormatter";
import { WeatherIcon } from './WeatherIcon';
import { stylePicker } from "../helpers/stylePicker";
import { colors } from "../styles/colors";
import { BlurView } from 'expo-blur';

export const WeatherCard = ({ data }) => {
  const { city_name, country_code, app_temp, clouds, temp, uv, sunset, weather, wind_cdir_full, wind_spd } = data;
  const customStyle = stylePicker(weather.description);

  return (
    <View style={styles.container}>
      {customStyle && <>
        <View style={{...styles.header, backgroundColor: customStyle.bg}}>
          <Text style={{ fontSize: 20, fontFamily: 'Poppins-500', color: customStyle.color }}>Today in {city_name}, {country_code}</Text>
          <View style={styles.main}>
            <WeatherIcon descr={weather.description} color={customStyle.color} />
            <Text style={{ fontSize: 100, fontFamily: 'Poppins-500', color: customStyle.color }}>{Math.round(temp)}°</Text>
          </View>
          <View>
            <Text style={{ ...styles.haderText, fontSize: 20, fontFamily: 'Poppins-600', color: customStyle.color, }}>{weather.description}</Text>
            <Text style={{ ...styles.haderText,fontSize: 15, color: customStyle.color, }} >{dateFormatter().day} {dateFormatter().date}</Text>
            <Text style={{ ...styles.haderText, fontSize: 15, color: customStyle.color, marginBottom: 0}}>Feels like: {app_temp} | Sunset {sunset}</Text>
          </View>
        </View>

        <BlurView intensity={10} tint="default" style={{ ...styles.footer, backgroundColor: customStyle.bg }}>
          <Text style={{...styles.text, color: customStyle.color}}>Wind direction: {wind_cdir_full}</Text>
          <View style={styles.after}></View>
          <Text style={{...styles.text, color: customStyle.color}}>Wind speed: {wind_spd.toFixed(1)} m/s</Text>
          <View style={styles.after}></View>
          <Text style={{...styles.text, color: customStyle.color}}>Cloud coverage: {clouds} %</Text>
          <View style={styles.after}></View>
          <Text style={{ ...styles.text, color: customStyle.color, marginBottom: 0}}>UV index: {uv.toFixed(1)} %</Text>
        </BlurView>
      </>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    borderRadius: 35,
    paddingVertical: 25,
    alignItems: 'center',
    marginBottom: 35
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  haderText: {
    textAlign: 'center', 
    fontFamily: 'Poppins-500',
    marginBottom: 15,
  },
  footer: {
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderRadius: 25,
    opacity: 0.9,
  },
  text: {
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-400',
    fontSize: 15,
    //color: colors.white,
  },
  after: {
    height: 1,
    width: '100%',
    marginBottom: 20,
    backgroundColor: colors.white
  },
});