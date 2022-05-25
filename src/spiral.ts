export function spiral(arr: number[][]) {
  const result = [];
  let startRow = 0;
  let startCol = 0;
  let endRow = arr[0].length - 1;
  let endCol = arr.length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startRow; i <= endRow; i += 1) {
      result.push(arr[startCol][i]);
    }

    startCol += 1;

    for (let i = startCol; i <= endCol; i += 1) {
      result.push(arr[i][endRow]);
    }

    endRow -= 1;

    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i -= 1) {
        result.push(arr[endCol][i]);
      }
      endCol -= 1;
    }
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i -= 1) {
        result.push(arr[i][startRow]);
      }
      startRow += 1;
    }
  }

  return result;
}
