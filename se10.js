function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return `You are ${age} years old`;
}

// Example
console.log(calculateAge(2002));


function meterToCm(meter) {
  const cm = meter * 100;
  return `${meter} meters is equal to ${cm} cm`;
}

// Example
console.log(meterToCm(2));


function discount(price) {
  const finalPrice = price - (price * 0.15);
  return `Price after discount is ${finalPrice}$`;
}

// Example
console.log(discount(100));