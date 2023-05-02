function divisors(integer) {
  let num = Number(integer);
  let arr = [];

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  if (arr.length === 0) {
    return (arr[0] = integer + " is prime");
  }
  return arr;
}

console.log(divisors(13));
