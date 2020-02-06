export default function isRomanValid(romanArray, numbersObject) {
  let validRoman = true;

  romanArray.forEach((value, index, arr) => {
    if (!numbersObject[value]) {
      validRoman = false;
      console.log("Not valid Number");
    } else if (value === "V" || value === "L" || value === "D") {
      if (romanArray.indexOf(value) !== romanArray.lastIndexOf(value)) {
        validRoman = false;

        console.log("more than one V L D");
      }
    } else if (
      arr[index + 1] &&
      !numbersObject[value].before.includes(arr[index + 1])
    ) {
      validRoman = false;
    } else if (arr.filter(i => i === value).length > 3) {
      validRoman = false;
      console.log(arr.filter(i => i === value).length, "COUNT");
    } else if (arr[index - 2] === value) {
      validRoman = false;
      console.log("Same number", value);
    }
    console.log(arr[index + 1], "=", arr[index - 1]);
  });

  console.log("validRoman", validRoman);

  return validRoman;
}
