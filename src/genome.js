import Types from './types.js';
import Node from './node.js';
import Connection from './connection.js';
import { CONFIG } from './config.js';
import Innovation from './innovation.js';
import { randomDoubleFromInterval } from './utils.js';

export default class Genome {
  constructor(numInputNodes, numOutputNodes, activation) {
    // BIAS|INPUT1|INPUT2|OUTPUT|HIDDEN
    // 0   |     1|     2|     3|     4      POSITION & ID
    this.nodes = [];
    this.connections = [];
    this.numInputNodes = numInputNodes;
    this.numOutputNodes = numOutputNodes;
    this.activation = activation;
  }

  // connect input and bias nodes to output nodes with random weights
  initialize() {
    // insert BIAS node
    this.nodes.push(new Node(0, Types.BIAS, 1.0));

    // insert INPUT nodes
    for (let i = 0; i < this.numInputNodes; i++) {
      this.nodes.push(new Node(1 + i, Types.INPUT));
    }

    // insert OUTPUT nodes
    for (let i = 0; i < this.numOutputNodes; i++) {
      this.nodes.push(new Node(1 + this.numInputNodes + i, Types.OUTPUT));
    }

    let inputNodes = this.getInputNodes();
    let outputNodes = this.getOutputNodes();

    for (let i = 0; i < outputNodes.length; i++) {
      let weight = randomDoubleFromInterval(CONFIG.NEW_WEIGHT_RANGE, -CONFIG.NEW_WEIGHT_RANGE);

      this.connections.push(
        new Connection(
          0,
          i + this.numInputNodes + 1,
          weight,
          true,
          Innovation.getNextInnovationNumber(0, 1 + this.numInputNodes + i)
        )
      );
    }

    for (let i = 0; i < inputNodes.length; i++) {
      for (let j = 0; j < outputNodes.length; j++) {
        let weight = randomDoubleFromInterval(CONFIG.NEW_WEIGHT_RANGE, -CONFIG.NEW_WEIGHT_RANGE);

        this.connections.push(
          new Connection(
            i + 1,
            j + this.numInputNodes + 1,
            weight,
            true,
            Innovation.getNextInnovationNumber(1 + i, 1 + this.numInputNodes + j)
          )
        );
      }
    }
  }

  getBiasNode() {
    return this.nodes[0];
  }

  getInputNodes() {
    return this.nodes.slice(1, 1 + this.numInputNodes);
  }

  getOutputNodes() {
    return this.nodes.slice(1 + this.numInputNodes, 1 + this.numInputNodes + this.numOutputNodes);
  }

  getHiddenNodes() {
    return this.nodes.slice(1 + this.numInputNodes + this.numOutputNodes);
  }

  // Mutation: add new node in between two nodes who were previously connected
  // disable old connection and replace it with one new node and two new connections
  // start to new node gets weight 1.0
  // new node to end gets weight of old connection
  addNode() {
    let connection = this.connections[Math.floor(Math.random() * this.connections.length)];

    connection.enabled = false;
    let newNode = new Node(Innovation.getNextNodeId(connection), Types.HIDDEN);

    this.nodes.push(newNode);
    this.connections.push(
      new Connection(
        connection.start,
        newNode.id,
        1.0,
        true,
        Innovation.getNextInnovationNumber(connection.start, newNode.id)
      )
    );
    this.connections.push(
      new Connection(
        newNode.id,
        connection.end,
        connection.weight,
        true,
        Innovation.getNextInnovationNumber(newNode.id, connection.end)
      )
    );
  }

  // Mutation: add new connection between two unconnected nodes
  // invalid connections:
  //  - already connected nodes
  //  - two input nodes
  //  - input node and bias
  //  - same node
  addConnection() {
    if (this.getHiddenNodes().length < 1) {
      return;
    }

    let count = 0;
    let connectionOk = false;
    let node1;
    let node2;
    let endNodes = this.getHiddenNodes().concat(this.getOutputNodes());

    while (!connectionOk) {
      node1 = this.nodes[Math.floor(Math.random() * this.nodes.length)];
      node2 = endNodes[Math.floor(Math.random() * endNodes.length)];

      connectionOk = !this.alreadyConnected(node1, node2);

      if (!CONFIG.ALLOW_LOOPS) {
        connectionOk = connectionOk && !this.sameNode(node1, node2);
        if (connectionOk) {
          // check for loops
          let testConnection = new Connection(node1.id, node2.id, 1.0, true, -1);

          if (this.sortNodes(testConnection)) {
            connectionOk = true;
          } else {
            connectionOk = false;
          }
        }
      }

      count++;
      // if we can't find a suitable connection within 50 tries, return
      if (count > 50) {
        return;
      }
    }

    let weight = randomDoubleFromInterval(CONFIG.NEW_WEIGHT_RANGE, -CONFIG.NEW_WEIGHT_RANGE);

    this.connections.push(
      new Connection(node1.id, node2.id, weight, true, Innovation.getNextInnovationNumber(node1.id, node2.id))
    );
  }

