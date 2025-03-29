// Knight, Sarcerer, Archer - Guerreiro, Mago, Arqueiro
// LittleMonster, AverageMonster, BigMonster - Pequeno, Médio, Grande Monstro

class Character {
    
    _life = 1;
    maxlife = 1;
    attack = 0;
    defense = 0;
  
    constructor(name, health, attack, defense) {
    this.name = name;    
  }

  get life() {
    return this._life;
  }

    set life(newlife) {
        this._life = newlife < 0 ? 0 : newlife;
    }
 
}

class Knight extends Character {

    constructor(name) {
        super(name);
        this.life = 100;
        this.maxlife = this.life;
        this.attack = 10;
        this.defense = 5;
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.maxlife = this.life;
        this.attack = 15;
        this.defense = 3;
    }
}

class Archer extends Character {
    constructor(name) {
        super(name);
        this.life = 70;
        this.maxlife = this.life;
        this.attack = 8;
        this.defense = 7;
    }
}

class LittleMonster extends Character {
    constructor() {
        super('LittleMonster');
        this.life = 50;
        this.maxlife = this.life;
        this.attack = 5;
        this.defense = 2;
    }
}

class AverageMonster extends Character {
    constructor() {
        super('AveragerMonster');
        this.life = 80;
        this.maxlife = this.life;
        this.attack = 8;
        this.defense = 4;
    }
}

class BigMonster extends Character {
    constructor() {
        super('BigMonster');
        this.life = 120;
        this.maxlife = this.life;
        this.attack = 12;
        this.defense = 6;
    }
}

