function countingWompRats(n, m, h) {
  let sum = 0;
  for (let i = 0; i < h; i++) {
    sum += n;
    n = n + m;
  }
  console.log(sum);
}
countingWompRats(5, 2, 3);
countingWompRats(7, 1, 2);
countingWompRats(10, -1, 1);
countingWompRats(8, -2, 3);
