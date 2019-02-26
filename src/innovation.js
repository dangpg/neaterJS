class Innovation {
  constructor() {
    this.connectionCounter = -1;
    this.connectionDict = [];
    this.nodeCounter = -1;
    this.nodeDict = [];
  }

  getNextNodeId(connection) {
    if (this.nodeDict.some(c => c.start === connection.start && c.end === connection.end)) {
      return this.nodeDict.find(c => c.start === connection.start && c.end === connection.end).nodeId;
    }

    this.nodeCounter++;
    this.nodeDict.push({ start: connection.start, end: connection.end, nodeId: this.nodeCounter });
    return this.nodeCounter;
  }

  getNextInnovationNumber(start, end) {
    if (this.connectionDict.some(c => c.start === start && c.end === end)) {
      return this.connectionDict.find(c => c.start === start && c.end === end).innovation;
    }

    this.connectionCounter++;
    this.connectionDict.push({ start: start, end: end, innovation: this.connectionCounter });
    return this.connectionCounter;
  }
}

export default new Innovation();
