// 소수 찾기

function solution(n) {
  let prime = n - 1;

  for (let i = 3; i <= n; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        prime--;
        break;
      }
    }
  }

  return prime;
}
