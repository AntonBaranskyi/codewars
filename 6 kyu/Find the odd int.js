function findOdd(A) {
  let objArr = {};
  for (let num of A) {
    objArr[num] = objArr[num || 0];
  }

  return objArr;
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
