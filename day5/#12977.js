// 소수 만들기

function isPrime(n) {
  for (let s = 2; s <= Math.sqrt(n); s++) {
    if (n % s === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  let sum = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          result++;
        }
      }
    }
  }

  return result;
}
