/**
 * Function to generate current data.
 * @param: language for the output
 * @return {day, weekday, month, year}
 */

import { data } from "./translations.js";

const generateDate = (language) => {
  const currentDate = new Date();

  return {
    day: currentDate.getDate(),
    weekday: data[language].weekDays[currentDate.getDay()],
    month: data[language].monthNames[currentDate.getMonth()],
    year: currentDate.getFullYear(),
  };
};

export default generateDate;
