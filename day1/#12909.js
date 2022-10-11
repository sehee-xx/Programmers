// 올바른 괄호

function solution(s) {
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? cnt++ : cnt--;
    if (cnt < 0) {
      return false;
    }
  }

  return !cnt;
}
