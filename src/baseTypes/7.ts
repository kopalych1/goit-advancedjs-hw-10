enum weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: weekday) {
  return day > weekday.Friday && day <= weekday.Sunday;
}
