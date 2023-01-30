import { colors } from "../styles/colors";
import { weatherFormatter } from "./weatherFormatter";

export const stylePicker = (value) => {
  const weather = weatherFormatter(value);
  const style = colors[weather];
  return style;
};