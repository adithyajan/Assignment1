function checkPrime(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return "Array is empty";
    }
    
    // Get the first element of the array
    var num = arr[0];
    
    // Check if the number is less than 2
    if (num < 2) {
      return "Not a prime number";
    }
    
    // Check for divisibility from 2 to the square root of the number
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return "Not a prime number";
      }
    }
    
    // If no divisors were found, the number is prime
    return "Prime number";
  }
  
  // Example usage
  var array = [3, 4, 5, 6];
  console.log(checkPrime(array)); // Output: Prime number
  
