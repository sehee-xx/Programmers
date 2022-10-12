// 최소직사각형

function solution(sizes) {
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      let temp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = temp;
    }
  }

  let widthMax = sizes[0][0];
  let heightMax = sizes[0][1];

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > widthMax) {
      widthMax = sizes[i][0];
    }
    if (sizes[i][1] > heightMax) {
      heightMax = sizes[i][1];
    }
  }

  return widthMax * heightMax;
}
