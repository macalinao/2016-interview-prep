const test = require('tape');
const palindromePermutation = require('../src/palindrome_permutation');

test('palindromePermutation', function(t) {
  t.assert(palindromePermutation('tact coa'));
  t.assert(palindromePermutation('madam im adam'));
  t.notOk(palindromePermutation('madam im adam smith'));
  t.end();
});
