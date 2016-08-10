function parent(pos) {
  return Math.floor((pos - 1) / 2);
}

/**
 * Implementation of a max heap.
 */
class Heap {

  constructor(size) {
    this.next = 0;
    this.data = new Array(size);
  }

  add(el) {
    let pos = this.next;
    this.data[pos] = el;
    this.next += 1;

    // break if root
    if (pos === 0) {
      return;
    }

    // swap
    while (this.data[pos] > this.data[parent(pos)]) {
      this.swap(pos, parent(pos));
      pos = parent(pos);
    }
  }

  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  removeRoot() {
  }

  print() {
  }

}

module.exports = Heap;
