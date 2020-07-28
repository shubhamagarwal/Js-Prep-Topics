function sieveAlgo(limit) {
 
  let boolArr = [];
  let primes = [];

  for (let i = 1; i < limit; i++) { 
      boolArr.push(true); 
    } 

  for (let i = 2; i < limit; i++) {
    if (boolArr[i-2]) {
      for (let j = i*2; j <= limit; j += i) {
        boolArr[j-2] = false;    
      }
    }
  }
  
  for (let k = 0; k < boolArr.length; k++) {
    if (boolArr[k]) { primes.push(k+2); }
  }
  
  return primes;

} 

sieveAlgo(30);

//https://coderbyte.com/algorithm/generate-n-primes-sieve-of-eratosthenes-algorithm