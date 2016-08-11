function palindromePermutation(str) {
  const chars = str.split('');
  chars.sort();
  const pure = chars.filter((x) => !!/[a-z]/.test(x));
  console.log(pure);

  if (chars.length === 0) {
    return false;
  }

  let odds = 0;
  let charCt = 1;
  let char = pure[0];
  for (let i = 1; i < pure.length; i++) {
    if (pure[i] === char) {
      charCt++;
    } else {
      if (charCt % 2 !== 0) {
        odds++;
        if (odds > 1) {
          return false;
        }
      }
      char = pure[i];
      charCt = 1;
    }
  }
  return true;
}

module.exports = palindromePermutation;
