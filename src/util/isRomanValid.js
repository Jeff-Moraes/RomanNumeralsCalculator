export default function isRomanValid(romanArray, numbersObject) {
  let validRoman = true;

  romanArray.forEach((value, index, arr) => {
    if (!numbersObject[value]) {
      validRoman = false;
      console.log("Not valid Number");
    } else if (value === "V" || value === "L" || value === "D") {
      if (romanArray.indexOf(value) !== romanArray.lastIndexOf(value)) {
        validRoman = false;

        console.log("contem mais de um V L D");
      }
    } else if (
      arr[index + 1] &&
      !numbersObject[value].before.includes(arr[index + 1])
    ) {
      validRoman = false;
    }
  });

  console.log("validRoman", validRoman);

  return validRoman ? true : false;
}
