 // Find the missing no upto 1 to n
  function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
  }
  
  // Example usage:
  let n = 10;
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10]; 
  console.log("Missing number is: " + findMissingNumber(numbers, n));