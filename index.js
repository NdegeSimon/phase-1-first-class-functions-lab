// Driver list
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// Return first 2
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};

// Return last 2
const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
};

// Array holding both functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function
function selectDifferentDrivers(drivers, selectingFunction) {
  return selectingFunction(drivers);
}

// Fare multiplier factory
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Doubler and tripler
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// Output
console.log("First two drivers:", selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log("Last two drivers:", selectDifferentDrivers(drivers, returnLastTwoDrivers));   // ['Amari', 'Mo']

console.log("Doubled fare:", fareDoubler(10)); // 20
console.log("Tripled fare:", fareTripler(10)); // 30

// Using selectingDrivers array
console.log("Using selectingDrivers[0]:", selectingDrivers[0](drivers)); // First two
console.log("Using selectingDrivers[1]:", selectingDrivers[1](drivers)); // Last two
