function oneAway(a, b) {
  if (a.length > b.length) {
    let temp = b;
    b = a;
    a = temp;
  }

  if (Math.abs(a.length - b.length) > 1) {
    return false;
  }

  let found = false;
  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[j]) {
      if (found) {
        return false;
      } else {
        found = true;
        if (a.length < b.length) i--;
      }
    }
    j++;
  }
  return true;
}

module.exports = oneAway;
