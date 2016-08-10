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

  /**
   * Popping off
   */
  pop() {
    const nextIdx = this.nextIndex();
    if (nextIdx === 0) {
      throw new Error('Heap is empty');
    }

    const ret = this.data[0];
    this.data[0] = this.data[nextIdx - 1];
    this.data[nextIdx - 1] = undefined;

    let idx = 0;
    for (;;) {
      const leftIndex = (idx + 1) * 2 - 1;
      const rightIndex = (idx + 1) * 2;
      const max = Math.max(this.data[leftIndex], this.data[rightIndex]);

      if (this.data[idx] < max) {
        if (this.data[leftIndex] > this.data[rightIndex]) {
          this.swap(idx, leftIndex);
          idx = leftIndex;
        } else {
          this.swap(idx, rightIndex);
          idx = rightIndex;
        }
      } else {
        break;
      }
    }

    return ret;
  }

  nextIndex() {
    for (let i = 0;; i++) {
      if (typeof this.data[i] === 'undefined') {
        return i;
      }
    }
  }

  print() {
  }

}

module.exports = Heap;
