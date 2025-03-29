// Knight, Sarcerer, Archer - Guerreiro, Mago, Arqueiro
// LittleMonster, AverageMonster, BigMonster - Pequeno, Médio, Grande Monstro

class Character {
    
    _life = 1;
    maxlife = 1;
    attack = 0;
    defense = 0;
  
    constructor(name) {
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

class Stage {

    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
    }

    start() {
        this.update();
        // TODO: Evento de ataque
        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => {
            this.doAttack(this.fighter1, this.fighter2);
        });
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => {
            this.doAttack(this.fighter2, this.fighter1);
        });
    }

    update() {
        //fighter1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxlife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;
    
        //fighter2 
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxlife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    }

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage('Um dos personagens já está morto!');
            return;
        }
        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 0.5).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            attacked.life -= (actualAttack - actualDefense);
            this.log.addMessage(`${attacking.name} causou  ${actualAttack.toFixed(2)} de dano em ${attacked.name}!`);
        }
        else {
            this.log.addMessage(`Defendeu o ataque de ${attacking.name}`);
        }
    
        this.update();
    };
};

class Log {
    list = [];

    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    }

    render() {
        this.listEl.innerHTML = '';

        for(let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}