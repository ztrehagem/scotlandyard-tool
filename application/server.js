const {Game} = require('./game');

exports.server = new (class Server {
  constructor() {
    this.server = null;
  }

  boot() {
    this.game = new Game();
    return new Promise((res, rej)=> {
      setTimeout(res, 1000);
    });
  }
});
