const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof (position) != "number" || position < 1 || position > this.getLength()) {
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    }
    else {
      this.chains.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    if (this.getLength() > 1) {
      this.chains.reverse();
    }
    return this;
  },
  finishChain() {
    let result = this.chains.join("~~");
    this.chains = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
