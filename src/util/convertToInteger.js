export default function convertToInteger(value, numbersObject) {
  let sum = 0;
  for (let i = value.length - 1; i >= 0; i--) {
    if (
      numbersObject[value[i - 1]] &&
      numbersObject[value[i]].value > numbersObject[value[i - 1]].value
    ) {
      sum += numbersObject[value[i]].value - numbersObject[value[i - 1]].value;
      i--;
    } else {
      sum += numbersObject[value[i]].value;
    }
  }
  return sum;
}
