(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("neaterJS", [], factory);
	else if(typeof exports === 'object')
		exports["neaterJS"] = factory();
	else
		root["neaterJS"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/activations.js":
/*!****************************!*\
  !*** ./src/activations.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sigmoid = sigmoid;
exports.tanh = tanh;
exports.binaryStep = binaryStep;

function sigmoid(x) {
  return 1.0 / (1.0 + Math.pow(Math.E, -4.9 * x));
}

function tanh(x) {
  return Math.tanh(x);
}

function binaryStep(x) {
  var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return x < step ? 0.0 : 1.0;
}

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONFIG = void 0;
var CONFIG = {
  C1: 1.0,
  C2: 2.0,
  C3: 4.0,
  COMPABILITY_THRESHOLD: 3.0,
  PERCENTAGE_NEW_NODE: 0.03,
  PERCENTAGE_NEW_CONNECTION: 0.05,
  PERCENTAGE_MUTATION: 0.8,
  PERCENTAGE_MUTATION_ADJUST_WEIGHT: 0.9,
  STAGNATION_THRESHOLD: 0.05,
  ADJUST_WEIGHT_FACTOR: 0.2,
  NEW_WEIGHT_RANGE: 1.0,
  ALLOW_LOOPS: false
};
exports.CONFIG = CONFIG;

/***/ }),

/***/ "./src/connection.js":
/*!***************************!*\
  !*** ./src/connection.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = __webpack_require__(/*! ./config.js */ "./src/config.js");

var _utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Connection =
/*#__PURE__*/
function () {
  function Connection(start, end, weight, enabled, innovation) {
    _classCallCheck(this, Connection);

    this.start = start;
    this.end = end;
    this.weight = weight;
    this.enabled = enabled;
    this.innovation = innovation;
  }

  _createClass(Connection, [{
    key: "adjustWeight",
    value: function adjustWeight() {
      this.weight += (0, _utils.randomDoubleFromInterval)(this.weight * _config.CONFIG.ADJUST_WEIGHT_FACTOR, -this.weight * _config.CONFIG.ADJUST_WEIGHT_FACTOR);
    }
  }, {
    key: "reassignWeight",
    value: function reassignWeight() {
      this.weight = (0, _utils.randomDoubleFromInterval)(_config.CONFIG.NEW_WEIGHT_RANGE, -_config.CONFIG.NEW_WEIGHT_RANGE);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Connection(this.start, this.end, this.weight, this.enabled, this.innovation);
    }
  }]);

  return Connection;
}();

exports.default = Connection;
module.exports = exports["default"];

/***/ }),

/***/ "./src/genome.js":
/*!***********************!*\
  !*** ./src/genome.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _types = _interopRequireDefault(__webpack_require__(/*! ./types.js */ "./src/types.js"));

var _node = _interopRequireDefault(__webpack_require__(/*! ./node.js */ "./src/node.js"));

var _connection = _interopRequireDefault(__webpack_require__(/*! ./connection.js */ "./src/connection.js"));

var _config = __webpack_require__(/*! ./config.js */ "./src/config.js");

var _innovation = _interopRequireDefault(__webpack_require__(/*! ./innovation.js */ "./src/innovation.js"));

var _utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Genome =
/*#__PURE__*/
function () {
  function Genome(numInputNodes, numOutputNodes, activation) {
    _classCallCheck(this, Genome);

    // BIAS|INPUT1|INPUT2|OUTPUT|HIDDEN
    // 0   |     1|     2|     3|     4      POSITION & ID
    this.nodes = [];
    this.connections = [];
    this.numInputNodes = numInputNodes;
    this.numOutputNodes = numOutputNodes;
    this.activation = activation;
  } // connect input and bias nodes to output nodes with random weights


  _createClass(Genome, [{
    key: "initialize",
    value: function initialize() {
      // insert BIAS node
      this.nodes.push(new _node.default(0, _types.default.BIAS, 1.0)); // insert INPUT nodes

      for (var i = 0; i < this.numInputNodes; i++) {
        this.nodes.push(new _node.default(1 + i, _types.default.INPUT));
      } // insert OUTPUT nodes


      for (var _i = 0; _i < this.numOutputNodes; _i++) {
        this.nodes.push(new _node.default(1 + this.numInputNodes + _i, _types.default.OUTPUT));
      }

      var inputNodes = this.getInputNodes();
      var outputNodes = this.getOutputNodes();

      for (var _i2 = 0; _i2 < outputNodes.length; _i2++) {
        var weight = (0, _utils.randomDoubleFromInterval)(_config.CONFIG.NEW_WEIGHT_RANGE, -_config.CONFIG.NEW_WEIGHT_RANGE);
        this.connections.push(new _connection.default(0, _i2 + this.numInputNodes + 1, weight, true, _innovation.default.getNextInnovationNumber(0, 1 + this.numInputNodes + _i2)));
      }

      for (var _i3 = 0; _i3 < inputNodes.length; _i3++) {
        for (var j = 0; j < outputNodes.length; j++) {
          var _weight = (0, _utils.randomDoubleFromInterval)(_config.CONFIG.NEW_WEIGHT_RANGE, -_config.CONFIG.NEW_WEIGHT_RANGE);

          this.connections.push(new _connection.default(_i3 + 1, j + this.numInputNodes + 1, _weight, true, _innovation.default.getNextInnovationNumber(1 + _i3, 1 + this.numInputNodes + j)));
        }
      }
    }
  }, {
    key: "getBiasNode",
    value: function getBiasNode() {
      return this.nodes[0];
    }
  }, {
    key: "getInputNodes",
    value: function getInputNodes() {
      return this.nodes.slice(1, 1 + this.numInputNodes);
    }
  }, {
    key: "getOutputNodes",
    value: function getOutputNodes() {
      return this.nodes.slice(1 + this.numInputNodes, 1 + this.numInputNodes + this.numOutputNodes);
    }
  }, {
    key: "getHiddenNodes",
    value: function getHiddenNodes() {
      return this.nodes.slice(1 + this.numInputNodes + this.numOutputNodes);
    } // Mutation: add new node in between two nodes who were previously connected
    // disable old connection and replace it with one new node and two new connections
    // start to new node gets weight 1.0
    // new node to end gets weight of old connection

  }, {
    key: "addNode",
    value: function addNode() {
      var connection = this.connections[Math.floor(Math.random() * this.connections.length)];
      connection.enabled = false;
      var newNode = new _node.default(_innovation.default.getNextNodeId(connection), _types.default.HIDDEN);
      this.nodes.push(newNode);
      this.connections.push(new _connection.default(connection.start, newNode.id, 1.0, true, _innovation.default.getNextInnovationNumber(connection.start, newNode.id)));
      this.connections.push(new _connection.default(newNode.id, connection.end, connection.weight, true, _innovation.default.getNextInnovationNumber(newNode.id, connection.end)));
    } // Mutation: add new connection between two unconnected nodes
    // invalid connections:
    //  - already connected nodes
    //  - two input nodes
    //  - input node and bias
    //  - same node

  }, {
    key: "addConnection",
    value: function addConnection() {
      if (this.getHiddenNodes().length < 1) {
        return;
      }

      var count = 0;
      var connectionOk = false;
      var node1;
      var node2;
      var endNodes = this.getHiddenNodes().concat(this.getOutputNodes());

      while (!connectionOk) {
        node1 = this.nodes[Math.floor(Math.random() * this.nodes.length)];
        node2 = endNodes[Math.floor(Math.random() * endNodes.length)];
        connectionOk = !this.alreadyConnected(node1, node2);

        if (!_config.CONFIG.ALLOW_LOOPS) {
          connectionOk = connectionOk && !this.sameNode(node1, node2);

          if (connectionOk) {
            // check for loops
            var testConnection = new _connection.default(node1.id, node2.id, 1.0, true, -1);

            if (this.sortNodes(testConnection)) {
              connectionOk = true;
            } else {
              connectionOk = false;
            }
          }
        }

        count++; // if we can't find a suitable connection within 50 tries, return

        if (count > 50) {
          return;
        }
      }

      var weight = (0, _utils.randomDoubleFromInterval)(_config.CONFIG.NEW_WEIGHT_RANGE, -_config.CONFIG.NEW_WEIGHT_RANGE);
      this.connections.push(new _connection.default(node1.id, node2.id, weight, true, _innovation.default.getNextInnovationNumber(node1.id, node2.id)));
    } // Returns true if network is fully satisfied, i.e. no new connection possible
    // input nodes can be connected to hidden and output nodes, no loops
    // bias nodes can be conneced to hidden and output nodes, no loops
    // hidden nodes can be only connected to hidden and output nodes
    // output nodes can be connected to hidden and output nodes

  }, {
    key: "isFullyConnected",
    value: function isFullyConnected() {
      var numHiddenNodes = this.getHiddenNodes().length;
      var sum = 0;

      if (!_config.CONFIG.ALLOW_LOOPS) {
        var numConnectionsFromInput = this.numInputNodes * (numHiddenNodes + this.numOutputNodes);
        var numConnectionsFromHidden = numHiddenNodes * (numHiddenNodes - 1 + this.numOutputNodes);
        var numConnectionsFromBias = numHiddenNodes + this.numOutputNodes;
        sum = numConnectionsFromInput + numConnectionsFromHidden + numConnectionsFromBias;
      } else {
        var _numConnectionsFromInput = this.numInputNodes * (numHiddenNodes + this.numOutputNodes);

        var _numConnectionsFromHidden = numHiddenNodes * (numHiddenNodes + this.numOutputNodes);

        var _numConnectionsFromBias = numHiddenNodes + this.numOutputNodes;

        var numConnectionsFromOutput = this.numOutputNodes * (numHiddenNodes + this.numOutputNodes);
        sum = _numConnectionsFromInput + _numConnectionsFromHidden + _numConnectionsFromBias + numConnectionsFromOutput;
      }

      return sum === this.connections.length;
    }
  }, {
    key: "alreadyConnected",
    value: function alreadyConnected(node1, node2) {
      for (var i = 0; i < this.connections.length; i++) {
        if (this.connections[i].start === node1.id && this.connections[i].end === node2.id) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "sameNode",
    value: function sameNode(node1, node2) {
      if (_config.CONFIG.ALLOW_LOOPS) {
        return false;
      }

      return node1.id === node2.id;
    }
  }, {
    key: "resetNetwork",
    value: function resetNetwork() {
      for (var i = 1; i <= this.nodes; i++) {
        this.nodes[i].outputValue = 0;
      }
    }
  }, {
    key: "setInputs",
    value: function setInputs(inputValues) {
      for (var i = 1; i <= this.numInputNodes; i++) {
        this.nodes[i].outputValue = inputValues[i - 1];
      }
    }
  }, {
    key: "activateNetwork",
    value: function activateNetwork() {
      if (!_config.CONFIG.ALLOW_LOOPS) {
        var sortedNodes = this.sortNodes();

        for (var i = 1 + this.numInputNodes; i < sortedNodes.length; i++) {
          this.activateNode(sortedNodes[i]);
        }
      } else {
        // activate hidden nodes, then output nodes
        var hiddenNodes = this.getHiddenNodes();

        for (var _i4 = 0; _i4 < hiddenNodes.length; _i4++) {
          this.activateNode(hiddenNodes[_i4]);
        }

        var outputNodes = this.getOutputNodes();

        for (var _i5 = 0; _i5 < outputNodes.length; _i5++) {
          this.activateNode(outputNodes[_i5]);
        }
      } // return output values


      return this.getOutputNodes().map(function (n) {
        return n.outputValue;
      });
    }
  }, {
    key: "activateNode",
    value: function activateNode(node) {
      var _this = this;

      // do not fire if disabled
      var inputConnections = this.connections.filter(function (c) {
        return c.end === node.id;
      });
      var localSum = 0.0;

      var _loop = function _loop(j) {
        if (!inputConnections[j].enabled) {
          return "continue";
        }

        var startNode = _this.nodes.find(function (n) {
          return n.id === inputConnections[j].start;
        });

        localSum += startNode.outputValue * inputConnections[j].weight;
      };

      for (var j = 0; j < inputConnections.length; j++) {
        var _ret = _loop(j);

        if (_ret === "continue") continue;
      }

      node.outputValue = this.activation(localSum);
    }
  }, {
    key: "sortNodes",
    value: function sortNodes() {
      var testConnection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var sortedNodes = [];
      var startNodes = [this.getBiasNode()].concat(this.getInputNodes());
      var otherNodes = this.getHiddenNodes().concat(this.getOutputNodes());
      var connections = JSON.parse(JSON.stringify(this.connections.filter(function (c) {
        return c.enabled;
      })));

      if (testConnection) {
        connections.push(testConnection);
      }

      var _loop2 = function _loop2() {
        var node = startNodes.splice(0, 1)[0];
        sortedNodes.push(node);
        connections = connections.filter(function (c) {
          return c.start !== node.id;
        });

        var _loop3 = function _loop3(i) {
          if (!connections.some(function (c) {
            return c.end === otherNodes[i].id;
          })) {
            startNodes.push(otherNodes.splice(i, 1)[0]);
          }
        };

        for (var i = 0; i < otherNodes.length; i++) {
          _loop3(i);
        }
      };

      while (startNodes.length > 0) {
        _loop2();
      }

      if (connections.length > 0) {
        return false;
      }

      return sortedNodes;
    }
  }, {
    key: "clone",
    value: function clone() {
      var clone = new Genome(this.numInputNodes, this.numOutputNodes, this.activation);

      for (var i = 0; i < this.nodes.length; i++) {
        clone.nodes.push(this.nodes[i].clone());
      }

      for (var _i6 = 0; _i6 < this.connections.length; _i6++) {
        clone.connections.push(this.connections[_i6].clone());
      }

      return clone;
    }
  }]);

  return Genome;
}();

exports.default = Genome;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
Object.defineProperty(exports, "CONFIG", {
  enumerable: true,
  get: function get() {
    return _config.CONFIG;
  }
});
exports.Activations = void 0;

var _neat = _interopRequireDefault(__webpack_require__(/*! ./neat.js */ "./src/neat.js"));

var Activations = _interopRequireWildcard(__webpack_require__(/*! ./activations.js */ "./src/activations.js"));

exports.Activations = Activations;

var _config = __webpack_require__(/*! ./config.js */ "./src/config.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  var populationSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  var numInputs = arguments[1];
  var numOutputs = arguments[2];
  var neat = new _neat.default(populationSize, numInputs, numOutputs);
  neat.initialize();
  return neat;
}

/***/ }),

/***/ "./src/innovation.js":
/*!***************************!*\
  !*** ./src/innovation.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Innovation =
/*#__PURE__*/
function () {
  function Innovation() {
    _classCallCheck(this, Innovation);

    this.connectionCounter = -1;
    this.connectionDict = [];
    this.nodeCounter = -1;
    this.nodeDict = [];
  }

  _createClass(Innovation, [{
    key: "getNextNodeId",
    value: function getNextNodeId(connection) {
      if (this.nodeDict.some(function (c) {
        return c.start === connection.start && c.end === connection.end;
      })) {
        return this.nodeDict.find(function (c) {
          return c.start === connection.start && c.end === connection.end;
        }).nodeId;
      }

      this.nodeCounter++;
      this.nodeDict.push({
        start: connection.start,
        end: connection.end,
        nodeId: this.nodeCounter
      });
      return this.nodeCounter;
    }
  }, {
    key: "getNextInnovationNumber",
    value: function getNextInnovationNumber(start, end) {
      if (this.connectionDict.some(function (c) {
        return c.start === start && c.end === end;
      })) {
        return this.connectionDict.find(function (c) {
          return c.start === start && c.end === end;
        }).innovation;
      }

      this.connectionCounter++;
      this.connectionDict.push({
        start: start,
        end: end,
        innovation: this.connectionCounter
      });
      return this.connectionCounter;
    }
  }]);

  return Innovation;
}();

