function findMostFrequentItem(array) {
    // Create an object to store the frequency of each item
    let frequencyMap = {};
  
    // Iterate over the array and update the frequency map
    array.forEach(item => {
      frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });
  
    // Find the item with the maximum frequency
    let mostFrequentItem;
    let maxFrequency = 0;
  
    for (let item in frequencyMap) {
      if (frequencyMap[item] > maxFrequency) {
        maxFrequency = frequencyMap[item];
        mostFrequentItem = item;
      }
    }
  
    return mostFrequentItem;
  }
  
  // Example usage
  let array = [1, 2, 3, 4, 1, 2, 2, 3, 3, 3];
  let mostFrequentItem = findMostFrequentItem(array);
  console.log("The most frequent item is: " + mostFrequentItem);
  