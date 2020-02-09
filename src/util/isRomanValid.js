export default function isRomanValid(romanArray, numbersObject) {
  let validRoman = true;

  romanArray
    .toUpperCase()
    .split("")
    .find((value, index, arr) => {
      if (!numbersObject[value]) {
        validRoman = false;
      } else if (value === "V" || value === "L" || value === "D") {
        if (romanArray.indexOf(value) !== romanArray.lastIndexOf(value)) {
          validRoman = false;
        }
      } else if (arr.filter(i => i === value).length > 3) {
        validRoman = false;
      }
      if (arr[index - 1]) {
        validRoman = numbersObject[arr[index - 1]].before.includes(value);
      }
      if (!validRoman) {
        return validRoman;
      }
    });

  return validRoman;
}
