function digitalRoot(n) {
  while (n >= 10) {
    n = String(n)
      .split("")
      .reduce((acc, curr) => {
        return acc + +curr;
      }, 0);
  }
  return n;
}

console.log(digitalRoot(132189)); // 1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
