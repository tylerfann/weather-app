import axios from "axios";

export const getWeatherByIds = async ids => {
  // takes in multiple location id's and returns a list of weather data
  const api = `https://api.openweathermap.org/data/2.5/group?id=${ids}&units=imperial&appid=e64b0a3509012cfec7c74c1fcb056c90`;
  try {
    const response = await axios.get(api);
    return response;
  } catch (err) {
    console.error('Enter a vaild id');
  }
};
