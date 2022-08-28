const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
  constructor(name, weapon) {

    // calling parent objects constructor
    super(name);

    this.weapon = weapon;
    this.potion = new Potion();

  }

  getHealth = function() {
    return `The ${this.name}'s health is now ${this.health}!`;
  };

  getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };

}

module.exports = Enemy;