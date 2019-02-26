import { CONFIG } from './config.js';
import { randomDoubleFromInterval } from './utils.js';

export default class Connection {
  constructor(start, end, weight, enabled, innovation) {
    this.start = start;
    this.end = end;
    this.weight = weight;
    this.enabled = enabled;
    this.innovation = innovation;
  }

  adjustWeight() {
    this.weight += randomDoubleFromInterval(
      this.weight * CONFIG.ADJUST_WEIGHT_FACTOR,
      -this.weight * CONFIG.ADJUST_WEIGHT_FACTOR
    );
  }

  reassignWeight() {
    this.weight = randomDoubleFromInterval(CONFIG.NEW_WEIGHT_RANGE, -CONFIG.NEW_WEIGHT_RANGE);
  }

  clone() {
    return new Connection(this.start, this.end, this.weight, this.enabled, this.innovation);
  }
}
