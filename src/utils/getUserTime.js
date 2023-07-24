const days = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
  "Неділя",
];

const getUserTime = (dt) => {
  const time = new Date(dt * 1000);

  const day = days[time.getDay()];

  return day;
};

export default getUserTime;
