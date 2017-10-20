const io = require('socket.io')();
//What this is doing is getting the request from the client which wants to connect to this "thread" and then setting the interval to one second. After that it is sending out at 'timer' the date-time
//Here the self is socket, the client is client
var allUsers = []
io.on('connection', (client) => {
  allUsers.push(client.id)


    io.emit('all-users', allUsers)


  // client.on('subscribeToTimer', (interval) => {
  //   console.log('client is subscribing to timer with interval ', interval);
  //   setInterval(() => {
  //     client.emit('timer', new Date());
  //   }, interval);
  // });
  // socket.emit( 'greetings', 'Hello from the server!', socket.id );
  client.on('messageTrans', (body) => {
    console.log("hi")
    io.emit('messages-recieved', {
      body,
      from: client.id
    })
  })
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
