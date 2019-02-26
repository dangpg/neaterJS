export default class Node {
  constructor(id, type, outputValue = 0.0) {
    this.id = id;
    this.type = type;
    this.outputValue = outputValue;
  }

  clone() {
    return new Node(this.id, this.type, this.outputValue);
  }
}
