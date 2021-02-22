class BH {
  constructor() {
    this.values = [];
  }
  add(element) {
    this.values.push(element);
    // index is the last index
    let index = this.values.length - 1;
    // our current node is the last value in our array
    const current = this.values[index];

    // keep going and bubbling up
    while (index > 0) {
      // parent index is the reverse an odd node
      let parentIndex = Math.floor((index - 1) / 2);
      // get the parent value
      let parent = this.values[parentIndex];

      // if the parent node is less than the current node
      if (parent <= current) {
        // set the parent to now be the current
        this.values[parentIndex] = current;
        // set the current index to be the parent
        this.values[index] = parent;
        // our index is now the parent index
        index = parentIndex;
      } else break;
    }
  }
}

const tree = new BH();
tree.add(3);
tree.add(4);
tree.add(31);
tree.add(6);
console.log(tree); // [31, 6, 4, 3]
