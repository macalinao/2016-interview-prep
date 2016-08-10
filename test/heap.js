const test = require('tape');
const Heap = require('../src/Heap');

test('add', function(t) {
  const h = new Heap();
  for (let i = 0; i < 7; i++) {
    h.add(i);
  }
  t.deepEqual(h.data, [
    6, 3, 5, 0, 2, 1, 4
  ]);
  t.end();
});
