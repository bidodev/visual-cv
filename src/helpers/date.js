const generateData = () => {
    const weekDays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const currentDate = new Date();
    const data = {
      day: currentDate.getDate(),
      weekday: weekDays[currentDate.getDay()],
      month: monthNames[currentDate.getMonth()],
      year: currentDate.getFullYear(),
    };
    return data;
};
  
export default generateData;