  // Returns true if network is fully satisfied, i.e. no new connection possible
  // input nodes can be connected to hidden and output nodes, no loops
  // bias nodes can be conneced to hidden and output nodes, no loops
  // hidden nodes can be only connected to hidden and output nodes
  // output nodes can be connected to hidden and output nodes
  isFullyConnected() {
    const numHiddenNodes = this.getHiddenNodes().length;
    let sum = 0;

    if (!CONFIG.ALLOW_LOOPS) {
      const numConnectionsFromInput = this.numInputNodes * (numHiddenNodes + this.numOutputNodes);
      const numConnectionsFromHidden = numHiddenNodes * (numHiddenNodes - 1 + this.numOutputNodes);
      const numConnectionsFromBias = numHiddenNodes + this.numOutputNodes;

      sum = numConnectionsFromInput + numConnectionsFromHidden + numConnectionsFromBias;
    } else {
      const numConnectionsFromInput = this.numInputNodes * (numHiddenNodes + this.numOutputNodes);
      const numConnectionsFromHidden = numHiddenNodes * (numHiddenNodes + this.numOutputNodes);
      const numConnectionsFromBias = numHiddenNodes + this.numOutputNodes;
      const numConnectionsFromOutput = this.numOutputNodes * (numHiddenNodes + this.numOutputNodes);

      sum = numConnectionsFromInput + numConnectionsFromHidden + numConnectionsFromBias + numConnectionsFromOutput;
    }

    return sum === this.connections.length;
  }

  alreadyConnected(node1, node2) {
    for (let i = 0; i < this.connections.length; i++) {
      if (this.connections[i].start === node1.id && this.connections[i].end === node2.id) {
        return true;
      }
    }
    return false;
  }

  sameNode(node1, node2) {
    if (CONFIG.ALLOW_LOOPS) {
      return false;
    }
    return node1.id === node2.id;
  }

  resetNetwork() {
    for (let i = 1; i <= this.nodes; i++) {
      this.nodes[i].outputValue = 0;
    }
  }

  setInputs(inputValues) {
    for (let i = 1; i <= this.numInputNodes; i++) {
      this.nodes[i].outputValue = inputValues[i - 1];
    }
  }

  activateNetwork() {
    if (!CONFIG.ALLOW_LOOPS) {
      let sortedNodes = this.sortNodes();

      for (let i = 1 + this.numInputNodes; i < sortedNodes.length; i++) {
        this.activateNode(sortedNodes[i]);
      }
    } else {
      // activate hidden nodes, then output nodes
      let hiddenNodes = this.getHiddenNodes();

      for (let i = 0; i < hiddenNodes.length; i++) {
        this.activateNode(hiddenNodes[i]);
      }

      let outputNodes = this.getOutputNodes();

      for (let i = 0; i < outputNodes.length; i++) {
        this.activateNode(outputNodes[i]);
      }
    }

    // return output values
    return this.getOutputNodes().map(n => n.outputValue);
  }

  activateNode(node) {
    // do not fire if disabled
    let inputConnections = this.connections.filter(c => c.end === node.id);
    let localSum = 0.0;

    for (let j = 0; j < inputConnections.length; j++) {
      if (!inputConnections[j].enabled) {
        continue;
      }

      let startNode = this.nodes.find(n => n.id === inputConnections[j].start);

      localSum += startNode.outputValue * inputConnections[j].weight;
    }

    node.outputValue = this.activation(localSum);
  }

  sortNodes(testConnection = null) {
    let sortedNodes = [];
    let startNodes = [this.getBiasNode()].concat(this.getInputNodes());
    let otherNodes = this.getHiddenNodes().concat(this.getOutputNodes());

    let connections = JSON.parse(JSON.stringify(this.connections.filter(c => c.enabled)));

    if (testConnection) {
      connections.push(testConnection);
    }

    while (startNodes.length > 0) {
      let node = startNodes.splice(0, 1)[0];

      sortedNodes.push(node);

      connections = connections.filter(c => c.start !== node.id);
      for (let i = 0; i < otherNodes.length; i++) {
        if (!connections.some(c => c.end === otherNodes[i].id)) {
          startNodes.push(otherNodes.splice(i, 1)[0]);
        }
      }
    }

    if (connections.length > 0) {
      return false;
    }
    return sortedNodes;
  }

  clone() {
    let clone = new Genome(this.numInputNodes, this.numOutputNodes, this.activation);

    for (let i = 0; i < this.nodes.length; i++) {
      clone.nodes.push(this.nodes[i].clone());
    }

    for (let i = 0; i < this.connections.length; i++) {
      clone.connections.push(this.connections[i].clone());
    }

    return clone;
  }
}
