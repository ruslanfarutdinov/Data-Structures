// Given an array of sorted numbers, the binary search algo will cut it in half each time, looking for
// the value that was given as an argument

// Ex: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function binarySearch(value, array) {
  while (array.length > 0) {
    const index = Math.floor(array.length / 2);

    if (array[index] === value) {
      return true;
    }

    const newArr = [];
    if (array[index] > value) {
      for (let i = 0; i < index; i += 1) {
        newArr[i] = array[i];
      }
    } else {
      let j = 0;
      for (let i = index + 1; i < array.length; i += 1) {
        newArr[j] = array[i];
        j += 1;
      }
    }
    array = newArr;
  }

  return false;
}
// O(log n) - b/c at each step, the problem gets divided in half

// a recursive implementation:
function binarySearchRecursive(value, array) {
  const index = Math.floor(array.length / 2);
  if (array[index] === value) {
    return true;
  }

  if (array.length > 0) {
    const newArr = [];
    if (array[index] > value) {
      for (let i = 0; i < index; i += 1) {
        newArr[i] = array[i];
      }
    } else {
      let j = 0;
      for (let i = index + 1; i < array.length; i += 1) {
        newArr[j] = array[i];
        j += 1;
      }
    }
    const isFound = binarySearchRecursive(value, newArr);
    if (isFound) return true;
  }

  return false;
}
