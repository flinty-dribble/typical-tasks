export function semverSort(arr: string[]) {
  const res = arr;
  const arrOfStrings = [];
  let arrOfNumbers = [];
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    arrOfStrings.push(res[i].split("."));
    const version = [];

    for (let x = 0; x < arrOfStrings[i].length; x += 1) {
      version.push(+arrOfStrings[i][x] + 100000);
    }

    arrOfNumbers.push(version);
  }

  arrOfNumbers = arrOfNumbers.sort();

  for (let i = 0; i < arr.length; i += 1) {
    for (let x = 0; x < arrOfNumbers[i].length; x += 1) {
      arrOfNumbers[i][x] -= 100000;
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    result.push(arrOfNumbers[i].join("."));
  }

  return result;
}
