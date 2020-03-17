const returnFirstTwoDrivers = array => {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = array => {
  let secondLast = array.length - 2;
  return array.slice(secondLast);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplyValue => {
  return value => {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, theseDrivers) => {
  return theseDrivers(drivers);
};
