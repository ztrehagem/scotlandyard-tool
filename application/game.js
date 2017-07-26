const POLICES_COLORS = ['red', 'blue', 'yellow', 'green', 'black'];
const PlayerType = {
  POLICES: 'polices',
  THIEF: 'thief'
};
const TicketType = {
  TAXI: 'taxi',
  BUS: 'bus',
  UNDEG: 'underground',
  BLACK: 'black',
  DOUBLE: 'double'
};
const InitialTicketsPolice = {
  [TicketType.TAXI]: 10,
  [TicketType.BUS]: 8,
  [TicketType.UNDEG]: 4
};
const InitialTicketsThief = {
  [TicketType.TAXI]: 4,
  [TicketType.BUS]: 4,
  [TicketType.UNDEG]: 3,
  [TicketType.BLACK]: 5,
  [TicketType.DOUBLE]: 2
};

class Movement {
  constructor(ticketType, destination, useDouble = false) {
    this.ticketType = ticketType;
    this.destination = destination;
    this.useDouble = useDouble;
  }
}

class Police {
  constructor(color, initial) {
    this.color = color;
    this.initial = initial;
    this.movement = null;
    this.history = [];
  }

  get tickets() {
    const r = Object.assign({}, InitialTicketsPolice);
    this.history.forEach(m => --r[m.ticketType]);
    return r;
  }

  register(ticketType, destination) {
    if (!Object.values(TicketType).includes(ticketType)) {
      return false;
    }
    if (this.tickets[ticketType] <= 0) {
      return false;
    }
    // if (destinationに到達できない) {
    //   // TODO
    // }
    this.movement = new Movement(ticketType, destination);
    return true;
  }

  cancel() {
    this.movement = null;
  }

  apply() {
    this.history.push(this.movement);
    this.movement = null;
  }
};

class Thief {
  constructor(initial) {
    this.initial = initial;
    this.history = [];
  }

  get tickets() {
    const r = Object.assign({}, InitialTicketsThief);
    this.history.forEach(m => {
      --r[m.ticketType];
      m.useDouble && --r[TicketType.DOUBLE];
    });
    return r;
  }

  move(ticketType, destination, useDouble = false) {
    if (!Object.values(TicketType).includes(ticketType)) {
      console.log('not exists ticket');
      return false;
    }
    if (this.tickets[ticketType] <= 0) {
      console.log('not enough remaining ticket');
      return false;
    }
    if (useDouble && this.tickets[TicketType.DOUBLE] <= 0) {
      console.log('not enough remaining double ticket');
      return false;
    }
    // if (destinationに到達できない) {
    //
    // }
    this.history.push(new Movement(ticketType, destination, useDouble));
    return true;
  }
};

exports.Game = class Game {
  constructor() {
    this.initials = [155,198,26,34,197,94,50,174,29,13,132,91,112,138,103,117,53,141];
    this.turn = 1;
    this.player = PlayerType.THIEF;
    this.polices = POLICES_COLORS.map(c => new Police(c, this.getInitial()));
    this.thief = new Thief(this.getInitial());
    this.activePoliceIndex = null;
  }

  getInitial() {
    return this.initials.splice(Math.floor(Math.random() * this.initials.length), 1);
  }

  moveThief(ticketType, destination) {
    if (this.player != PlayerType.THIEF) {
      console.log('you are not current turn player');
      return false;
    }
    if (!this.thief.move(ticketType, destination)) {
      console.log('you cannot move with the method');
      return false;
    }
    this.switchPlayer();
    return true;
  }

  registerPoliceMovement(index, ticketType, destination) {
    if (this.player != PlayerType.POLICES) {
      console.log('you are not current turn player');
      return false;
    }
    if (index != this.activePoliceIndex || !this.activePolice) {
      console.log('you are not active');
      return false;
    }
    if (!this.activePolice.register(ticketType, destination)) {
      console.log('you cannot move with the method');
      return false;
    }
    ++this.activePoliceIndex;
    return true;
  }

  cancelPoliceMovement() {
    if (this.player != PlayerType.POLICES) {
      console.log('you are not current turn player');
      return false;
    }
    if (!this.polices[this.activePoliceIndex - 1]) {
      console.log('out of range polices');
      return false;
    }
    this.polices[--this.activePoliceIndex].cancel();
    return true;
  }

  applyPoliceMovement() {
    if (this.player != PlayerType.POLICES) {
      console.log('you are not current turn player');
      return false;
    }
    if (this.activePoliceIndex < this.polices.length) {
      console.log('not enough polices registration');
      return false;
    }
    this.polices.forEach(p => p.apply());
    ++this.turn;
    this.switchPlayer();
    return true;
  }

  get activePolice() {
    return this.polices[this.activePoliceIndex];
  }

  switchPlayer() {
    switch (this.player) {
      case PlayerType.THIEF:
        this.player = PlayerType.POLICES;
        this.activePoliceIndex = 0;
        break;
      case PlayerType.POLICES:
        this.player = PlayerType.THIEF;
        this.activePoliceIndex = null;
        break;
    }
  }

  save() { 
    return new Promise((res, reject) => {
        var fs = require('fs');
        const t = JSON.stringify(this);
        fs.writeFile('../game_state.json', t, (err) => {
            if (err) reject();
            res();
        });
    });
  }

  load() {
    return new Promise((res, reject) => {
        var fs = require('fs');
        fs.readFile('../game_state.json', 'utf8', (err, text) => {
        if (err) reject();
        else {
                Object.assign(this, JSON.parse(text));    
                res();
            }
        });
    });
  }
};
