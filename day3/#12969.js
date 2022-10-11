// 직사각형 별찍기

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]);
  const b = Number(n[1]);
  let str = "";

  for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= a; j++) {
      str += "*";
    }
    console.log(str);
    str = "";
  }
});
