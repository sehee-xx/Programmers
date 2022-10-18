// 성격 유형 검사하기

function solution(survey, choices) {
  let score = [3, 2, 1, 0, 1, 2, 3];
  let plus = [0, 0, 0, 0, 0, 0, 0, 0];
  let type = ["R", "T", "C", "F", "J", "M", "A", "N"];
  let result = "";

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] <= 3) {
      for (let j = 0; j < type.length; j++) {
        if (type[j] === survey[i][0]) {
          plus[j] = plus[j] + score[choices[i] - 1];
        }
      }
    } else if (choices[i] >= 5) {
      for (let j = 0; j < type.length; j++) {
        if (type[j] === survey[i][1]) {
          plus[j] = plus[j] + score[choices[i] - 1];
        }
      }
    }
  }

  for (let k = 0; k < plus.length; k = k + 2) {
    if (plus[k] > plus[k + 1]) {
      result += type[k];
    } else if (plus[k] < plus[k + 1]) {
      result += type[k + 1];
    } else {
      type[k] < type[k + 1] ? (result += type[k]) : (result += type[k + 1]);
    }
  }

  return result;
}
