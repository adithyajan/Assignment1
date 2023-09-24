function sumOfSquares(array) {
    let sum = 0;
  
    array.forEach(item => {
      sum += item * item;
    });
  
    return sum;
  }
  
  // Example usage
  let array = [1, 2, 3, 4, 5];
  let result = sumOfSquares(array);
  console.log("The sum of squares is: " + result);
  
