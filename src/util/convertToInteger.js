export default function convertToInteger(value, numbersObject) {
  const keys = value.toUpperCase().split("");
  let sum = 0;
  for (let i = keys.length - 1; i >= 0; i--) {
    if (
      numbersObject[keys[i - 1]] &&
      numbersObject[keys[i]].value > numbersObject[keys[i - 1]].value
    ) {
      sum += numbersObject[keys[i]].value - numbersObject[keys[i - 1]].value;
      i--;
    } else {
      sum += numbersObject[keys[i]].value;
    }
  }
  return sum;
}
