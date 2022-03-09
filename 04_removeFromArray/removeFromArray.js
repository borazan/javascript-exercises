function removeFromArray(arr, ...args) {
  let returnArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (args.includes(arr[i])) continue;
    else returnArray.push(arr[i]);
  }
  return returnArray;
}

// Do not edit below this line
module.exports = removeFromArray;
