const taximeter = require("./TaximeterAfter");

test("Should be able to do a taxi run in regular days", function () {
  const distance = 1000;
  const date = new Date("2021-07-10T10:00:00");

  const price = taximeter.calculateRide(distance, date);
  expect(price).toBe(2100);
});

test("Should be able to do a taxi run when is overnight", function () {
  const distance = 1000;
  const date = new Date("2021-07-10T22:00:00");

  const price = taximeter.calculateRide(distance, date);
  expect(price).toBe(3900);
});

test("Should be able to do a taxi run when is sunday", function () {
  const distance = 1000;
  const date = new Date("2021-10-10T21:00");

  const price = taximeter.calculateRide(distance, date);
  expect(price).toBe(2900);
});

