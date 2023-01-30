import axios from 'axios';

export const API_KEY = '1055a319c976471ba2033391c1839f45';
export const BASE_URL = 'https://api.weatherbit.io/v2.0/current';

export const fetchByLocation = async (lat, lon) => {
  try {
    const result = await axios.get(`${BASE_URL}?lat=${lat}&lon=${lon}&key=${API_KEY}`);
    return result.data.data[0];
  } catch (error) {
    console.log(error);
  }
};
