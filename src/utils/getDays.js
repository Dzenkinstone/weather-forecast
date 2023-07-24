const getDays = (list) => {
  const weatherForecast = [...list].splice(1, list.length - 1);
  const getDays = [];

  weatherForecast.forEach((_, index, array) => {
    if (
      new Date(array[index]?.dt * 1000).getDay() !==
      new Date(array[index + 1]?.dt * 1000).getDay()
    ) {
      getDays.push(array[index]);
    }
  });

  return getDays;
};

export default getDays;
