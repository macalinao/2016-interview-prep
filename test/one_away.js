const test = require('tape');
const oneAway = require('../src/one_away');

test('oneAway', function(t) {
  t.assert(oneAway('asdf', 'asdg'));
  t.assert(oneAway('asdf', 'asdfg'));
  t.assert(oneAway('asdf', 'asd'));
  t.assert(oneAway('asdf', 'asdf'));
  t.assert(!oneAway('asdf', 'asdgg'));
  t.end();
});
