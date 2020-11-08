const shortDayName = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];
const longDayName = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const getDateText = ( dateTime, shortDate = false ) => {
  const weekDay = shortDate ? shortDayName[dateTime.getDay()] : longDayName[dateTime.getDay()];
  const monthDay = dateTime.getDate();

  return `${weekDay} ${monthDay}`;
}

export default getDateText;
