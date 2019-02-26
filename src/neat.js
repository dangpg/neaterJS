import Player from './player.js';
import Innovation from './innovation.js';
import Species from './species.js';
import * as Activations from './activations.js';

export default class NEAT {
  constructor(populationSize = 100, numInputs, numOutputs, activation = Activations.binaryStep) {
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

  initialize() {
    Innovation.nodeCounter = this.numInputs + this.numOutputs;

    for (let i = 0; i < this.populationSize; i++) {
      let player = new Player(this.generation, this.numInputs, this.numOutputs, this.activation);

      player.initialize();
      this.population.push(player);
    }

    this.speciesDict[0] = new Species(0, this.population[0].clone());
  }

  getNumberOfSpecies() {
    return [...new Set(this.population.map(p => p.species))].length;
  }

  getOverallChampion() {
    return this.population.reduce((prev, current) => (prev.fitness > current.fitness ? prev : current));
  }

  repopulate() {
    // reset organisms
    if (this.generation > 0) {
      for (let j in this.speciesDict) {
        let species = this.speciesDict[j];

        species.dropOrganisms();

        if (species.isStagnated()) {
          this.population = this.population.filter(p => p.species !== species.id);
          delete this.speciesDict[j];
        }
      }

      let overallChampion = this.getOverallChampion();

      if (overallChampion.fitness > this.bestFitness) {
        this.bestFitness = overallChampion.fitness;
        this.numStagnated = 0;
      } else {
        this.numStagnated++;

        // no improvements over 20 generations, only let the two best species reproduce
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

    this.generation++;

    // assign population to species
    for (let i = 0, len = this.population.length; i < len; i++) {
      let speciesFound = false;

      for (let j in this.speciesDict) {
        let species = this.speciesDict[j];

        if (species.isCompatibleWith(this.population[i])) {
          speciesFound = true;
          species.assignToSpecies(this.population[i]);
          break;
        }
      }

      if (!speciesFound) {
        const newSpeciesId = Math.max(...Object.keys(this.speciesDict).map(id => +id)) + 1;

        this.speciesDict[newSpeciesId] = new Species(newSpeciesId, this.population[i].clone());
        this.speciesDict[newSpeciesId].assignToSpecies(this.population[i]);
      }
    }

    // delete species with not enough organisms
    for (let key in this.speciesDict) {
      let species = this.speciesDict[key];

      if (species.organisms.length < 1) {
        // this.population = this.population.filter(p => p.species !== species.id);
        delete this.speciesDict[key];
      }
    }

    // update representative per species (for next generation)
    const uniqueSpecies = [...new Set(this.population.map(p => p.species))];

    for (let i = 0, len = uniqueSpecies.length; i < len; i++) {
      const candidates = this.speciesDict[uniqueSpecies[i]].organisms;
      const representative = candidates[Math.floor(Math.random() * candidates.length)].clone();

      this.speciesDict[uniqueSpecies[i]].representative = representative;
    }

    // sort species' organisms, drop bottom half per species, adjust fitness and declare champion
    // calculate total fitness sum
    let totalFitnessSum = 0.0;

    for (let key in this.speciesDict) {
      const species = this.speciesDict[key];

      species.sortOrganisms();
      species.cull();
      species.adjustFitness();
      species.calculateFitnessSum();
      species.getChampion();
      totalFitnessSum += species.fitnessSum;
    }

    // Decide how many off springs we need per species (based on fitness sum distribution)
    // e.g. 100 off springs in species 2
    // 25% created by cloning
    // 75% created by crossover
    // ------------------------------------------------------------------------------------------------------
    for (let key in this.speciesDict) {
      const species = this.speciesDict[key];

      species.numOffsprings = Math.floor((species.fitnessSum / totalFitnessSum) * this.population.length);

      if (species.organisms.length < 2) {
        species.numCloning = species.numOffsprings;
        species.numCrossover = 0;
      } else {
        species.numCloning = Math.floor(0.25 * species.numOffsprings);
        species.numCrossover = species.numOffsprings - species.numCloning;
      }
    }

    // reproduce and assign offspring to new population
    this.population = [];
    for (let key in this.speciesDict) {
      const species = this.speciesDict[key];

      if (species.numOffsprings > 0) {
        species.reproduce();
        this.population = this.population.concat(species.offsprings);
      }
    }

    // fill up the remaining spots (due to rounding errors) with new players
    if (this.population.length < this.populationSize) {
      let representative = new Player(this.generation, this.numInputs, this.numOutputs, this.activation);

      representative.initialize();
      const newSpeciesId = Math.max(...Object.keys(this.speciesDict).map(id => +id)) + 1;

      this.speciesDict[newSpeciesId] = new Species(newSpeciesId, representative.clone());
      this.speciesDict[newSpeciesId].assignToSpecies(representative);
      this.population.push(representative);

      while (this.population.length < this.populationSize) {
        let newPlayer = new Player(this.generation, this.numInputs, this.numOutputs, this.activation);

        newPlayer.initialize();
        this.speciesDict[newSpeciesId].assignToSpecies(newPlayer);
        this.population.push(newPlayer);
      }
    }

    return this.population;
  }
}
