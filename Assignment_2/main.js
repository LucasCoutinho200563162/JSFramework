// Import using ES
import { printingText, speedConverter, multiplyBy, primeCheck } from "./funcs.js";

// Testing priting function with and without input
printingText("This is", "our second", "assignment.");
printingText();

const meterPerSecUnit = "ms";
const kilometerPerHourUnit = "kmh";

// Testing speed covnerter, from ms to kmh
const firstSpeedValue = 55.7;
console.log(
  "from",
  `${firstSpeedValue} ${meterPerSecUnit}`,
  "to",
  `${speedConverter(55.7, meterPerSecUnit)} ${kilometerPerHourUnit}`
);

// Testing function to double value
const value = 100.06
const times = 2
console.log("multiply", value, "by", 2, "is equal to", multiplyBy(value, times));

// Testing function to check if number is prime

const valueToCheck = 101
console.log(`Is ${valueToCheck} prime?`, primeCheck(valueToCheck))
