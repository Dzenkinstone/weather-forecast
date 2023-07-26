const days = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
  "Неділя",
];

function addLeadingZero(d) {
  return d < 10 ? "0" + d : d;
}

export const getDays = (list) => {
  const weatherForecast = [...list].splice(1, list.length - 1);

  const getForecastExceptCurrent = weatherForecast.filter(
    (_, index, array) =>
      new Date(array[index]?.dt * 1000).getDay() !==
      new Date(array[index + 1]?.dt * 1000).getDay()
  );

  return getForecastExceptCurrent;
};

export default getDays;

export const getForecastByDay = (dt, list) => {
  const year = new Date(dt * 1000).getFullYear();
  const month = addLeadingZero(new Date(dt * 1000).getMonth() + 1);
  const day = new Date(dt * 1000).getDate();

  const date = `${year}-${month}-${day}`;

  const findForecast = list.filter(({ dt_txt }) => dt_txt.includes(date));

  return findForecast;
};

export const getUserTime = (dt) => {
  const time = new Date(dt * 1000);

  const day = days[time.getDay()];

  return day;
};

export const getMinutes = (dt) => {
  const hours = addLeadingZero(new Date(dt * 1000).getHours());

  return `${hours}:00`;
};
