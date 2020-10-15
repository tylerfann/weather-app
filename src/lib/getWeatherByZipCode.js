import axios from "axios";

export const getWeatherByZipCode = async zip => {
  // takes in a zip code and returns current weather data
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=e64b0a3509012cfec7c74c1fcb056c90`;
  const response = await axios.get(api);
  return response;
};
