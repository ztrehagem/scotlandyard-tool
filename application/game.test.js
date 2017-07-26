function it(m, a, b) {
  if (a != b) console.log(m, a, b);
}

const {Game} = require('./game');
let game = new Game();


it('move thief', game.moveThief('bus'), true);
it('reg p1', game.registerPoliceMovement(0, 'bus'), true);
it('reg p2', game.registerPoliceMovement(1, 'bus'), true);
it('reg p3', game.registerPoliceMovement(2, 'bus'), true);
it('cancel', game.cancelPoliceMovement(), true);
it('reg p3', game.registerPoliceMovement(2, 'bus'), true);
it('reg p4', game.registerPoliceMovement(3, 'bus'), true);
it('reg p5', game.registerPoliceMovement(4, 'bus'), true);
it('apply', game.applyPoliceMovement(), true);
it('save test', game.save(), true);
it('load test', game.load(), true)
console.log("success")
