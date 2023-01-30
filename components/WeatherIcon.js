import { iconPicker } from '../helpers/iconPicker';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const WeatherIcon = ({ descr, color }) => {
  return <MaterialCommunityIcons name={iconPicker(descr)} size="120" color={color} />;
};
