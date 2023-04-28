function isIsogram(str) {
  let strLower = str.toLowerCase().split("").sort();

  for (let i = 0; i < strLower.length; i++) {
    if (strLower[i] === strLower[i + 1]) {
      return false;
    }
  }
  return true;
}
