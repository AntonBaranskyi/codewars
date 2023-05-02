function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.sort((a, b) => a - b);

  return arr[0] + arr[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
