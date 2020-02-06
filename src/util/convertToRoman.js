export default function convertToRoman(value) {
  const romans = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let result = "";

  integers.forEach((elem, index) => {
    while (value >= elem) {
      result += romans[index];
      value -= elem;
    }
  });

  return result;
}