var _default = new Innovation();

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/neat.js":
/*!*********************!*\
  !*** ./src/neat.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _player = _interopRequireDefault(__webpack_require__(/*! ./player.js */ "./src/player.js"));

var _innovation = _interopRequireDefault(__webpack_require__(/*! ./innovation.js */ "./src/innovation.js"));

var _species5 = _interopRequireDefault(__webpack_require__(/*! ./species.js */ "./src/species.js"));

var Activations = _interopRequireWildcard(__webpack_require__(/*! ./activations.js */ "./src/activations.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NEAT =
/*#__PURE__*/
function () {
  function NEAT() {
    var populationSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    var numInputs = arguments[1];
    var numOutputs = arguments[2];
    var activation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Activations.binaryStep;

    _classCallCheck(this, NEAT);

    this.population = [];
    this.populationSize = populationSize;
    this.numInputs = numInputs;
    this.numOutputs = numOutputs;
    this.activation = activation;
    this.generation = 0;
    this.bestFitness = 0;
    this.numStagnated = 0;
    this.speciesDict = {};
  }

  _createClass(NEAT, [{
    key: "initialize",
    value: function initialize() {
      _innovation.default.nodeCounter = this.numInputs + this.numOutputs;

      for (var i = 0; i < this.populationSize; i++) {
        var player = new _player.default(this.generation, this.numInputs, this.numOutputs, this.activation);
        player.initialize();
        this.population.push(player);
      }

      this.speciesDict[0] = new _species5.default(0, this.population[0].clone());
    }
  }, {
    key: "getNumberOfSpecies",
    value: function getNumberOfSpecies() {
      return [].concat(_toConsumableArray(new Set(this.population.map(function (p) {
        return p.species;
      })))).length;
    }
  }, {
    key: "getOverallChampion",
    value: function getOverallChampion() {
      return this.population.reduce(function (prev, current) {
        return prev.fitness > current.fitness ? prev : current;
      });
    }
  }, {
    key: "repopulate",
    value: function repopulate() {
      var _this = this;

      // reset organisms
      if (this.generation > 0) {
        var _loop = function _loop(j) {
          var species = _this.speciesDict[j];
          species.dropOrganisms();

          if (species.isStagnated()) {
            _this.population = _this.population.filter(function (p) {
              return p.species !== species.id;
            });
            delete _this.speciesDict[j];
          }
        };

        for (var j in this.speciesDict) {
          _loop(j);
        }

        var overallChampion = this.getOverallChampion();

        if (overallChampion.fitness > this.bestFitness) {
          this.bestFitness = overallChampion.fitness;
          this.numStagnated = 0;
        } else {
          this.numStagnated++; // no improvements over 20 generations, only let the two best species reproduce
          // if (this.numStagnated > 19) {
          //   this.numStagnated = 0;
          //   if ([...new Set(this.population.map(p => p.species))].length > 1) {
          //     let clonedPopulation = JSON.parse(JSON.stringify(this.population)).sort((a, b) => b.fitness - a.fitness);
          //     let speciesId1 = clonedPopulation[0].species;
          //     let speciesId2;
          //     for (let i = 0; i < clonedPopulation.length; i++) {
          //       if (clonedPopulation[i].species !== speciesId1) {
          //         speciesId2 = clonedPopulation[i].species;
          //         break;
          //       }
          //     }
          //     this.population = this.population.filter(p => p.species === speciesId1 || p.species === speciesId2);
          //     for (let j in this.speciesDict) {
          //       let species = this.speciesDict[j];
          //       if (species.id !== speciesId1 && species.id !== speciesId2) {
          //         delete this.speciesDict[j];
          //       }
          //     }
          //   }
          // }
        }
      }

      this.generation++; // assign population to species

      for (var i = 0, len = this.population.length; i < len; i++) {
        var speciesFound = false;

        for (var j in this.speciesDict) {
          var species = this.speciesDict[j];

          if (species.isCompatibleWith(this.population[i])) {
            speciesFound = true;
            species.assignToSpecies(this.population[i]);
            break;
          }
        }

        if (!speciesFound) {
          var newSpeciesId = Math.max.apply(Math, _toConsumableArray(Object.keys(this.speciesDict).map(function (id) {
            return +id;
          }))) + 1;
          this.speciesDict[newSpeciesId] = new _species5.default(newSpeciesId, this.population[i].clone());
          this.speciesDict[newSpeciesId].assignToSpecies(this.population[i]);
        }
      } // delete species with not enough organisms


      for (var key in this.speciesDict) {
        var _species = this.speciesDict[key];

        if (_species.organisms.length < 1) {
          // this.population = this.population.filter(p => p.species !== species.id);
          delete this.speciesDict[key];
        }
      } // update representative per species (for next generation)


      var uniqueSpecies = [].concat(_toConsumableArray(new Set(this.population.map(function (p) {
        return p.species;
      }))));

      for (var _i = 0, _len = uniqueSpecies.length; _i < _len; _i++) {
        var candidates = this.speciesDict[uniqueSpecies[_i]].organisms;
        var representative = candidates[Math.floor(Math.random() * candidates.length)].clone();
        this.speciesDict[uniqueSpecies[_i]].representative = representative;
      } // sort species' organisms, drop bottom half per species, adjust fitness and declare champion
      // calculate total fitness sum


      var totalFitnessSum = 0.0;

      for (var _key in this.speciesDict) {
        var _species2 = this.speciesDict[_key];

        _species2.sortOrganisms();

        _species2.cull();

        _species2.adjustFitness();

        _species2.calculateFitnessSum();

        _species2.getChampion();

        totalFitnessSum += _species2.fitnessSum;
      } // Decide how many off springs we need per species (based on fitness sum distribution)
      // e.g. 100 off springs in species 2
      // 25% created by cloning
      // 75% created by crossover
      // ------------------------------------------------------------------------------------------------------


      for (var _key2 in this.speciesDict) {
        var _species3 = this.speciesDict[_key2];
        _species3.numOffsprings = Math.floor(_species3.fitnessSum / totalFitnessSum * this.population.length);

        if (_species3.organisms.length < 2) {
          _species3.numCloning = _species3.numOffsprings;
          _species3.numCrossover = 0;
        } else {
          _species3.numCloning = Math.floor(0.25 * _species3.numOffsprings);
          _species3.numCrossover = _species3.numOffsprings - _species3.numCloning;
        }
      } // reproduce and assign offspring to new population


      this.population = [];

      for (var _key3 in this.speciesDict) {
        var _species4 = this.speciesDict[_key3];

        if (_species4.numOffsprings > 0) {
          _species4.reproduce();

          this.population = this.population.concat(_species4.offsprings);
        }
      } // fill up the remaining spots (due to rounding errors) with new players


      if (this.population.length < this.populationSize) {
        var _representative = new _player.default(this.generation, this.numInputs, this.numOutputs, this.activation);

        _representative.initialize();

        var _newSpeciesId = Math.max.apply(Math, _toConsumableArray(Object.keys(this.speciesDict).map(function (id) {
          return +id;
        }))) + 1;

        this.speciesDict[_newSpeciesId] = new _species5.default(_newSpeciesId, _representative.clone());

        this.speciesDict[_newSpeciesId].assignToSpecies(_representative);

        this.population.push(_representative);

        while (this.population.length < this.populationSize) {
          var newPlayer = new _player.default(this.generation, this.numInputs, this.numOutputs, this.activation);
          newPlayer.initialize();

          this.speciesDict[_newSpeciesId].assignToSpecies(newPlayer);

          this.population.push(newPlayer);
        }
      }

      return this.population;
    }
  }]);

  return NEAT;
}();

exports.default = NEAT;
module.exports = exports["default"];

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Node =
/*#__PURE__*/
function () {
  function Node(id, type) {
    var outputValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0;

    _classCallCheck(this, Node);

    this.id = id;
    this.type = type;
    this.outputValue = outputValue;
  }

  _createClass(Node, [{
    key: "clone",
    value: function clone() {
      return new Node(this.id, this.type, this.outputValue);
    }
  }]);

  return Node;
}();

exports.default = Node;
module.exports = exports["default"];

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _genome = _interopRequireDefault(__webpack_require__(/*! ./genome.js */ "./src/genome.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player(generation, numInputs, numOutputs, activation) {
    var brain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var species = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var fitness = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0.0;

    _classCallCheck(this, Player);

    this.generation = generation;
    this.numInputs = numInputs;
    this.numOutputs = numOutputs;
    this.activation = activation;
    this.fitness = fitness;
    this.species = species;
    this.brain = brain;
  }

  _createClass(Player, [{
    key: "initialize",
    value: function initialize() {
      this.brain = new _genome.default(this.numInputs, this.numOutputs, this.activation);
      this.brain.initialize();
    } // tell player what he sees

  }, {
    key: "see",
    value: function see(inputValues) {
      this.brain.setInputs(inputValues);
    } // get output values after activating the player's network

  }, {
    key: "think",
    value: function think() {
      return this.brain.activateNetwork();
    }
  }, {
    key: "setFitness",
    value: function setFitness(fitness) {
      this.fitness = fitness;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Player(this.generation, this.numInputs, this.numOutputs, this.activation, this.brain.clone(), this.species, this.fitness);
    }
  }]);

  return Player;
}();

exports.default = Player;
module.exports = exports["default"];

/***/ }),

/***/ "./src/species.js":
/*!************************!*\
  !*** ./src/species.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = __webpack_require__(/*! ./config.js */ "./src/config.js");

var _player = _interopRequireDefault(__webpack_require__(/*! ./player.js */ "./src/player.js"));

