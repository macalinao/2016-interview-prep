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

test('pop', function(t) {
  const h = new Heap();
  for (let i = 0; i < 7; i++) {
    h.add(i);
  }
  const ret = [];
  for (let i = 0; i < 7; i++) {
    ret.push(h.pop());
  }
  t.deepEqual(ret, [
    6, 5, 4, 3, 2, 1, 0
  ]);
  t.end();
});
