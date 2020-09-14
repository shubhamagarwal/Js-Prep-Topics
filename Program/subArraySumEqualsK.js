function subArraySumEqualsK(arr, k) {
    var count = 0;
    var obj = { 0: 1 };
    var sum = 0;
  
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      if (sum - k in obj) {
        count = count + obj[sum - k];
      }
      obj[sum] = obj[sum] ? obj[sum] + 1 : 1;
    }
    return count;
  }
  
  subArraySumEqualsK([1, 1, 1], 2);
  