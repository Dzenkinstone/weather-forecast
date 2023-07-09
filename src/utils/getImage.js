import humidity from "../images/humidity.png";
import windIcon from "../images/windIcon.png";
import drizzle from "../images/drizzle.png";
import rain from "../images/rain.png";
import clouds from "../images/clouds.png";
import mist from "../images/mist.png";
import clear from "../images/clear.png";
import snow from "../images/snow.png";

const getImage = (weather) => {
  const specificPath = weather && weather[0].main;
  let weatherIcon = "";
  if (specificPath === "Clouds") {
    weatherIcon = clouds;
  } else if (specificPath === "Rain") {
    weatherIcon = rain;
  } else if (specificPath === "Clear") {
    weatherIcon = clear;
  } else if (specificPath === "Drizzle") {
    weatherIcon = drizzle;
  } else if (specificPath === "Mist") {
    weatherIcon = mist;
  } else if (specificPath === "Humidity") {
    weatherIcon = humidity;
  } else if (specificPath === "Snow") {
    weatherIcon = snow;
  } else if (specificPath === "Wind") {
    weatherIcon = windIcon;
  }

  return weatherIcon;
};

export default getImage;
