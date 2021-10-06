const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => { console.log("event")});
  client.on('disconnect', () => { console.log("disconnect") });
});
server.listen(3000);

// const io = require('socket.io')();
// io.on('connection', client => { console.log("hello world")});
// io.listen(3000);

console.log("hello world outside the srver")