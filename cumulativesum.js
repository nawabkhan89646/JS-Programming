//Cummulitive Sum Array
function cumulativeSumArray(arr) {
    let cumulativeSum = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      cumulativeSum.push(sum);
    }
    return cumulativeSum;
  }
  let numbers = [1, 2, 3, 4, 5];
  console.log("Cumulative sum array: " + cumulativeSumArray(numbers).join(", "));
  
