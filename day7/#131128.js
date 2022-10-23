// 숫자 짝꿍

function solution(X, Y) {
  let cntX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let cntY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let common = [];

  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j < X.length; j++) {
      if (Number(X[j]) === i) {
        cntX[i] = cntX[i] + 1;
      }
    }

    for (let k = 0; k < Y.length; k++) {
      if (Number(Y[k]) === i) {
        cntY[i] = cntY[i] + 1;
      }
    }
  }

  for (let c = 0; c < cntX.length; c++) {
    if (cntX[c] && cntY[c]) {
      for (let s = 0; s < Math.min(cntX[c], cntY[c]); s++) {
        common.push(c);
      }
    }
  }

  common.sort((a, b) => b - a);

  if (!common.length) {
    return "-1";
  } else {
    return common[0] === 0 ? "0" : common.join("");
  }
}
