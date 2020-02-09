export default function isRomanValid(romanString, numbersObject) {
  let validRoman = true;
  const romanArray = romanString.toUpperCase().split("");

  romanArray.find((value, index, arr) => {
    if (!validRoman) {
      return validRoman;
    }
    if (!numbersObject[value]) {
      validRoman = false;
    } else if (value === "V" || value === "L" || value === "D") {
      if (romanArray.indexOf(value) !== romanArray.lastIndexOf(value)) {
        validRoman = false;
      }
    } else if (arr.filter(i => i === value).length > 4) {
      validRoman = false;
    }
    if (arr[index - 1]) {
      validRoman = numbersObject[arr[index - 1]].before.includes(value);
    }
  });

  return validRoman;
}
