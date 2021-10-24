exports.calculateRide = function (distance, date) {
  const IS_SUNDAY = 0;
  const IS_OVERNIGHT = 22;
  const OVERNIGHT_RATE = 3.9;
  const SUNDAY_RATE = 2.9;
  const REGULAR_RATE = 2.1;

  if (date.getHours() >= IS_OVERNIGHT) {
    return distance * OVERNIGHT_RATE;
  }

  if (date.getDay() === IS_SUNDAY) {
    return distance * SUNDAY_RATE;
  }

  return distance * REGULAR_RATE;
}