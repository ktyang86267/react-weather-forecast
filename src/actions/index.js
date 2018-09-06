import axios from 'axios';

const API_KEY = '4a54c02f63d7cf81713697eea92d6ab3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// define action type first
export const FETCH_WEATHER = 'FETCH_WEATHER';

// define action creater
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},TWN`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
