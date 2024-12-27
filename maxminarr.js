// Find max and min value from an array
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return { min, max };
  }
  let numbers = [3, 7, 1, 9, 4, 2, 8];
  let result = findMinMax(numbers);
  console.log("Minimum value: " + result.min);
  console.log("Maximum value: " + result.max);