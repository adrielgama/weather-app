import { useEffect, useState } from "react";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
const apiLink = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = process.env.REACT_APP_API_WEATHER_KEY;

interface IWeather {
  coords?: {
    lat: number;
    lon: number;
  };
}

const WeatherSection = ({ coords }: IWeather) => {
  const [hasCoords, setHasCoords] = useState({
    lat: -11.7295983,
    lon: -40.5591583,
  });

  useEffect(() => {
    fetch(
      `${apiLink}lat=${hasCoords.lat}&lon=${hasCoords.lon}&appid=${apiKey}&lang=pt_br`
    ).then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>OK</h1>
    </div>
  );
};

export default WeatherSection;
