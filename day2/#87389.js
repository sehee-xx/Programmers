// 나머지가 1이 되는 수 찾기

function solution(n) {
  let min = n;
  for (let i = 0; i < n; i++) {
    if (n % i === 1 && i < min) {
      min = i;
    }
  }
  return min;
}