var _genome = _interopRequireDefault(__webpack_require__(/*! ./genome.js */ "./src/genome.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Species =
/*#__PURE__*/
function () {
  function Species(id, representative) {
    _classCallCheck(this, Species);

    this.id = id;
    this.representative = representative;
    this.fitnessSum = 0.0;
    this.organisms = [];
    this.numOffsprings = 0;
    this.numCloning = 0;
    this.numCrossover = 0;
    this.offsprings = [];
    this.champion = {};
    this.numStagnated = 0;
  }

  _createClass(Species, [{
    key: "isStagnated",
    value: function isStagnated() {
      return this.numStagnated > 14;
    }
  }, {
    key: "dropOrganisms",
    value: function dropOrganisms() {
      this.organisms = [];
      this.offsprings = [];
      this.fitnessSum = 0.0;
      this.numOffsprings = 0;
      this.numCloning = 0;
      this.numCrossover = 0;
    }
  }, {
    key: "assignToSpecies",
    value: function assignToSpecies(player) {
      player.species = this.id;
      this.organisms.push(player);
    }
  }, {
    key: "adjustFitness",
    value: function adjustFitness() {
      for (var i = 0, len = this.organisms.length; i < len; i++) {
        this.organisms[i].fitness /= this.organisms.length;
      }
    }
  }, {
    key: "calculateFitnessSum",
    value: function calculateFitnessSum() {
      this.fitnessSum = 0.0;

      for (var i = 0, len = this.organisms.length; i < len; i++) {
        this.fitnessSum += this.organisms[i].fitness;
      }
    }
  }, {
    key: "getChampion",
    value: function getChampion() {
      if (this.champion && Math.abs(this.champion.fitness - this.organisms[0].fitness) < _config.CONFIG.STAGNATION_THRESHOLD) {
        this.numStagnated++;
      } else {
        this.numStagnated = 0;
      }

      this.champion = this.organisms[0];
    }
  }, {
    key: "isCompatibleWith",
    value: function isCompatibleWith(player) {
      var _this = this;

      var numDisjointGenes = 0;
      var numExcessGenes = 0;
      var numMatchingGenes = 0;
      var sumWeightDifferenceMatchingGenes = 0.0;
      var representativeHighestInnovation = this.representative.brain.connections[this.representative.brain.connections.length - 1].innovation;
      var playerHighestInnovation = player.brain.connections[player.brain.connections.length - 1].innovation;
      var innovationSet = [].concat(_toConsumableArray(new Set([].concat(_toConsumableArray(this.representative.brain.connections.map(function (c) {
        return c.innovation;
      })), _toConsumableArray(player.brain.connections.map(function (c) {
        return c.innovation;
      }))))));

      var _loop = function _loop(i, len) {
        if (_this.representative.brain.connections.some(function (c) {
          return c.innovation === innovationSet[i];
        }) && player.brain.connections.some(function (c) {
          return c.innovation === innovationSet[i];
        })) {
          sumWeightDifferenceMatchingGenes += Math.abs(_this.representative.brain.connections.find(function (c) {
            return c.innovation === innovationSet[i];
          }).weight - player.brain.connections.find(function (c) {
            return c.innovation === innovationSet[i];
          }).weight);
          numMatchingGenes++;
        } else if (_this.representative.brain.connections.some(function (c) {
          return c.innovation === innovationSet[i];
        })) {
          if (innovationSet[i] < playerHighestInnovation) {
            numDisjointGenes++;
          } else {
            numExcessGenes++;
          }
        } else {
          if (innovationSet[i] < representativeHighestInnovation) {
            numDisjointGenes++;
          } else {
            numExcessGenes++;
          }
        }
      };

      for (var i = 0, len = innovationSet.length; i < len; i++) {
        _loop(i, len);
      }

      var avgWeightDifferenceMatchingGenes = numMatchingGenes > 0 ? sumWeightDifferenceMatchingGenes / numMatchingGenes : 0.0;
      var N = Math.max(this.representative.brain.nodes.length + this.representative.brain.connections.length, player.brain.nodes.length + player.brain.connections.length);
      return _config.CONFIG.C1 * numExcessGenes / N + _config.CONFIG.C2 * numDisjointGenes / N + _config.CONFIG.C3 * avgWeightDifferenceMatchingGenes < _config.CONFIG.COMPABILITY_THRESHOLD;
    }
  }, {
    key: "sortOrganisms",
    value: function sortOrganisms() {
      this.organisms.sort(function (a, b) {
        return b.fitness - a.fitness;
      });
    }
  }, {
    key: "cull",
    value: function cull() {
      // dont half population otherwise we wont have two parents
      if (this.organisms.length < 4) {
        return;
      }

      this.calculateFitnessSum();
      var survivors = [];
      var numUpperHalf = Math.floor(this.organisms.length / 2.0);

      while (survivors.length < numUpperHalf) {
        var threshold = Math.random() * this.fitnessSum;
        var sum = 0.0;

        for (var i = 0; i < this.organisms.length; i++) {
          sum += this.organisms[i].fitness;

          if (sum >= threshold) {
            var survivor = this.organisms.splice(i, 1)[0];
            survivors.push(survivor);
            this.fitnessSum -= survivor.fitness;
            break;
          }
        }
      }

      this.organisms = survivors;
    }
  }, {
    key: "reproduce",
    value: function reproduce() {
      // copy champion unchanged
      var championClone = this.champion.clone();
      championClone.generation += 1;
      this.offsprings.push(championClone);

      if (this.numCloning > 0) {
        this.numCloning--;
      } else {
        this.numCrossover--;
      } // clone 25% asexual


      for (var i = 0, len = this.numCloning; i < len; i++) {
        var threshold = Math.random() * this.fitnessSum;
        var sum = 0.0;

        for (var j = 0, len2 = this.organisms.length; j < len2; j++) {
          sum += this.organisms[j].fitness;

          if (sum >= threshold) {
            var offspring = this.mutate(this.organisms[j]);
            offspring.generation++;
            this.offsprings.push(offspring);
            break;
          }
        }
      } // crossover 75%


      for (var _i = 0, _len = this.numCrossover; _i < _len; _i++) {
        var _threshold = Math.random() * this.fitnessSum;

        var _sum = 0.0;
        var parent1 = void 0;

        for (var _j = 0, _len2 = this.organisms.length; _j < _len2; _j++) {
          _sum += this.organisms[_j].fitness;

          if (_sum >= _threshold) {
            parent1 = this.organisms[_j];
            break;
          }
        }

        _threshold = Math.random() * this.fitnessSum;
        _sum = 0.0;
        var parent2 = void 0;

        do {
          for (var _j2 = 0, _len3 = this.organisms.length; _j2 < _len3; _j2++) {
            _sum += this.organisms[_j2].fitness;

            if (_sum >= _threshold) {
              parent2 = this.organisms[_j2];
              break;
            }
          }

          _threshold = Math.random() * this.fitnessSum;
          _sum = 0.0;
        } while (parent1 === parent2);

        var _offspring = this.mutate(this.crossover(parent1, parent2));

        this.offsprings.push(_offspring);
      }
    } // Every time we get a new off spring, there is a chance for mutation
    // a) 80% that existing connections get mutated (90% adjusted <-> 10% new value)
    // b) 25% that inherited gene which was disabled beforehand (in all parents) gets enabled again
    // c) 3% new node
    // d) 5% (or 30% when large population) new connection

  }, {
    key: "mutate",
    value: function mutate(parent) {
      var offspring = parent.clone(); // mutate connections

      for (var i = 0, len = offspring.brain.connections.length; i < len; i++) {
        if (Math.random() < _config.CONFIG.PERCENTAGE_MUTATION) {
          if (Math.random() < _config.CONFIG.PERCENTAGE_MUTATION_ADJUST_WEIGHT) {
            offspring.brain.connections[i].adjustWeight();
          } else {
            offspring.brain.connections[i].reassignWeight();
          }
        }
      }

      var disabledConenctions = offspring.brain.connections.filter(function (c) {
        return c.enabled === false;
      });

      for (var _i2 = 0, _len4 = disabledConenctions.length; _i2 < _len4; _i2++) {
        if (Math.random() < 0.25) {
          offspring.brain.connections[_i2].enabled = true;
        }
      }

      if (Math.random() < _config.CONFIG.PERCENTAGE_NEW_NODE) {
        offspring.brain.addNode();
      }

      if (Math.random() < _config.CONFIG.PERCENTAGE_NEW_CONNECTION) {
        offspring.brain.addConnection();
      }

      return offspring;
    }
  }, {
    key: "crossover",
    value: function crossover(parent1, parent2) {
      var brainOffspring = new _genome.default(parent1.numInputs, parent1.numOutputs, parent1.activation);
      var nodesSet = [].concat(_toConsumableArray(new Set([].concat(_toConsumableArray(parent1.brain.nodes.map(function (n) {
        return n.id;
      })), _toConsumableArray(parent2.brain.nodes.map(function (n) {
        return n.id;
      }))))));

      var _loop2 = function _loop2(i, len) {
        if (parent1.brain.nodes.some(function (n) {
          return n.id === nodesSet[i];
        }) && parent2.brain.nodes.some(function (n) {
          return n.id === nodesSet[i];
        })) {
          if (Math.random() < 0.5) {
            brainOffspring.nodes.push(parent1.brain.nodes.find(function (n) {
              return n.id === nodesSet[i];
            }).clone());
          } else {
            brainOffspring.nodes.push(parent2.brain.nodes.find(function (n) {
              return n.id === nodesSet[i];
            }).clone());
          }
        }
      };

      for (var i = 0, len = nodesSet.length; i < len; i++) {
        _loop2(i, len);
      }

      var innovationSet = [].concat(_toConsumableArray(new Set([].concat(_toConsumableArray(parent1.brain.connections.map(function (c) {
        return c.innovation;
      })), _toConsumableArray(parent2.brain.connections.map(function (c) {
        return c.innovation;
      }))))));

      var _loop3 = function _loop3(i, len) {
        if (parent1.brain.connections.some(function (c) {
          return c.innovation === innovationSet[i];
        }) && parent2.brain.connections.some(function (c) {
          return c.innovation === innovationSet[i];
        })) {
          if (Math.random() < 0.5) {
            brainOffspring.connections.push(parent1.brain.connections.find(function (c) {
              return c.innovation === innovationSet[i];
            }).clone());
          } else {
            brainOffspring.connections.push(parent2.brain.connections.find(function (c) {
              return c.innovation === innovationSet[i];
            }).clone());
          }
        } else {
          // disjoint and excess nodes
          if (parent1.brain.connections.some(function (c) {
            return c.innovation === innovationSet[i];
          })) {
            if (parent1.fitness >= parent2.fitness) {
              brainOffspring.connections.push(parent1.brain.connections.find(function (c) {
                return c.innovation === innovationSet[i];
              }).clone());
            }
          } else {
            if (parent2.fitness >= parent1.fitness) {
              brainOffspring.connections.push(parent2.brain.connections.find(function (c) {
                return c.innovation === innovationSet[i];
              }).clone());
            }
          }
        }
      };

      for (var i = 0, len = innovationSet.length; i < len; i++) {
        _loop3(i, len);
      } // only clone nodes where we have references to


      var neededNodesSet = [].concat(_toConsumableArray(new Set([].concat(_toConsumableArray(brainOffspring.connections.map(function (c) {
        return c.start;
      })), _toConsumableArray(brainOffspring.connections.map(function (c) {
        return c.end;
      }))))));

      var _loop4 = function _loop4(i, len) {
        if (!brainOffspring.nodes.find(function (n) {
          return n.id === neededNodesSet[i];
        })) {
          if (parent1.brain.nodes.some(function (n) {
            return n.id === neededNodesSet[i];
          })) {
            brainOffspring.nodes.push(parent1.brain.nodes.find(function (n) {
              return n.id === neededNodesSet[i];
            }).clone());
          } else {
            brainOffspring.nodes.push(parent2.brain.nodes.find(function (n) {
              return n.id === neededNodesSet[i];
            }).clone());
          }
        }
      };

      for (var i = 0, len = neededNodesSet.length; i < len; i++) {
        _loop4(i, len);
      }

      var offspring = new _player.default(parent1.generation + 1, parent1.numInputs, parent1.numOutputs, parent1.activation, brainOffspring, parent1.species);
      return offspring;
    }
  }]);

  return Species;
}();

exports.default = Species;
module.exports = exports["default"];

/***/ }),

