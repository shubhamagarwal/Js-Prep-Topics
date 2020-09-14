function ReverseNumber(number) {
    var digit,
      result = 0;
  
    while (number) {
      digit = number % 10;
      result = result * 10 + digit;
      number = parseInt(number / 10);
    }
    console.log(result);
  }
  ReverseNumber(1234);



  // replace particular value from number
function replace(number) {
    // Base case for recursion termination
    if (number == 0) return 0;
    // Extract the last digit and change it if needed
    var digit = number % 10;
    if (digit == 0) digit = 5;
    // Convert remaining digits and append the last digit
    return replace(parseInt(number / 10)) * 10 + digit;
  }
  
  replace(101); // 151



  // sum of digit using recursion
function sumDigits(num) {
    num = num.toString();
    return num.length === 0 ? 0 : +num[0] + sumDigits(num.slice(1));
  }
  
  console.log(sumDigits(1234)); // 10