export function semverSort(arr: any[]) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].split(".") as string;

    for (let x = 0; x < arr[i].length; x += 1) {
      arr[i][x] = +arr[i][x] as number;
      arr[i][x] = arr[i][x] + 100000;
    }
  }

  arr = arr.sort();

  for (let i = 0; i < arr.length; i += 1) {
    for (let x = 0; x < arr[i].length; x += 1) {
      arr[i][x] = (arr[i][x] - 100000) as number;
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].join(".") as number;
  }
  return arr;
}
