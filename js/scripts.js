function celsiusToFahrenheit(units) {
  return (units * (9 / 5)) + 32;
}

function fahrenheitToCelsius(units) {
  return (units - 32) * (5 / 9);
}

function feetToMeters(units) {
  return units / (1 / .3048);
}

function metersToFeet(units) {
  return units * (1 / .3048);
}

function litersToGallons(units) {
  return units / 3.785411784;
}

function gallonsToLiters(units) {
  return units * 3.785411784;
}

const amount = parseInt(prompt("Enter quantity of unit:"));

// alert(celsiusToFahrenheit(amount));

// alert(fahrenheitToCelsius(amount));

// alert(feetToMeters(amount));

// alert(metersToFeet(amount));

// alert(litersToGallons(amount));

alert(gallonsToLiters(amount));