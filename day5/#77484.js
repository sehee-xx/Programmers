// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  let cnt = 0;
  let zero = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (lottos.includes(win_nums[i])) {
      cnt++;
    }
    if (lottos[i] === 0) {
      zero++;
    }
  }

  let min = 7 - zero - cnt;
  let max = 7 - cnt;

  if (zero === 6) {
    max = 6;
  }

  if (zero === 0 && cnt === 0) {
    max = 6;
    min = 6;
  }

  return [min, max];
}
