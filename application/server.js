const net = require('net');
const {Game} = require('./game');

exports.server = new (class Server {
  constructor() {
    this.game = null;
    this.server = null;
  }

  boot(port) {
    if (this.server) {
      return;
    }
    if (typeof port != 'number' || port < 0 || port > 65535) {
      return Promise.reject();
    }

    this.game = new Game();
    this.server = net.createServer();
    this.server.on('connection', c => this.handle(c));
    this.server.on('error', ()=> console.log('server error'));

    return new Promise(res => this.server.listen(port, res));
  }

  close() {
    if (!this.server) {
      return;
    }
    return new Promise(res => this.server.close(()=> {
      this.game = null;
      this.server = null;
      res();
    }));
  }

  handle(connection) {
    console.log('handling');
  }
});