/***/ "./src/types.js":
/*!**********************!*\
  !*** ./src/types.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  BIAS: 'bias',
  INPUT: 'input',
  OUTPUT: 'output',
  HIDDEN: 'hidden'
};
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomDoubleFromInterval = randomDoubleFromInterval;

function randomDoubleFromInterval(max, min) {
  return Math.random() * (max - min) + min;
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZWF0ZXJKUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbmVhdGVySlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmVhdGVySlMvLi9zcmMvYWN0aXZhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbmVhdGVySlMvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL25lYXRlckpTLy4vc3JjL2Nvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbmVhdGVySlMvLi9zcmMvZ2Vub21lLmpzIiwid2VicGFjazovL25lYXRlckpTLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL25lYXRlckpTLy4vc3JjL2lubm92YXRpb24uanMiLCJ3ZWJwYWNrOi8vbmVhdGVySlMvLi9zcmMvbmVhdC5qcyIsIndlYnBhY2s6Ly9uZWF0ZXJKUy8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL25lYXRlckpTLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9uZWF0ZXJKUy8uL3NyYy9zcGVjaWVzLmpzIiwid2VicGFjazovL25lYXRlckpTLy4vc3JjL3R5cGVzLmpzIiwid2VicGFjazovL25lYXRlckpTLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbInNpZ21vaWQiLCJ4IiwiTWF0aCIsInBvdyIsIkUiLCJ0YW5oIiwiYmluYXJ5U3RlcCIsInN0ZXAiLCJDT05GSUciLCJDMSIsIkMyIiwiQzMiLCJDT01QQUJJTElUWV9USFJFU0hPTEQiLCJQRVJDRU5UQUdFX05FV19OT0RFIiwiUEVSQ0VOVEFHRV9ORVdfQ09OTkVDVElPTiIsIlBFUkNFTlRBR0VfTVVUQVRJT04iLCJQRVJDRU5UQUdFX01VVEFUSU9OX0FESlVTVF9XRUlHSFQiLCJTVEFHTkFUSU9OX1RIUkVTSE9MRCIsIkFESlVTVF9XRUlHSFRfRkFDVE9SIiwiTkVXX1dFSUdIVF9SQU5HRSIsIkFMTE9XX0xPT1BTIiwiQ29ubmVjdGlvbiIsInN0YXJ0IiwiZW5kIiwid2VpZ2h0IiwiZW5hYmxlZCIsImlubm92YXRpb24iLCJHZW5vbWUiLCJudW1JbnB1dE5vZGVzIiwibnVtT3V0cHV0Tm9kZXMiLCJhY3RpdmF0aW9uIiwibm9kZXMiLCJjb25uZWN0aW9ucyIsInB1c2giLCJCSUFTIiwiaSIsIklOUFVUIiwiT1VUUFVUIiwiaW5wdXROb2RlcyIsImdldElucHV0Tm9kZXMiLCJvdXRwdXROb2RlcyIsImdldE91dHB1dE5vZGVzIiwibGVuZ3RoIiwiZ2V0TmV4dElubm92YXRpb25OdW1iZXIiLCJqIiwic2xpY2UiLCJjb25uZWN0aW9uIiwiZmxvb3IiLCJyYW5kb20iLCJuZXdOb2RlIiwiZ2V0TmV4dE5vZGVJZCIsIkhJRERFTiIsImlkIiwiZ2V0SGlkZGVuTm9kZXMiLCJjb3VudCIsImNvbm5lY3Rpb25PayIsIm5vZGUxIiwibm9kZTIiLCJlbmROb2RlcyIsImNvbmNhdCIsImFscmVhZHlDb25uZWN0ZWQiLCJzYW1lTm9kZSIsInRlc3RDb25uZWN0aW9uIiwic29ydE5vZGVzIiwibnVtSGlkZGVuTm9kZXMiLCJzdW0iLCJudW1Db25uZWN0aW9uc0Zyb21JbnB1dCIsIm51bUNvbm5lY3Rpb25zRnJvbUhpZGRlbiIsIm51bUNvbm5lY3Rpb25zRnJvbUJpYXMiLCJudW1Db25uZWN0aW9uc0Zyb21PdXRwdXQiLCJvdXRwdXRWYWx1ZSIsImlucHV0VmFsdWVzIiwic29ydGVkTm9kZXMiLCJhY3RpdmF0ZU5vZGUiLCJoaWRkZW5Ob2RlcyIsIm1hcCIsIm4iLCJub2RlIiwiaW5wdXRDb25uZWN0aW9ucyIsImZpbHRlciIsImMiLCJsb2NhbFN1bSIsInN0YXJ0Tm9kZSIsImZpbmQiLCJzdGFydE5vZGVzIiwiZ2V0Qmlhc05vZGUiLCJvdGhlck5vZGVzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3BsaWNlIiwic29tZSIsImNsb25lIiwiaW5pdCIsInBvcHVsYXRpb25TaXplIiwibnVtSW5wdXRzIiwibnVtT3V0cHV0cyIsIm5lYXQiLCJpbml0aWFsaXplIiwiSW5ub3ZhdGlvbiIsImNvbm5lY3Rpb25Db3VudGVyIiwiY29ubmVjdGlvbkRpY3QiLCJub2RlQ291bnRlciIsIm5vZGVEaWN0Iiwibm9kZUlkIiwiTkVBVCIsIkFjdGl2YXRpb25zIiwicG9wdWxhdGlvbiIsImdlbmVyYXRpb24iLCJiZXN0Rml0bmVzcyIsIm51bVN0YWduYXRlZCIsInNwZWNpZXNEaWN0IiwicGxheWVyIiwiU2V0IiwicCIsInNwZWNpZXMiLCJyZWR1Y2UiLCJwcmV2IiwiY3VycmVudCIsImZpdG5lc3MiLCJkcm9wT3JnYW5pc21zIiwiaXNTdGFnbmF0ZWQiLCJvdmVyYWxsQ2hhbXBpb24iLCJnZXRPdmVyYWxsQ2hhbXBpb24iLCJsZW4iLCJzcGVjaWVzRm91bmQiLCJpc0NvbXBhdGlibGVXaXRoIiwiYXNzaWduVG9TcGVjaWVzIiwibmV3U3BlY2llc0lkIiwibWF4IiwiT2JqZWN0Iiwia2V5cyIsImtleSIsIm9yZ2FuaXNtcyIsInVuaXF1ZVNwZWNpZXMiLCJjYW5kaWRhdGVzIiwicmVwcmVzZW50YXRpdmUiLCJ0b3RhbEZpdG5lc3NTdW0iLCJzb3J0T3JnYW5pc21zIiwiY3VsbCIsImFkanVzdEZpdG5lc3MiLCJjYWxjdWxhdGVGaXRuZXNzU3VtIiwiZ2V0Q2hhbXBpb24iLCJmaXRuZXNzU3VtIiwibnVtT2Zmc3ByaW5ncyIsIm51bUNsb25pbmciLCJudW1Dcm9zc292ZXIiLCJyZXByb2R1Y2UiLCJvZmZzcHJpbmdzIiwibmV3UGxheWVyIiwiTm9kZSIsInR5cGUiLCJQbGF5ZXIiLCJicmFpbiIsInNldElucHV0cyIsImFjdGl2YXRlTmV0d29yayIsIlNwZWNpZXMiLCJjaGFtcGlvbiIsImFicyIsIm51bURpc2pvaW50R2VuZXMiLCJudW1FeGNlc3NHZW5lcyIsIm51bU1hdGNoaW5nR2VuZXMiLCJzdW1XZWlnaHREaWZmZXJlbmNlTWF0Y2hpbmdHZW5lcyIsInJlcHJlc2VudGF0aXZlSGlnaGVzdElubm92YXRpb24iLCJwbGF5ZXJIaWdoZXN0SW5ub3ZhdGlvbiIsImlubm92YXRpb25TZXQiLCJhdmdXZWlnaHREaWZmZXJlbmNlTWF0Y2hpbmdHZW5lcyIsIk4iLCJzb3J0IiwiYSIsImIiLCJzdXJ2aXZvcnMiLCJudW1VcHBlckhhbGYiLCJ0aHJlc2hvbGQiLCJzdXJ2aXZvciIsImNoYW1waW9uQ2xvbmUiLCJsZW4yIiwib2Zmc3ByaW5nIiwibXV0YXRlIiwicGFyZW50MSIsInBhcmVudDIiLCJjcm9zc292ZXIiLCJwYXJlbnQiLCJhZGp1c3RXZWlnaHQiLCJyZWFzc2lnbldlaWdodCIsImRpc2FibGVkQ29uZW5jdGlvbnMiLCJhZGROb2RlIiwiYWRkQ29ubmVjdGlvbiIsImJyYWluT2Zmc3ByaW5nIiwibm9kZXNTZXQiLCJuZWVkZWROb2Rlc1NldCIsInJhbmRvbURvdWJsZUZyb21JbnRlcnZhbCIsIm1pbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7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LEVBQTRDO0FBQ2pELFNBQU85TCxJQUFJLENBQUM4QyxNQUFMLE1BQWlCaUYsR0FBRyxHQUFHK0QsR0FBdkIsSUFBOEJBLEdBQXJDO0FBQ0QsQyIsImZpbGUiOiJuZWF0ZXJKUy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibmVhdGVySlNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmVhdGVySlNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibmVhdGVySlNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZnVuY3Rpb24gc2lnbW9pZCh4KSB7XHJcbiAgcmV0dXJuIDEuMCAvICgxLjAgKyBNYXRoLnBvdyhNYXRoLkUsIC00LjkgKiB4KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0YW5oKHgpIHtcclxuICByZXR1cm4gTWF0aC50YW5oKHgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U3RlcCh4LCBzdGVwID0gMC41KSB7XHJcbiAgcmV0dXJuIHggPCBzdGVwID8gMC4wIDogMS4wO1xyXG59XHJcbiIsImV4cG9ydCBsZXQgQ09ORklHID0ge1xyXG4gIEMxOiAxLjAsXHJcbiAgQzI6IDIuMCxcclxuICBDMzogNC4wLFxyXG4gIENPTVBBQklMSVRZX1RIUkVTSE9MRDogMy4wLFxyXG4gIFBFUkNFTlRBR0VfTkVXX05PREU6IDAuMDMsXHJcbiAgUEVSQ0VOVEFHRV9ORVdfQ09OTkVDVElPTjogMC4wNSxcclxuICBQRVJDRU5UQUdFX01VVEFUSU9OOiAwLjgsXHJcbiAgUEVSQ0VOVEFHRV9NVVRBVElPTl9BREpVU1RfV0VJR0hUOiAwLjksXHJcbiAgU1RBR05BVElPTl9USFJFU0hPTEQ6IDAuMDUsXHJcbiAgQURKVVNUX1dFSUdIVF9GQUNUT1I6IDAuMixcclxuICBORVdfV0VJR0hUX1JBTkdFOiAxLjAsXHJcbiAgQUxMT1dfTE9PUFM6IGZhbHNlXHJcbn07XHJcbiIsImltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcclxuaW1wb3J0IHsgcmFuZG9tRG91YmxlRnJvbUludGVydmFsIH0gZnJvbSAnLi91dGlscy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0aW9uIHtcclxuICBjb25zdHJ1Y3RvcihzdGFydCwgZW5kLCB3ZWlnaHQsIGVuYWJsZWQsIGlubm92YXRpb24pIHtcclxuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgIHRoaXMuZW5kID0gZW5kO1xyXG4gICAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XHJcbiAgICB0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xyXG4gICAgdGhpcy5pbm5vdmF0aW9uID0gaW5ub3ZhdGlvbjtcclxuICB9XHJcblxyXG4gIGFkanVzdFdlaWdodCgpIHtcclxuICAgIHRoaXMud2VpZ2h0ICs9IHJhbmRvbURvdWJsZUZyb21JbnRlcnZhbChcclxuICAgICAgdGhpcy53ZWlnaHQgKiBDT05GSUcuQURKVVNUX1dFSUdIVF9GQUNUT1IsXHJcbiAgICAgIC10aGlzLndlaWdodCAqIENPTkZJRy5BREpVU1RfV0VJR0hUX0ZBQ1RPUlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlYXNzaWduV2VpZ2h0KCkge1xyXG4gICAgdGhpcy53ZWlnaHQgPSByYW5kb21Eb3VibGVGcm9tSW50ZXJ2YWwoQ09ORklHLk5FV19XRUlHSFRfUkFOR0UsIC1DT05GSUcuTkVXX1dFSUdIVF9SQU5HRSk7XHJcbiAgfVxyXG5cclxuICBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgQ29ubmVjdGlvbih0aGlzLnN0YXJ0LCB0aGlzLmVuZCwgdGhpcy53ZWlnaHQsIHRoaXMuZW5hYmxlZCwgdGhpcy5pbm5vdmF0aW9uKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4vdHlwZXMuanMnO1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUuanMnO1xyXG5pbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuL2Nvbm5lY3Rpb24uanMnO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XHJcbmltcG9ydCBJbm5vdmF0aW9uIGZyb20gJy4vaW5ub3ZhdGlvbi5qcyc7XHJcbmltcG9ydCB7IHJhbmRvbURvdWJsZUZyb21JbnRlcnZhbCB9IGZyb20gJy4vdXRpbHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2Vub21lIHtcclxuICBjb25zdHJ1Y3RvcihudW1JbnB1dE5vZGVzLCBudW1PdXRwdXROb2RlcywgYWN0aXZhdGlvbikge1xyXG4gICAgLy8gQklBU3xJTlBVVDF8SU5QVVQyfE9VVFBVVHxISURERU5cclxuICAgIC8vIDAgICB8ICAgICAxfCAgICAgMnwgICAgIDN8ICAgICA0ICAgICAgUE9TSVRJT04gJiBJRFxyXG4gICAgdGhpcy5ub2RlcyA9IFtdO1xyXG4gICAgdGhpcy5jb25uZWN0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5udW1JbnB1dE5vZGVzID0gbnVtSW5wdXROb2RlcztcclxuICAgIHRoaXMubnVtT3V0cHV0Tm9kZXMgPSBudW1PdXRwdXROb2RlcztcclxuICAgIHRoaXMuYWN0aXZhdGlvbiA9IGFjdGl2YXRpb247XHJcbiAgfVxyXG5cclxuICAvLyBjb25uZWN0IGlucHV0IGFuZCBiaWFzIG5vZGVzIHRvIG91dHB1dCBub2RlcyB3aXRoIHJhbmRvbSB3ZWlnaHRzXHJcbiAgaW5pdGlhbGl6ZSgpIHtcclxuICAgIC8vIGluc2VydCBCSUFTIG5vZGVcclxuICAgIHRoaXMubm9kZXMucHVzaChuZXcgTm9kZSgwLCBUeXBlcy5CSUFTLCAxLjApKTtcclxuXHJcbiAgICAvLyBpbnNlcnQgSU5QVVQgbm9kZXNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1JbnB1dE5vZGVzOyBpKyspIHtcclxuICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5ldyBOb2RlKDEgKyBpLCBUeXBlcy5JTlBVVCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGluc2VydCBPVVRQVVQgbm9kZXNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1PdXRwdXROb2RlczsgaSsrKSB7XHJcbiAgICAgIHRoaXMubm9kZXMucHVzaChuZXcgTm9kZSgxICsgdGhpcy5udW1JbnB1dE5vZGVzICsgaSwgVHlwZXMuT1VUUFVUKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGlucHV0Tm9kZXMgPSB0aGlzLmdldElucHV0Tm9kZXMoKTtcclxuICAgIGxldCBvdXRwdXROb2RlcyA9IHRoaXMuZ2V0T3V0cHV0Tm9kZXMoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dHB1dE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB3ZWlnaHQgPSByYW5kb21Eb3VibGVGcm9tSW50ZXJ2YWwoQ09ORklHLk5FV19XRUlHSFRfUkFOR0UsIC1DT05GSUcuTkVXX1dFSUdIVF9SQU5HRSk7XHJcblxyXG4gICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2goXHJcbiAgICAgICAgbmV3IENvbm5lY3Rpb24oXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgaSArIHRoaXMubnVtSW5wdXROb2RlcyArIDEsXHJcbiAgICAgICAgICB3ZWlnaHQsXHJcbiAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgSW5ub3ZhdGlvbi5nZXROZXh0SW5ub3ZhdGlvbk51bWJlcigwLCAxICsgdGhpcy5udW1JbnB1dE5vZGVzICsgaSlcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3V0cHV0Tm9kZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBsZXQgd2VpZ2h0ID0gcmFuZG9tRG91YmxlRnJvbUludGVydmFsKENPTkZJRy5ORVdfV0VJR0hUX1JBTkdFLCAtQ09ORklHLk5FV19XRUlHSFRfUkFOR0UpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2goXHJcbiAgICAgICAgICBuZXcgQ29ubmVjdGlvbihcclxuICAgICAgICAgICAgaSArIDEsXHJcbiAgICAgICAgICAgIGogKyB0aGlzLm51bUlucHV0Tm9kZXMgKyAxLFxyXG4gICAgICAgICAgICB3ZWlnaHQsXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIElubm92YXRpb24uZ2V0TmV4dElubm92YXRpb25OdW1iZXIoMSArIGksIDEgKyB0aGlzLm51bUlucHV0Tm9kZXMgKyBqKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEJpYXNOb2RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZXNbMF07XHJcbiAgfVxyXG5cclxuICBnZXRJbnB1dE5vZGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZXMuc2xpY2UoMSwgMSArIHRoaXMubnVtSW5wdXROb2Rlcyk7XHJcbiAgfVxyXG5cclxuICBnZXRPdXRwdXROb2RlcygpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVzLnNsaWNlKDEgKyB0aGlzLm51bUlucHV0Tm9kZXMsIDEgKyB0aGlzLm51bUlucHV0Tm9kZXMgKyB0aGlzLm51bU91dHB1dE5vZGVzKTtcclxuICB9XHJcblxyXG4gIGdldEhpZGRlbk5vZGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZXMuc2xpY2UoMSArIHRoaXMubnVtSW5wdXROb2RlcyArIHRoaXMubnVtT3V0cHV0Tm9kZXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gTXV0YXRpb246IGFkZCBuZXcgbm9kZSBpbiBiZXR3ZWVuIHR3byBub2RlcyB3aG8gd2VyZSBwcmV2aW91c2x5IGNvbm5lY3RlZFxyXG4gIC8vIGRpc2FibGUgb2xkIGNvbm5lY3Rpb24gYW5kIHJlcGxhY2UgaXQgd2l0aCBvbmUgbmV3IG5vZGUgYW5kIHR3byBuZXcgY29ubmVjdGlvbnNcclxuICAvLyBzdGFydCB0byBuZXcgbm9kZSBnZXRzIHdlaWdodCAxLjBcclxuICAvLyBuZXcgbm9kZSB0byBlbmQgZ2V0cyB3ZWlnaHQgb2Ygb2xkIGNvbm5lY3Rpb25cclxuICBhZGROb2RlKCkge1xyXG4gICAgbGV0IGNvbm5lY3Rpb24gPSB0aGlzLmNvbm5lY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29ubmVjdGlvbnMubGVuZ3RoKV07XHJcblxyXG4gICAgY29ubmVjdGlvbi5lbmFibGVkID0gZmFsc2U7XHJcbiAgICBsZXQgbmV3Tm9kZSA9IG5ldyBOb2RlKElubm92YXRpb24uZ2V0TmV4dE5vZGVJZChjb25uZWN0aW9uKSwgVHlwZXMuSElEREVOKTtcclxuXHJcbiAgICB0aGlzLm5vZGVzLnB1c2gobmV3Tm9kZSk7XHJcbiAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2goXHJcbiAgICAgIG5ldyBDb25uZWN0aW9uKFxyXG4gICAgICAgIGNvbm5lY3Rpb24uc3RhcnQsXHJcbiAgICAgICAgbmV3Tm9kZS5pZCxcclxuICAgICAgICAxLjAsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBJbm5vdmF0aW9uLmdldE5leHRJbm5vdmF0aW9uTnVtYmVyKGNvbm5lY3Rpb24uc3RhcnQsIG5ld05vZGUuaWQpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2goXHJcbiAgICAgIG5ldyBDb25uZWN0aW9uKFxyXG4gICAgICAgIG5ld05vZGUuaWQsXHJcbiAgICAgICAgY29ubmVjdGlvbi5lbmQsXHJcbiAgICAgICAgY29ubmVjdGlvbi53ZWlnaHQsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBJbm5vdmF0aW9uLmdldE5leHRJbm5vdmF0aW9uTnVtYmVyKG5ld05vZGUuaWQsIGNvbm5lY3Rpb24uZW5kKVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gTXV0YXRpb246IGFkZCBuZXcgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byB1bmNvbm5lY3RlZCBub2Rlc1xyXG4gIC8vIGludmFsaWQgY29ubmVjdGlvbnM6XHJcbiAgLy8gIC0gYWxyZWFkeSBjb25uZWN0ZWQgbm9kZXNcclxuICAvLyAgLSB0d28gaW5wdXQgbm9kZXNcclxuICAvLyAgLSBpbnB1dCBub2RlIGFuZCBiaWFzXHJcbiAgLy8gIC0gc2FtZSBub2RlXHJcbiAgYWRkQ29ubmVjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmdldEhpZGRlbk5vZGVzKCkubGVuZ3RoIDwgMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGxldCBjb25uZWN0aW9uT2sgPSBmYWxzZTtcclxuICAgIGxldCBub2RlMTtcclxuICAgIGxldCBub2RlMjtcclxuICAgIGxldCBlbmROb2RlcyA9IHRoaXMuZ2V0SGlkZGVuTm9kZXMoKS5jb25jYXQodGhpcy5nZXRPdXRwdXROb2RlcygpKTtcclxuXHJcbiAgICB3aGlsZSAoIWNvbm5lY3Rpb25Paykge1xyXG4gICAgICBub2RlMSA9IHRoaXMubm9kZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ub2Rlcy5sZW5ndGgpXTtcclxuICAgICAgbm9kZTIgPSBlbmROb2Rlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbmROb2Rlcy5sZW5ndGgpXTtcclxuXHJcbiAgICAgIGNvbm5lY3Rpb25PayA9ICF0aGlzLmFscmVhZHlDb25uZWN0ZWQobm9kZTEsIG5vZGUyKTtcclxuXHJcbiAgICAgIGlmICghQ09ORklHLkFMTE9XX0xPT1BTKSB7XHJcbiAgICAgICAgY29ubmVjdGlvbk9rID0gY29ubmVjdGlvbk9rICYmICF0aGlzLnNhbWVOb2RlKG5vZGUxLCBub2RlMik7XHJcbiAgICAgICAgaWYgKGNvbm5lY3Rpb25Paykge1xyXG4gICAgICAgICAgLy8gY2hlY2sgZm9yIGxvb3BzXHJcbiAgICAgICAgICBsZXQgdGVzdENvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihub2RlMS5pZCwgbm9kZTIuaWQsIDEuMCwgdHJ1ZSwgLTEpO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnNvcnROb2Rlcyh0ZXN0Q29ubmVjdGlvbikpIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbk9rID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb25PayA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY291bnQrKztcclxuICAgICAgLy8gaWYgd2UgY2FuJ3QgZmluZCBhIHN1aXRhYmxlIGNvbm5lY3Rpb24gd2l0aGluIDUwIHRyaWVzLCByZXR1cm5cclxuICAgICAgaWYgKGNvdW50ID4gNTApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgd2VpZ2h0ID0gcmFuZG9tRG91YmxlRnJvbUludGVydmFsKENPTkZJRy5ORVdfV0VJR0hUX1JBTkdFLCAtQ09ORklHLk5FV19XRUlHSFRfUkFOR0UpO1xyXG5cclxuICAgIHRoaXMuY29ubmVjdGlvbnMucHVzaChcclxuICAgICAgbmV3IENvbm5lY3Rpb24obm9kZTEuaWQsIG5vZGUyLmlkLCB3ZWlnaHQsIHRydWUsIElubm92YXRpb24uZ2V0TmV4dElubm92YXRpb25OdW1iZXIobm9kZTEuaWQsIG5vZGUyLmlkKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm5zIHRydWUgaWYgbmV0d29yayBpcyBmdWxseSBzYXRpc2ZpZWQsIGkuZS4gbm8gbmV3IGNvbm5lY3Rpb24gcG9zc2libGVcclxuICAvLyBpbnB1dCBub2RlcyBjYW4gYmUgY29ubmVjdGVkIHRvIGhpZGRlbiBhbmQgb3V0cHV0IG5vZGVzLCBubyBsb29wc1xyXG4gIC8vIGJpYXMgbm9kZXMgY2FuIGJlIGNvbm5lY2VkIHRvIGhpZGRlbiBhbmQgb3V0cHV0IG5vZGVzLCBubyBsb29wc1xyXG4gIC8vIGhpZGRlbiBub2RlcyBjYW4gYmUgb25seSBjb25uZWN0ZWQgdG8gaGlkZGVuIGFuZCBvdXRwdXQgbm9kZXNcclxuICAvLyBvdXRwdXQgbm9kZXMgY2FuIGJlIGNvbm5lY3RlZCB0byBoaWRkZW4gYW5kIG91dHB1dCBub2Rlc1xyXG4gIGlzRnVsbHlDb25uZWN0ZWQoKSB7XHJcbiAgICBjb25zdCBudW1IaWRkZW5Ob2RlcyA9IHRoaXMuZ2V0SGlkZGVuTm9kZXMoKS5sZW5ndGg7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuXHJcbiAgICBpZiAoIUNPTkZJRy5BTExPV19MT09QUykge1xyXG4gICAgICBjb25zdCBudW1Db25uZWN0aW9uc0Zyb21JbnB1dCA9IHRoaXMubnVtSW5wdXROb2RlcyAqIChudW1IaWRkZW5Ob2RlcyArIHRoaXMubnVtT3V0cHV0Tm9kZXMpO1xyXG4gICAgICBjb25zdCBudW1Db25uZWN0aW9uc0Zyb21IaWRkZW4gPSBudW1IaWRkZW5Ob2RlcyAqIChudW1IaWRkZW5Ob2RlcyAtIDEgKyB0aGlzLm51bU91dHB1dE5vZGVzKTtcclxuICAgICAgY29uc3QgbnVtQ29ubmVjdGlvbnNGcm9tQmlhcyA9IG51bUhpZGRlbk5vZGVzICsgdGhpcy5udW1PdXRwdXROb2RlcztcclxuXHJcbiAgICAgIHN1bSA9IG51bUNvbm5lY3Rpb25zRnJvbUlucHV0ICsgbnVtQ29ubmVjdGlvbnNGcm9tSGlkZGVuICsgbnVtQ29ubmVjdGlvbnNGcm9tQmlhcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG51bUNvbm5lY3Rpb25zRnJvbUlucHV0ID0gdGhpcy5udW1JbnB1dE5vZGVzICogKG51bUhpZGRlbk5vZGVzICsgdGhpcy5udW1PdXRwdXROb2Rlcyk7XHJcbiAgICAgIGNvbnN0IG51bUNvbm5lY3Rpb25zRnJvbUhpZGRlbiA9IG51bUhpZGRlbk5vZGVzICogKG51bUhpZGRlbk5vZGVzICsgdGhpcy5udW1PdXRwdXROb2Rlcyk7XHJcbiAgICAgIGNvbnN0IG51bUNvbm5lY3Rpb25zRnJvbUJpYXMgPSBudW1IaWRkZW5Ob2RlcyArIHRoaXMubnVtT3V0cHV0Tm9kZXM7XHJcbiAgICAgIGNvbnN0IG51bUNvbm5lY3Rpb25zRnJvbU91dHB1dCA9IHRoaXMubnVtT3V0cHV0Tm9kZXMgKiAobnVtSGlkZGVuTm9kZXMgKyB0aGlzLm51bU91dHB1dE5vZGVzKTtcclxuXHJcbiAgICAgIHN1bSA9IG51bUNvbm5lY3Rpb25zRnJvbUlucHV0ICsgbnVtQ29ubmVjdGlvbnNGcm9tSGlkZGVuICsgbnVtQ29ubmVjdGlvbnNGcm9tQmlhcyArIG51bUNvbm5lY3Rpb25zRnJvbU91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VtID09PSB0aGlzLmNvbm5lY3Rpb25zLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGFscmVhZHlDb25uZWN0ZWQobm9kZTEsIG5vZGUyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbnNbaV0uc3RhcnQgPT09IG5vZGUxLmlkICYmIHRoaXMuY29ubmVjdGlvbnNbaV0uZW5kID09PSBub2RlMi5pZCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzYW1lTm9kZShub2RlMSwgbm9kZTIpIHtcclxuICAgIGlmIChDT05GSUcuQUxMT1dfTE9PUFMpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGUxLmlkID09PSBub2RlMi5pZDtcclxuICB9XHJcblxyXG4gIHJlc2V0TmV0d29yaygpIHtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMubm9kZXM7IGkrKykge1xyXG4gICAgICB0aGlzLm5vZGVzW2ldLm91dHB1dFZhbHVlID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldElucHV0cyhpbnB1dFZhbHVlcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5udW1JbnB1dE5vZGVzOyBpKyspIHtcclxuICAgICAgdGhpcy5ub2Rlc1tpXS5vdXRwdXRWYWx1ZSA9IGlucHV0VmFsdWVzW2kgLSAxXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlTmV0d29yaygpIHtcclxuICAgIGlmICghQ09ORklHLkFMTE9XX0xPT1BTKSB7XHJcbiAgICAgIGxldCBzb3J0ZWROb2RlcyA9IHRoaXMuc29ydE5vZGVzKCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMSArIHRoaXMubnVtSW5wdXROb2RlczsgaSA8IHNvcnRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZU5vZGUoc29ydGVkTm9kZXNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBhY3RpdmF0ZSBoaWRkZW4gbm9kZXMsIHRoZW4gb3V0cHV0IG5vZGVzXHJcbiAgICAgIGxldCBoaWRkZW5Ob2RlcyA9IHRoaXMuZ2V0SGlkZGVuTm9kZXMoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGlkZGVuTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlTm9kZShoaWRkZW5Ob2Rlc1tpXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBvdXRwdXROb2RlcyA9IHRoaXMuZ2V0T3V0cHV0Tm9kZXMoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0cHV0Tm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlTm9kZShvdXRwdXROb2Rlc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gb3V0cHV0IHZhbHVlc1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0T3V0cHV0Tm9kZXMoKS5tYXAobiA9PiBuLm91dHB1dFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlTm9kZShub2RlKSB7XHJcbiAgICAvLyBkbyBub3QgZmlyZSBpZiBkaXNhYmxlZFxyXG4gICAgbGV0IGlucHV0Q29ubmVjdGlvbnMgPSB0aGlzLmNvbm5lY3Rpb25zLmZpbHRlcihjID0+IGMuZW5kID09PSBub2RlLmlkKTtcclxuICAgIGxldCBsb2NhbFN1bSA9IDAuMDtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGlucHV0Q29ubmVjdGlvbnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgaWYgKCFpbnB1dENvbm5lY3Rpb25zW2pdLmVuYWJsZWQpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHN0YXJ0Tm9kZSA9IHRoaXMubm9kZXMuZmluZChuID0+IG4uaWQgPT09IGlucHV0Q29ubmVjdGlvbnNbal0uc3RhcnQpO1xyXG5cclxuICAgICAgbG9jYWxTdW0gKz0gc3RhcnROb2RlLm91dHB1dFZhbHVlICogaW5wdXRDb25uZWN0aW9uc1tqXS53ZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgbm9kZS5vdXRwdXRWYWx1ZSA9IHRoaXMuYWN0aXZhdGlvbihsb2NhbFN1bSk7XHJcbiAgfVxyXG5cclxuICBzb3J0Tm9kZXModGVzdENvbm5lY3Rpb24gPSBudWxsKSB7XHJcbiAgICBsZXQgc29ydGVkTm9kZXMgPSBbXTtcclxuICAgIGxldCBzdGFydE5vZGVzID0gW3RoaXMuZ2V0Qmlhc05vZGUoKV0uY29uY2F0KHRoaXMuZ2V0SW5wdXROb2RlcygpKTtcclxuICAgIGxldCBvdGhlck5vZGVzID0gdGhpcy5nZXRIaWRkZW5Ob2RlcygpLmNvbmNhdCh0aGlzLmdldE91dHB1dE5vZGVzKCkpO1xyXG5cclxuICAgIGxldCBjb25uZWN0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jb25uZWN0aW9ucy5maWx0ZXIoYyA9PiBjLmVuYWJsZWQpKSk7XHJcblxyXG4gICAgaWYgKHRlc3RDb25uZWN0aW9uKSB7XHJcbiAgICAgIGNvbm5lY3Rpb25zLnB1c2godGVzdENvbm5lY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChzdGFydE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IG5vZGUgPSBzdGFydE5vZGVzLnNwbGljZSgwLCAxKVswXTtcclxuXHJcbiAgICAgIHNvcnRlZE5vZGVzLnB1c2gobm9kZSk7XHJcblxyXG4gICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihjID0+IGMuc3RhcnQgIT09IG5vZGUuaWQpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoIWNvbm5lY3Rpb25zLnNvbWUoYyA9PiBjLmVuZCA9PT0gb3RoZXJOb2Rlc1tpXS5pZCkpIHtcclxuICAgICAgICAgIHN0YXJ0Tm9kZXMucHVzaChvdGhlck5vZGVzLnNwbGljZShpLCAxKVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbm5lY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNvcnRlZE5vZGVzO1xyXG4gIH1cclxuXHJcbiAgY2xvbmUoKSB7XHJcbiAgICBsZXQgY2xvbmUgPSBuZXcgR2Vub21lKHRoaXMubnVtSW5wdXROb2RlcywgdGhpcy5udW1PdXRwdXROb2RlcywgdGhpcy5hY3RpdmF0aW9uKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2xvbmUubm9kZXMucHVzaCh0aGlzLm5vZGVzW2ldLmNsb25lKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjbG9uZS5jb25uZWN0aW9ucy5wdXNoKHRoaXMuY29ubmVjdGlvbnNbaV0uY2xvbmUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNsb25lO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgTkVBVCBmcm9tICcuL25lYXQuanMnO1xyXG5pbXBvcnQgKiBhcyBBY3RpdmF0aW9ucyBmcm9tICcuL2FjdGl2YXRpb25zLmpzJztcclxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuZXhwb3J0IHsgQWN0aXZhdGlvbnMsIENPTkZJRyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQocG9wdWxhdGlvblNpemUgPSAxMDAsIG51bUlucHV0cywgbnVtT3V0cHV0cykge1xyXG4gIGxldCBuZWF0ID0gbmV3IE5FQVQocG9wdWxhdGlvblNpemUsIG51bUlucHV0cywgbnVtT3V0cHV0cyk7XHJcblxyXG4gIG5lYXQuaW5pdGlhbGl6ZSgpO1xyXG4gIHJldHVybiBuZWF0O1xyXG59XHJcbiIsImNsYXNzIElubm92YXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jb25uZWN0aW9uQ291bnRlciA9IC0xO1xyXG4gICAgdGhpcy5jb25uZWN0aW9uRGljdCA9IFtdO1xyXG4gICAgdGhpcy5ub2RlQ291bnRlciA9IC0xO1xyXG4gICAgdGhpcy5ub2RlRGljdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV4dE5vZGVJZChjb25uZWN0aW9uKSB7XHJcbiAgICBpZiAodGhpcy5ub2RlRGljdC5zb21lKGMgPT4gYy5zdGFydCA9PT0gY29ubmVjdGlvbi5zdGFydCAmJiBjLmVuZCA9PT0gY29ubmVjdGlvbi5lbmQpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5vZGVEaWN0LmZpbmQoYyA9PiBjLnN0YXJ0ID09PSBjb25uZWN0aW9uLnN0YXJ0ICYmIGMuZW5kID09PSBjb25uZWN0aW9uLmVuZCkubm9kZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubm9kZUNvdW50ZXIrKztcclxuICAgIHRoaXMubm9kZURpY3QucHVzaCh7IHN0YXJ0OiBjb25uZWN0aW9uLnN0YXJ0LCBlbmQ6IGNvbm5lY3Rpb24uZW5kLCBub2RlSWQ6IHRoaXMubm9kZUNvdW50ZXIgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5ub2RlQ291bnRlcjtcclxuICB9XHJcblxyXG4gIGdldE5leHRJbm5vdmF0aW9uTnVtYmVyKHN0YXJ0LCBlbmQpIHtcclxuICAgIGlmICh0aGlzLmNvbm5lY3Rpb25EaWN0LnNvbWUoYyA9PiBjLnN0YXJ0ID09PSBzdGFydCAmJiBjLmVuZCA9PT0gZW5kKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uRGljdC5maW5kKGMgPT4gYy5zdGFydCA9PT0gc3RhcnQgJiYgYy5lbmQgPT09IGVuZCkuaW5ub3ZhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbm5lY3Rpb25Db3VudGVyKys7XHJcbiAgICB0aGlzLmNvbm5lY3Rpb25EaWN0LnB1c2goeyBzdGFydDogc3RhcnQsIGVuZDogZW5kLCBpbm5vdmF0aW9uOiB0aGlzLmNvbm5lY3Rpb25Db3VudGVyIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbkNvdW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSW5ub3ZhdGlvbigpO1xyXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJztcclxuaW1wb3J0IElubm92YXRpb24gZnJvbSAnLi9pbm5vdmF0aW9uLmpzJztcclxuaW1wb3J0IFNwZWNpZXMgZnJvbSAnLi9zcGVjaWVzLmpzJztcclxuaW1wb3J0ICogYXMgQWN0aXZhdGlvbnMgZnJvbSAnLi9hY3RpdmF0aW9ucy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBORUFUIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1bGF0aW9uU2l6ZSA9IDEwMCwgbnVtSW5wdXRzLCBudW1PdXRwdXRzLCBhY3RpdmF0aW9uID0gQWN0aXZhdGlvbnMuYmluYXJ5U3RlcCkge1xyXG4gICAgdGhpcy5wb3B1bGF0aW9uID0gW107XHJcbiAgICB0aGlzLnBvcHVsYXRpb25TaXplID0gcG9wdWxhdGlvblNpemU7XHJcbiAgICB0aGlzLm51bUlucHV0cyA9IG51bUlucHV0cztcclxuICAgIHRoaXMubnVtT3V0cHV0cyA9IG51bU91dHB1dHM7XHJcbiAgICB0aGlzLmFjdGl2YXRpb24gPSBhY3RpdmF0aW9uO1xyXG4gICAgdGhpcy5nZW5lcmF0aW9uID0gMDtcclxuICAgIHRoaXMuYmVzdEZpdG5lc3MgPSAwO1xyXG4gICAgdGhpcy5udW1TdGFnbmF0ZWQgPSAwO1xyXG4gICAgdGhpcy5zcGVjaWVzRGljdCA9IHt9O1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZSgpIHtcclxuICAgIElubm92YXRpb24ubm9kZUNvdW50ZXIgPSB0aGlzLm51bUlucHV0cyArIHRoaXMubnVtT3V0cHV0cztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wdWxhdGlvblNpemU7IGkrKykge1xyXG4gICAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllcih0aGlzLmdlbmVyYXRpb24sIHRoaXMubnVtSW5wdXRzLCB0aGlzLm51bU91dHB1dHMsIHRoaXMuYWN0aXZhdGlvbik7XHJcblxyXG4gICAgICBwbGF5ZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICB0aGlzLnBvcHVsYXRpb24ucHVzaChwbGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3BlY2llc0RpY3RbMF0gPSBuZXcgU3BlY2llcygwLCB0aGlzLnBvcHVsYXRpb25bMF0uY2xvbmUoKSk7XHJcbiAgfVxyXG5cclxuICBnZXROdW1iZXJPZlNwZWNpZXMoKSB7XHJcbiAgICByZXR1cm4gWy4uLm5ldyBTZXQodGhpcy5wb3B1bGF0aW9uLm1hcChwID0+IHAuc3BlY2llcykpXS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBnZXRPdmVyYWxsQ2hhbXBpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wb3B1bGF0aW9uLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gKHByZXYuZml0bmVzcyA+IGN1cnJlbnQuZml0bmVzcyA/IHByZXYgOiBjdXJyZW50KSk7XHJcbiAgfVxyXG5cclxuICByZXBvcHVsYXRlKCkge1xyXG4gICAgLy8gcmVzZXQgb3JnYW5pc21zXHJcbiAgICBpZiAodGhpcy5nZW5lcmF0aW9uID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBqIGluIHRoaXMuc3BlY2llc0RpY3QpIHtcclxuICAgICAgICBsZXQgc3BlY2llcyA9IHRoaXMuc3BlY2llc0RpY3Rbal07XHJcblxyXG4gICAgICAgIHNwZWNpZXMuZHJvcE9yZ2FuaXNtcygpO1xyXG5cclxuICAgICAgICBpZiAoc3BlY2llcy5pc1N0YWduYXRlZCgpKSB7XHJcbiAgICAgICAgICB0aGlzLnBvcHVsYXRpb24gPSB0aGlzLnBvcHVsYXRpb24uZmlsdGVyKHAgPT4gcC5zcGVjaWVzICE9PSBzcGVjaWVzLmlkKTtcclxuICAgICAgICAgIGRlbGV0ZSB0aGlzLnNwZWNpZXNEaWN0W2pdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG92ZXJhbGxDaGFtcGlvbiA9IHRoaXMuZ2V0T3ZlcmFsbENoYW1waW9uKCk7XHJcblxyXG4gICAgICBpZiAob3ZlcmFsbENoYW1waW9uLmZpdG5lc3MgPiB0aGlzLmJlc3RGaXRuZXNzKSB7XHJcbiAgICAgICAgdGhpcy5iZXN0Rml0bmVzcyA9IG92ZXJhbGxDaGFtcGlvbi5maXRuZXNzO1xyXG4gICAgICAgIHRoaXMubnVtU3RhZ25hdGVkID0gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm51bVN0YWduYXRlZCsrO1xyXG5cclxuICAgICAgICAvLyBubyBpbXByb3ZlbWVudHMgb3ZlciAyMCBnZW5lcmF0aW9ucywgb25seSBsZXQgdGhlIHR3byBiZXN0IHNwZWNpZXMgcmVwcm9kdWNlXHJcbiAgICAgICAgLy8gaWYgKHRoaXMubnVtU3RhZ25hdGVkID4gMTkpIHtcclxuICAgICAgICAvLyAgIHRoaXMubnVtU3RhZ25hdGVkID0gMDtcclxuXHJcbiAgICAgICAgLy8gICBpZiAoWy4uLm5ldyBTZXQodGhpcy5wb3B1bGF0aW9uLm1hcChwID0+IHAuc3BlY2llcykpXS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBjbG9uZWRQb3B1bGF0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBvcHVsYXRpb24pKS5zb3J0KChhLCBiKSA9PiBiLmZpdG5lc3MgLSBhLmZpdG5lc3MpO1xyXG4gICAgICAgIC8vICAgICBsZXQgc3BlY2llc0lkMSA9IGNsb25lZFBvcHVsYXRpb25bMF0uc3BlY2llcztcclxuICAgICAgICAvLyAgICAgbGV0IHNwZWNpZXNJZDI7XHJcblxyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsb25lZFBvcHVsYXRpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgICBpZiAoY2xvbmVkUG9wdWxhdGlvbltpXS5zcGVjaWVzICE9PSBzcGVjaWVzSWQxKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBzcGVjaWVzSWQyID0gY2xvbmVkUG9wdWxhdGlvbltpXS5zcGVjaWVzO1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLnBvcHVsYXRpb24gPSB0aGlzLnBvcHVsYXRpb24uZmlsdGVyKHAgPT4gcC5zcGVjaWVzID09PSBzcGVjaWVzSWQxIHx8IHAuc3BlY2llcyA9PT0gc3BlY2llc0lkMik7XHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGogaW4gdGhpcy5zcGVjaWVzRGljdCkge1xyXG4gICAgICAgIC8vICAgICAgIGxldCBzcGVjaWVzID0gdGhpcy5zcGVjaWVzRGljdFtqXTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgaWYgKHNwZWNpZXMuaWQgIT09IHNwZWNpZXNJZDEgJiYgc3BlY2llcy5pZCAhPT0gc3BlY2llc0lkMikge1xyXG4gICAgICAgIC8vICAgICAgICAgZGVsZXRlIHRoaXMuc3BlY2llc0RpY3Rbal07XHJcbiAgICAgICAgLy8gICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZW5lcmF0aW9uKys7XHJcblxyXG4gICAgLy8gYXNzaWduIHBvcHVsYXRpb24gdG8gc3BlY2llc1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMucG9wdWxhdGlvbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBsZXQgc3BlY2llc0ZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICBmb3IgKGxldCBqIGluIHRoaXMuc3BlY2llc0RpY3QpIHtcclxuICAgICAgICBsZXQgc3BlY2llcyA9IHRoaXMuc3BlY2llc0RpY3Rbal07XHJcblxyXG4gICAgICAgIGlmIChzcGVjaWVzLmlzQ29tcGF0aWJsZVdpdGgodGhpcy5wb3B1bGF0aW9uW2ldKSkge1xyXG4gICAgICAgICAgc3BlY2llc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgIHNwZWNpZXMuYXNzaWduVG9TcGVjaWVzKHRoaXMucG9wdWxhdGlvbltpXSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghc3BlY2llc0ZvdW5kKSB7XHJcbiAgICAgICAgY29uc3QgbmV3U3BlY2llc0lkID0gTWF0aC5tYXgoLi4uT2JqZWN0LmtleXModGhpcy5zcGVjaWVzRGljdCkubWFwKGlkID0+ICtpZCkpICsgMTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGVjaWVzRGljdFtuZXdTcGVjaWVzSWRdID0gbmV3IFNwZWNpZXMobmV3U3BlY2llc0lkLCB0aGlzLnBvcHVsYXRpb25baV0uY2xvbmUoKSk7XHJcbiAgICAgICAgdGhpcy5zcGVjaWVzRGljdFtuZXdTcGVjaWVzSWRdLmFzc2lnblRvU3BlY2llcyh0aGlzLnBvcHVsYXRpb25baV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGVsZXRlIHNwZWNpZXMgd2l0aCBub3QgZW5vdWdoIG9yZ2FuaXNtc1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3BlY2llc0RpY3QpIHtcclxuICAgICAgbGV0IHNwZWNpZXMgPSB0aGlzLnNwZWNpZXNEaWN0W2tleV07XHJcblxyXG4gICAgICBpZiAoc3BlY2llcy5vcmdhbmlzbXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgIC8vIHRoaXMucG9wdWxhdGlvbiA9IHRoaXMucG9wdWxhdGlvbi5maWx0ZXIocCA9PiBwLnNwZWNpZXMgIT09IHNwZWNpZXMuaWQpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnNwZWNpZXNEaWN0W2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgcmVwcmVzZW50YXRpdmUgcGVyIHNwZWNpZXMgKGZvciBuZXh0IGdlbmVyYXRpb24pXHJcbiAgICBjb25zdCB1bmlxdWVTcGVjaWVzID0gWy4uLm5ldyBTZXQodGhpcy5wb3B1bGF0aW9uLm1hcChwID0+IHAuc3BlY2llcykpXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdW5pcXVlU3BlY2llcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBjb25zdCBjYW5kaWRhdGVzID0gdGhpcy5zcGVjaWVzRGljdFt1bmlxdWVTcGVjaWVzW2ldXS5vcmdhbmlzbXM7XHJcbiAgICAgIGNvbnN0IHJlcHJlc2VudGF0aXZlID0gY2FuZGlkYXRlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYW5kaWRhdGVzLmxlbmd0aCldLmNsb25lKCk7XHJcblxyXG4gICAgICB0aGlzLnNwZWNpZXNEaWN0W3VuaXF1ZVNwZWNpZXNbaV1dLnJlcHJlc2VudGF0aXZlID0gcmVwcmVzZW50YXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc29ydCBzcGVjaWVzJyBvcmdhbmlzbXMsIGRyb3AgYm90dG9tIGhhbGYgcGVyIHNwZWNpZXMsIGFkanVzdCBmaXRuZXNzIGFuZCBkZWNsYXJlIGNoYW1waW9uXHJcbiAgICAvLyBjYWxjdWxhdGUgdG90YWwgZml0bmVzcyBzdW1cclxuICAgIGxldCB0b3RhbEZpdG5lc3NTdW0gPSAwLjA7XHJcblxyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3BlY2llc0RpY3QpIHtcclxuICAgICAgY29uc3Qgc3BlY2llcyA9IHRoaXMuc3BlY2llc0RpY3Rba2V5XTtcclxuXHJcbiAgICAgIHNwZWNpZXMuc29ydE9yZ2FuaXNtcygpO1xyXG4gICAgICBzcGVjaWVzLmN1bGwoKTtcclxuICAgICAgc3BlY2llcy5hZGp1c3RGaXRuZXNzKCk7XHJcbiAgICAgIHNwZWNpZXMuY2FsY3VsYXRlRml0bmVzc1N1bSgpO1xyXG4gICAgICBzcGVjaWVzLmdldENoYW1waW9uKCk7XHJcbiAgICAgIHRvdGFsRml0bmVzc1N1bSArPSBzcGVjaWVzLmZpdG5lc3NTdW07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVjaWRlIGhvdyBtYW55IG9mZiBzcHJpbmdzIHdlIG5lZWQgcGVyIHNwZWNpZXMgKGJhc2VkIG9uIGZpdG5lc3Mgc3VtIGRpc3RyaWJ1dGlvbilcclxuICAgIC8vIGUuZy4gMTAwIG9mZiBzcHJpbmdzIGluIHNwZWNpZXMgMlxyXG4gICAgLy8gMjUlIGNyZWF0ZWQgYnkgY2xvbmluZ1xyXG4gICAgLy8gNzUlIGNyZWF0ZWQgYnkgY3Jvc3NvdmVyXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnNwZWNpZXNEaWN0KSB7XHJcbiAgICAgIGNvbnN0IHNwZWNpZXMgPSB0aGlzLnNwZWNpZXNEaWN0W2tleV07XHJcblxyXG4gICAgICBzcGVjaWVzLm51bU9mZnNwcmluZ3MgPSBNYXRoLmZsb29yKChzcGVjaWVzLmZpdG5lc3NTdW0gLyB0b3RhbEZpdG5lc3NTdW0pICogdGhpcy5wb3B1bGF0aW9uLmxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAoc3BlY2llcy5vcmdhbmlzbXMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHNwZWNpZXMubnVtQ2xvbmluZyA9IHNwZWNpZXMubnVtT2Zmc3ByaW5ncztcclxuICAgICAgICBzcGVjaWVzLm51bUNyb3Nzb3ZlciA9IDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3BlY2llcy5udW1DbG9uaW5nID0gTWF0aC5mbG9vcigwLjI1ICogc3BlY2llcy5udW1PZmZzcHJpbmdzKTtcclxuICAgICAgICBzcGVjaWVzLm51bUNyb3Nzb3ZlciA9IHNwZWNpZXMubnVtT2Zmc3ByaW5ncyAtIHNwZWNpZXMubnVtQ2xvbmluZztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlcHJvZHVjZSBhbmQgYXNzaWduIG9mZnNwcmluZyB0byBuZXcgcG9wdWxhdGlvblxyXG4gICAgdGhpcy5wb3B1bGF0aW9uID0gW107XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zcGVjaWVzRGljdCkge1xyXG4gICAgICBjb25zdCBzcGVjaWVzID0gdGhpcy5zcGVjaWVzRGljdFtrZXldO1xyXG5cclxuICAgICAgaWYgKHNwZWNpZXMubnVtT2Zmc3ByaW5ncyA+IDApIHtcclxuICAgICAgICBzcGVjaWVzLnJlcHJvZHVjZSgpO1xyXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbiA9IHRoaXMucG9wdWxhdGlvbi5jb25jYXQoc3BlY2llcy5vZmZzcHJpbmdzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpbGwgdXAgdGhlIHJlbWFpbmluZyBzcG90cyAoZHVlIHRvIHJvdW5kaW5nIGVycm9ycykgd2l0aCBuZXcgcGxheWVyc1xyXG4gICAgaWYgKHRoaXMucG9wdWxhdGlvbi5sZW5ndGggPCB0aGlzLnBvcHVsYXRpb25TaXplKSB7XHJcbiAgICAgIGxldCByZXByZXNlbnRhdGl2ZSA9IG5ldyBQbGF5ZXIodGhpcy5nZW5lcmF0aW9uLCB0aGlzLm51bUlucHV0cywgdGhpcy5udW1PdXRwdXRzLCB0aGlzLmFjdGl2YXRpb24pO1xyXG5cclxuICAgICAgcmVwcmVzZW50YXRpdmUuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICBjb25zdCBuZXdTcGVjaWVzSWQgPSBNYXRoLm1heCguLi5PYmplY3Qua2V5cyh0aGlzLnNwZWNpZXNEaWN0KS5tYXAoaWQgPT4gK2lkKSkgKyAxO1xyXG5cclxuICAgICAgdGhpcy5zcGVjaWVzRGljdFtuZXdTcGVjaWVzSWRdID0gbmV3IFNwZWNpZXMobmV3U3BlY2llc0lkLCByZXByZXNlbnRhdGl2ZS5jbG9uZSgpKTtcclxuICAgICAgdGhpcy5zcGVjaWVzRGljdFtuZXdTcGVjaWVzSWRdLmFzc2lnblRvU3BlY2llcyhyZXByZXNlbnRhdGl2ZSk7XHJcbiAgICAgIHRoaXMucG9wdWxhdGlvbi5wdXNoKHJlcHJlc2VudGF0aXZlKTtcclxuXHJcbiAgICAgIHdoaWxlICh0aGlzLnBvcHVsYXRpb24ubGVuZ3RoIDwgdGhpcy5wb3B1bGF0aW9uU2l6ZSkge1xyXG4gICAgICAgIGxldCBuZXdQbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZ2VuZXJhdGlvbiwgdGhpcy5udW1JbnB1dHMsIHRoaXMubnVtT3V0cHV0cywgdGhpcy5hY3RpdmF0aW9uKTtcclxuXHJcbiAgICAgICAgbmV3UGxheWVyLmluaXRpYWxpemUoKTtcclxuICAgICAgICB0aGlzLnNwZWNpZXNEaWN0W25ld1NwZWNpZXNJZF0uYXNzaWduVG9TcGVjaWVzKG5ld1BsYXllcik7XHJcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uLnB1c2gobmV3UGxheWVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnBvcHVsYXRpb247XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKGlkLCB0eXBlLCBvdXRwdXRWYWx1ZSA9IDAuMCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMub3V0cHV0VmFsdWUgPSBvdXRwdXRWYWx1ZTtcclxuICB9XHJcblxyXG4gIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMuaWQsIHRoaXMudHlwZSwgdGhpcy5vdXRwdXRWYWx1ZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBHZW5vbWUgZnJvbSAnLi9nZW5vbWUuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvcihnZW5lcmF0aW9uLCBudW1JbnB1dHMsIG51bU91dHB1dHMsIGFjdGl2YXRpb24sIGJyYWluID0ge30sIHNwZWNpZXMgPSAwLCBmaXRuZXNzID0gMC4wKSB7XHJcbiAgICB0aGlzLmdlbmVyYXRpb24gPSBnZW5lcmF0aW9uO1xyXG4gICAgdGhpcy5udW1JbnB1dHMgPSBudW1JbnB1dHM7XHJcbiAgICB0aGlzLm51bU91dHB1dHMgPSBudW1PdXRwdXRzO1xyXG4gICAgdGhpcy5hY3RpdmF0aW9uID0gYWN0aXZhdGlvbjtcclxuICAgIHRoaXMuZml0bmVzcyA9IGZpdG5lc3M7XHJcbiAgICB0aGlzLnNwZWNpZXMgPSBzcGVjaWVzO1xyXG4gICAgdGhpcy5icmFpbiA9IGJyYWluO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZSgpIHtcclxuICAgIHRoaXMuYnJhaW4gPSBuZXcgR2Vub21lKHRoaXMubnVtSW5wdXRzLCB0aGlzLm51bU91dHB1dHMsIHRoaXMuYWN0aXZhdGlvbik7XHJcbiAgICB0aGlzLmJyYWluLmluaXRpYWxpemUoKTtcclxuICB9XHJcblxyXG4gIC8vIHRlbGwgcGxheWVyIHdoYXQgaGUgc2Vlc1xyXG4gIHNlZShpbnB1dFZhbHVlcykge1xyXG4gICAgdGhpcy5icmFpbi5zZXRJbnB1dHMoaW5wdXRWYWx1ZXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IG91dHB1dCB2YWx1ZXMgYWZ0ZXIgYWN0aXZhdGluZyB0aGUgcGxheWVyJ3MgbmV0d29ya1xyXG4gIHRoaW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYnJhaW4uYWN0aXZhdGVOZXR3b3JrKCk7XHJcbiAgfVxyXG5cclxuICBzZXRGaXRuZXNzKGZpdG5lc3MpIHtcclxuICAgIHRoaXMuZml0bmVzcyA9IGZpdG5lc3M7XHJcbiAgfVxyXG5cclxuICBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgUGxheWVyKFxyXG4gICAgICB0aGlzLmdlbmVyYXRpb24sXHJcbiAgICAgIHRoaXMubnVtSW5wdXRzLFxyXG4gICAgICB0aGlzLm51bU91dHB1dHMsXHJcbiAgICAgIHRoaXMuYWN0aXZhdGlvbixcclxuICAgICAgdGhpcy5icmFpbi5jbG9uZSgpLFxyXG4gICAgICB0aGlzLnNwZWNpZXMsXHJcbiAgICAgIHRoaXMuZml0bmVzc1xyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJztcclxuaW1wb3J0IEdlbm9tZSBmcm9tICcuL2dlbm9tZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVjaWVzIHtcclxuICBjb25zdHJ1Y3RvcihpZCwgcmVwcmVzZW50YXRpdmUpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucmVwcmVzZW50YXRpdmUgPSByZXByZXNlbnRhdGl2ZTtcclxuICAgIHRoaXMuZml0bmVzc1N1bSA9IDAuMDtcclxuICAgIHRoaXMub3JnYW5pc21zID0gW107XHJcbiAgICB0aGlzLm51bU9mZnNwcmluZ3MgPSAwO1xyXG4gICAgdGhpcy5udW1DbG9uaW5nID0gMDtcclxuICAgIHRoaXMubnVtQ3Jvc3NvdmVyID0gMDtcclxuICAgIHRoaXMub2Zmc3ByaW5ncyA9IFtdO1xyXG4gICAgdGhpcy5jaGFtcGlvbiA9IHt9O1xyXG4gICAgdGhpcy5udW1TdGFnbmF0ZWQgPSAwO1xyXG4gIH1cclxuXHJcbiAgaXNTdGFnbmF0ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5udW1TdGFnbmF0ZWQgPiAxNDtcclxuICB9XHJcblxyXG4gIGRyb3BPcmdhbmlzbXMoKSB7XHJcbiAgICB0aGlzLm9yZ2FuaXNtcyA9IFtdO1xyXG4gICAgdGhpcy5vZmZzcHJpbmdzID0gW107XHJcbiAgICB0aGlzLmZpdG5lc3NTdW0gPSAwLjA7XHJcbiAgICB0aGlzLm51bU9mZnNwcmluZ3MgPSAwO1xyXG4gICAgdGhpcy5udW1DbG9uaW5nID0gMDtcclxuICAgIHRoaXMubnVtQ3Jvc3NvdmVyID0gMDtcclxuICB9XHJcblxyXG4gIGFzc2lnblRvU3BlY2llcyhwbGF5ZXIpIHtcclxuICAgIHBsYXllci5zcGVjaWVzID0gdGhpcy5pZDtcclxuICAgIHRoaXMub3JnYW5pc21zLnB1c2gocGxheWVyKTtcclxuICB9XHJcblxyXG4gIGFkanVzdEZpdG5lc3MoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5vcmdhbmlzbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgdGhpcy5vcmdhbmlzbXNbaV0uZml0bmVzcyAvPSB0aGlzLm9yZ2FuaXNtcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVGaXRuZXNzU3VtKCkge1xyXG4gICAgdGhpcy5maXRuZXNzU3VtID0gMC4wO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMub3JnYW5pc21zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZml0bmVzc1N1bSArPSB0aGlzLm9yZ2FuaXNtc1tpXS5maXRuZXNzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2hhbXBpb24oKSB7XHJcbiAgICBpZiAodGhpcy5jaGFtcGlvbiAmJiBNYXRoLmFicyh0aGlzLmNoYW1waW9uLmZpdG5lc3MgLSB0aGlzLm9yZ2FuaXNtc1swXS5maXRuZXNzKSA8IENPTkZJRy5TVEFHTkFUSU9OX1RIUkVTSE9MRCkge1xyXG4gICAgICB0aGlzLm51bVN0YWduYXRlZCsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5udW1TdGFnbmF0ZWQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbXBpb24gPSB0aGlzLm9yZ2FuaXNtc1swXTtcclxuICB9XHJcblxyXG4gIGlzQ29tcGF0aWJsZVdpdGgocGxheWVyKSB7XHJcbiAgICBsZXQgbnVtRGlzam9pbnRHZW5lcyA9IDA7XHJcbiAgICBsZXQgbnVtRXhjZXNzR2VuZXMgPSAwO1xyXG4gICAgbGV0IG51bU1hdGNoaW5nR2VuZXMgPSAwO1xyXG4gICAgbGV0IHN1bVdlaWdodERpZmZlcmVuY2VNYXRjaGluZ0dlbmVzID0gMC4wO1xyXG5cclxuICAgIGxldCByZXByZXNlbnRhdGl2ZUhpZ2hlc3RJbm5vdmF0aW9uID0gdGhpcy5yZXByZXNlbnRhdGl2ZS5icmFpbi5jb25uZWN0aW9uc1tcclxuICAgICAgdGhpcy5yZXByZXNlbnRhdGl2ZS5icmFpbi5jb25uZWN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICBdLmlubm92YXRpb247XHJcbiAgICBsZXQgcGxheWVySGlnaGVzdElubm92YXRpb24gPSBwbGF5ZXIuYnJhaW4uY29ubmVjdGlvbnNbcGxheWVyLmJyYWluLmNvbm5lY3Rpb25zLmxlbmd0aCAtIDFdLmlubm92YXRpb247XHJcblxyXG4gICAgY29uc3QgaW5ub3ZhdGlvblNldCA9IFtcclxuICAgICAgLi4ubmV3IFNldChbXHJcbiAgICAgICAgLi4udGhpcy5yZXByZXNlbnRhdGl2ZS5icmFpbi5jb25uZWN0aW9ucy5tYXAoYyA9PiBjLmlubm92YXRpb24pLFxyXG4gICAgICAgIC4uLnBsYXllci5icmFpbi5jb25uZWN0aW9ucy5tYXAoYyA9PiBjLmlubm92YXRpb24pXHJcbiAgICAgIF0pXHJcbiAgICBdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBpbm5vdmF0aW9uU2V0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnJlcHJlc2VudGF0aXZlLmJyYWluLmNvbm5lY3Rpb25zLnNvbWUoYyA9PiBjLmlubm92YXRpb24gPT09IGlubm92YXRpb25TZXRbaV0pICYmXHJcbiAgICAgICAgcGxheWVyLmJyYWluLmNvbm5lY3Rpb25zLnNvbWUoYyA9PiBjLmlubm92YXRpb24gPT09IGlubm92YXRpb25TZXRbaV0pXHJcbiAgICAgICkge1xyXG4gICAgICAgIHN1bVdlaWdodERpZmZlcmVuY2VNYXRjaGluZ0dlbmVzICs9IE1hdGguYWJzKFxyXG4gICAgICAgICAgdGhpcy5yZXByZXNlbnRhdGl2ZS5icmFpbi5jb25uZWN0aW9ucy5maW5kKGMgPT4gYy5pbm5vdmF0aW9uID09PSBpbm5vdmF0aW9uU2V0W2ldKS53ZWlnaHQgLVxyXG4gICAgICAgICAgICBwbGF5ZXIuYnJhaW4uY29ubmVjdGlvbnMuZmluZChjID0+IGMuaW5ub3ZhdGlvbiA9PT0gaW5ub3ZhdGlvblNldFtpXSkud2VpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBudW1NYXRjaGluZ0dlbmVzKys7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXByZXNlbnRhdGl2ZS5icmFpbi5jb25uZWN0aW9ucy5zb21lKGMgPT4gYy5pbm5vdmF0aW9uID09PSBpbm5vdmF0aW9uU2V0W2ldKSkge1xyXG4gICAgICAgIGlmIChpbm5vdmF0aW9uU2V0W2ldIDwgcGxheWVySGlnaGVzdElubm92YXRpb24pIHtcclxuICAgICAgICAgIG51bURpc2pvaW50R2VuZXMrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbnVtRXhjZXNzR2VuZXMrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGlubm92YXRpb25TZXRbaV0gPCByZXByZXNlbnRhdGl2ZUhpZ2hlc3RJbm5vdmF0aW9uKSB7XHJcbiAgICAgICAgICBudW1EaXNqb2ludEdlbmVzKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG51bUV4Y2Vzc0dlbmVzKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXZnV2VpZ2h0RGlmZmVyZW5jZU1hdGNoaW5nR2VuZXMgPVxyXG4gICAgICBudW1NYXRjaGluZ0dlbmVzID4gMCA/IHN1bVdlaWdodERpZmZlcmVuY2VNYXRjaGluZ0dlbmVzIC8gbnVtTWF0Y2hpbmdHZW5lcyA6IDAuMDtcclxuICAgIGNvbnN0IE4gPSBNYXRoLm1heChcclxuICAgICAgdGhpcy5yZXByZXNlbnRhdGl2ZS5icmFpbi5ub2Rlcy5sZW5ndGggKyB0aGlzLnJlcHJlc2VudGF0aXZlLmJyYWluLmNvbm5lY3Rpb25zLmxlbmd0aCxcclxuICAgICAgcGxheWVyLmJyYWluLm5vZGVzLmxlbmd0aCArIHBsYXllci5icmFpbi5jb25uZWN0aW9ucy5sZW5ndGhcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgKENPTkZJRy5DMSAqIG51bUV4Y2Vzc0dlbmVzKSAvIE4gK1xyXG4gICAgICAgIChDT05GSUcuQzIgKiBudW1EaXNqb2ludEdlbmVzKSAvIE4gK1xyXG4gICAgICAgIENPTkZJRy5DMyAqIGF2Z1dlaWdodERpZmZlcmVuY2VNYXRjaGluZ0dlbmVzIDxcclxuICAgICAgQ09ORklHLkNPTVBBQklMSVRZX1RIUkVTSE9MRFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNvcnRPcmdhbmlzbXMoKSB7XHJcbiAgICB0aGlzLm9yZ2FuaXNtcy5zb3J0KChhLCBiKSA9PiBiLmZpdG5lc3MgLSBhLmZpdG5lc3MpO1xyXG4gIH1cclxuXHJcbiAgY3VsbCgpIHtcclxuICAgIC8vIGRvbnQgaGFsZiBwb3B1bGF0aW9uIG90aGVyd2lzZSB3ZSB3b250IGhhdmUgdHdvIHBhcmVudHNcclxuICAgIGlmICh0aGlzLm9yZ2FuaXNtcy5sZW5ndGggPCA0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNhbGN1bGF0ZUZpdG5lc3NTdW0oKTtcclxuXHJcbiAgICBsZXQgc3Vydml2b3JzID0gW107XHJcbiAgICBsZXQgbnVtVXBwZXJIYWxmID0gTWF0aC5mbG9vcih0aGlzLm9yZ2FuaXNtcy5sZW5ndGggLyAyLjApO1xyXG5cclxuICAgIHdoaWxlIChzdXJ2aXZvcnMubGVuZ3RoIDwgbnVtVXBwZXJIYWxmKSB7XHJcbiAgICAgIGxldCB0aHJlc2hvbGQgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5maXRuZXNzU3VtO1xyXG4gICAgICBsZXQgc3VtID0gMC4wO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9yZ2FuaXNtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN1bSArPSB0aGlzLm9yZ2FuaXNtc1tpXS5maXRuZXNzO1xyXG5cclxuICAgICAgICBpZiAoc3VtID49IHRocmVzaG9sZCkge1xyXG4gICAgICAgICAgbGV0IHN1cnZpdm9yID0gdGhpcy5vcmdhbmlzbXMuc3BsaWNlKGksIDEpWzBdO1xyXG5cclxuICAgICAgICAgIHN1cnZpdm9ycy5wdXNoKHN1cnZpdm9yKTtcclxuICAgICAgICAgIHRoaXMuZml0bmVzc1N1bSAtPSBzdXJ2aXZvci5maXRuZXNzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcmdhbmlzbXMgPSBzdXJ2aXZvcnM7XHJcbiAgfVxyXG5cclxuICByZXByb2R1Y2UoKSB7XHJcbiAgICAvLyBjb3B5IGNoYW1waW9uIHVuY2hhbmdlZFxyXG4gICAgbGV0IGNoYW1waW9uQ2xvbmUgPSB0aGlzLmNoYW1waW9uLmNsb25lKCk7XHJcblxyXG4gICAgY2hhbXBpb25DbG9uZS5nZW5lcmF0aW9uICs9IDE7XHJcbiAgICB0aGlzLm9mZnNwcmluZ3MucHVzaChjaGFtcGlvbkNsb25lKTtcclxuICAgIGlmICh0aGlzLm51bUNsb25pbmcgPiAwKSB7XHJcbiAgICAgIHRoaXMubnVtQ2xvbmluZy0tO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5udW1Dcm9zc292ZXItLTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbG9uZSAyNSUgYXNleHVhbFxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMubnVtQ2xvbmluZzsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIGxldCB0aHJlc2hvbGQgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5maXRuZXNzU3VtO1xyXG4gICAgICBsZXQgc3VtID0gMC4wO1xyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDAsIGxlbjIgPSB0aGlzLm9yZ2FuaXNtcy5sZW5ndGg7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICBzdW0gKz0gdGhpcy5vcmdhbmlzbXNbal0uZml0bmVzcztcclxuXHJcbiAgICAgICAgaWYgKHN1bSA+PSB0aHJlc2hvbGQpIHtcclxuICAgICAgICAgIGxldCBvZmZzcHJpbmcgPSB0aGlzLm11dGF0ZSh0aGlzLm9yZ2FuaXNtc1tqXSk7XHJcblxyXG4gICAgICAgICAgb2Zmc3ByaW5nLmdlbmVyYXRpb24rKztcclxuICAgICAgICAgIHRoaXMub2Zmc3ByaW5ncy5wdXNoKG9mZnNwcmluZyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjcm9zc292ZXIgNzUlXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5udW1Dcm9zc292ZXI7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBsZXQgdGhyZXNob2xkID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuZml0bmVzc1N1bTtcclxuICAgICAgbGV0IHN1bSA9IDAuMDtcclxuICAgICAgbGV0IHBhcmVudDE7XHJcblxyXG4gICAgICBmb3IgKGxldCBqID0gMCwgbGVuMiA9IHRoaXMub3JnYW5pc21zLmxlbmd0aDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgIHN1bSArPSB0aGlzLm9yZ2FuaXNtc1tqXS5maXRuZXNzO1xyXG5cclxuICAgICAgICBpZiAoc3VtID49IHRocmVzaG9sZCkge1xyXG4gICAgICAgICAgcGFyZW50MSA9IHRoaXMub3JnYW5pc21zW2pdO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aHJlc2hvbGQgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5maXRuZXNzU3VtO1xyXG4gICAgICBzdW0gPSAwLjA7XHJcbiAgICAgIGxldCBwYXJlbnQyO1xyXG5cclxuICAgICAgZG8ge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwLCBsZW4yID0gdGhpcy5vcmdhbmlzbXMubGVuZ3RoOyBqIDwgbGVuMjsgaisrKSB7XHJcbiAgICAgICAgICBzdW0gKz0gdGhpcy5vcmdhbmlzbXNbal0uZml0bmVzcztcclxuICAgICAgICAgIGlmIChzdW0gPj0gdGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHBhcmVudDIgPSB0aGlzLm9yZ2FuaXNtc1tqXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocmVzaG9sZCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmZpdG5lc3NTdW07XHJcbiAgICAgICAgc3VtID0gMC4wO1xyXG4gICAgICB9IHdoaWxlIChwYXJlbnQxID09PSBwYXJlbnQyKTtcclxuXHJcbiAgICAgIGxldCBvZmZzcHJpbmcgPSB0aGlzLm11dGF0ZSh0aGlzLmNyb3Nzb3ZlcihwYXJlbnQxLCBwYXJlbnQyKSk7XHJcblxyXG4gICAgICB0aGlzLm9mZnNwcmluZ3MucHVzaChvZmZzcHJpbmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRXZlcnkgdGltZSB3ZSBnZXQgYSBuZXcgb2ZmIHNwcmluZywgdGhlcmUgaXMgYSBjaGFuY2UgZm9yIG11dGF0aW9uXHJcbiAgLy8gYSkgODAlIHRoYXQgZXhpc3RpbmcgY29ubmVjdGlvbnMgZ2V0IG11dGF0ZWQgKDkwJSBhZGp1c3RlZCA8LT4gMTAlIG5ldyB2YWx1ZSlcclxuICAvLyBiKSAyNSUgdGhhdCBpbmhlcml0ZWQgZ2VuZSB3aGljaCB3YXMgZGlzYWJsZWQgYmVmb3JlaGFuZCAoaW4gYWxsIHBhcmVudHMpIGdldHMgZW5hYmxlZCBhZ2FpblxyXG4gIC8vIGMpIDMlIG5ldyBub2RlXHJcbiAgLy8gZCkgNSUgKG9yIDMwJSB3aGVuIGxhcmdlIHBvcHVsYXRpb24pIG5ldyBjb25uZWN0aW9uXHJcbiAgbXV0YXRlKHBhcmVudCkge1xyXG4gICAgbGV0IG9mZnNwcmluZyA9IHBhcmVudC5jbG9uZSgpO1xyXG5cclxuICAgIC8vIG11dGF0ZSBjb25uZWN0aW9uc1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG9mZnNwcmluZy5icmFpbi5jb25uZWN0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IENPTkZJRy5QRVJDRU5UQUdFX01VVEFUSU9OKSB7XHJcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCBDT05GSUcuUEVSQ0VOVEFHRV9NVVRBVElPTl9BREpVU1RfV0VJR0hUKSB7XHJcbiAgICAgICAgICBvZmZzcHJpbmcuYnJhaW4uY29ubmVjdGlvbnNbaV0uYWRqdXN0V2VpZ2h0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9mZnNwcmluZy5icmFpbi5jb25uZWN0aW9uc1tpXS5yZWFzc2lnbldlaWdodCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBkaXNhYmxlZENvbmVuY3Rpb25zID0gb2Zmc3ByaW5nLmJyYWluLmNvbm5lY3Rpb25zLmZpbHRlcihjID0+IGMuZW5hYmxlZCA9PT0gZmFsc2UpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBkaXNhYmxlZENvbmVuY3Rpb25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4yNSkge1xyXG4gICAgICAgIG9mZnNwcmluZy5icmFpbi5jb25uZWN0aW9uc1tpXS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgQ09ORklHLlBFUkNFTlRBR0VfTkVXX05PREUpIHtcclxuICAgICAgb2Zmc3ByaW5nLmJyYWluLmFkZE5vZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA8IENPTkZJRy5QRVJDRU5UQUdFX05FV19DT05ORUNUSU9OKSB7XHJcbiAgICAgIG9mZnNwcmluZy5icmFpbi5hZGRDb25uZWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9mZnNwcmluZztcclxuICB9XHJcblxyXG4gIGNyb3Nzb3ZlcihwYXJlbnQxLCBwYXJlbnQyKSB7XHJcbiAgICBsZXQgYnJhaW5PZmZzcHJpbmcgPSBuZXcgR2Vub21lKHBhcmVudDEubnVtSW5wdXRzLCBwYXJlbnQxLm51bU91dHB1dHMsIHBhcmVudDEuYWN0aXZhdGlvbik7XHJcblxyXG4gICAgY29uc3Qgbm9kZXNTZXQgPSBbLi4ubmV3IFNldChbLi4ucGFyZW50MS5icmFpbi5ub2Rlcy5tYXAobiA9PiBuLmlkKSwgLi4ucGFyZW50Mi5icmFpbi5ub2Rlcy5tYXAobiA9PiBuLmlkKV0pXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbm9kZXNTZXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgaWYgKHBhcmVudDEuYnJhaW4ubm9kZXMuc29tZShuID0+IG4uaWQgPT09IG5vZGVzU2V0W2ldKSAmJiBwYXJlbnQyLmJyYWluLm5vZGVzLnNvbWUobiA9PiBuLmlkID09PSBub2Rlc1NldFtpXSkpIHtcclxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xyXG4gICAgICAgICAgYnJhaW5PZmZzcHJpbmcubm9kZXMucHVzaChwYXJlbnQxLmJyYWluLm5vZGVzLmZpbmQobiA9PiBuLmlkID09PSBub2Rlc1NldFtpXSkuY2xvbmUoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyYWluT2Zmc3ByaW5nLm5vZGVzLnB1c2gocGFyZW50Mi5icmFpbi5ub2Rlcy5maW5kKG4gPT4gbi5pZCA9PT0gbm9kZXNTZXRbaV0pLmNsb25lKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlubm92YXRpb25TZXQgPSBbXHJcbiAgICAgIC4uLm5ldyBTZXQoW1xyXG4gICAgICAgIC4uLnBhcmVudDEuYnJhaW4uY29ubmVjdGlvbnMubWFwKGMgPT4gYy5pbm5vdmF0aW9uKSxcclxuICAgICAgICAuLi5wYXJlbnQyLmJyYWluLmNvbm5lY3Rpb25zLm1hcChjID0+IGMuaW5ub3ZhdGlvbilcclxuICAgICAgXSlcclxuICAgIF07XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGlubm92YXRpb25TZXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHBhcmVudDEuYnJhaW4uY29ubmVjdGlvbnMuc29tZShjID0+IGMuaW5ub3ZhdGlvbiA9PT0gaW5ub3ZhdGlvblNldFtpXSkgJiZcclxuICAgICAgICBwYXJlbnQyLmJyYWluLmNvbm5lY3Rpb25zLnNvbWUoYyA9PiBjLmlubm92YXRpb24gPT09IGlubm92YXRpb25TZXRbaV0pXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XHJcbiAgICAgICAgICBicmFpbk9mZnNwcmluZy5jb25uZWN0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICBwYXJlbnQxLmJyYWluLmNvbm5lY3Rpb25zLmZpbmQoYyA9PiBjLmlubm92YXRpb24gPT09IGlubm92YXRpb25TZXRbaV0pLmNsb25lKClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyYWluT2Zmc3ByaW5nLmNvbm5lY3Rpb25zLnB1c2goXHJcbiAgICAgICAgICAgIHBhcmVudDIuYnJhaW4uY29ubmVjdGlvbnMuZmluZChjID0+IGMuaW5ub3ZhdGlvbiA9PT0gaW5ub3ZhdGlvblNldFtpXSkuY2xvbmUoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gZGlzam9pbnQgYW5kIGV4Y2VzcyBub2Rlc1xyXG4gICAgICAgIGlmIChwYXJlbnQxLmJyYWluLmNvbm5lY3Rpb25zLnNvbWUoYyA9PiBjLmlubm92YXRpb24gPT09IGlubm92YXRpb25TZXRbaV0pKSB7XHJcbiAgICAgICAgICBpZiAocGFyZW50MS5maXRuZXNzID49IHBhcmVudDIuZml0bmVzcykge1xyXG4gICAgICAgICAgICBicmFpbk9mZnNwcmluZy5jb25uZWN0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgIHBhcmVudDEuYnJhaW4uY29ubmVjdGlvbnMuZmluZChjID0+IGMuaW5ub3ZhdGlvbiA9PT0gaW5ub3ZhdGlvblNldFtpXSkuY2xvbmUoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAocGFyZW50Mi5maXRuZXNzID49IHBhcmVudDEuZml0bmVzcykge1xyXG4gICAgICAgICAgICBicmFpbk9mZnNwcmluZy5jb25uZWN0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgIHBhcmVudDIuYnJhaW4uY29ubmVjdGlvbnMuZmluZChjID0+IGMuaW5ub3ZhdGlvbiA9PT0gaW5ub3ZhdGlvblNldFtpXSkuY2xvbmUoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9ubHkgY2xvbmUgbm9kZXMgd2hlcmUgd2UgaGF2ZSByZWZlcmVuY2VzIHRvXHJcbiAgICBjb25zdCBuZWVkZWROb2Rlc1NldCA9IFtcclxuICAgICAgLi4ubmV3IFNldChbLi4uYnJhaW5PZmZzcHJpbmcuY29ubmVjdGlvbnMubWFwKGMgPT4gYy5zdGFydCksIC4uLmJyYWluT2Zmc3ByaW5nLmNvbm5lY3Rpb25zLm1hcChjID0+IGMuZW5kKV0pXHJcbiAgICBdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBuZWVkZWROb2Rlc1NldC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBpZiAoIWJyYWluT2Zmc3ByaW5nLm5vZGVzLmZpbmQobiA9PiBuLmlkID09PSBuZWVkZWROb2Rlc1NldFtpXSkpIHtcclxuICAgICAgICBpZiAocGFyZW50MS5icmFpbi5ub2Rlcy5zb21lKG4gPT4gbi5pZCA9PT0gbmVlZGVkTm9kZXNTZXRbaV0pKSB7XHJcbiAgICAgICAgICBicmFpbk9mZnNwcmluZy5ub2Rlcy5wdXNoKHBhcmVudDEuYnJhaW4ubm9kZXMuZmluZChuID0+IG4uaWQgPT09IG5lZWRlZE5vZGVzU2V0W2ldKS5jbG9uZSgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJhaW5PZmZzcHJpbmcubm9kZXMucHVzaChwYXJlbnQyLmJyYWluLm5vZGVzLmZpbmQobiA9PiBuLmlkID09PSBuZWVkZWROb2Rlc1NldFtpXSkuY2xvbmUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9mZnNwcmluZyA9IG5ldyBQbGF5ZXIoXHJcbiAgICAgIHBhcmVudDEuZ2VuZXJhdGlvbiArIDEsXHJcbiAgICAgIHBhcmVudDEubnVtSW5wdXRzLFxyXG4gICAgICBwYXJlbnQxLm51bU91dHB1dHMsXHJcbiAgICAgIHBhcmVudDEuYWN0aXZhdGlvbixcclxuICAgICAgYnJhaW5PZmZzcHJpbmcsXHJcbiAgICAgIHBhcmVudDEuc3BlY2llc1xyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gb2Zmc3ByaW5nO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgQklBUzogJ2JpYXMnLFxyXG4gIElOUFVUOiAnaW5wdXQnLFxyXG4gIE9VVFBVVDogJ291dHB1dCcsXHJcbiAgSElEREVOOiAnaGlkZGVuJ1xyXG59O1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tRG91YmxlRnJvbUludGVydmFsKG1heCwgbWluKSB7XHJcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9