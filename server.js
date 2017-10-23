const io = require('socket.io')();
//What this is doing is getting the request from the client which wants to connect to this "thread" and then setting the interval to one second. After that it is sending out at 'timer' the date-time
//Here the self is socket, the client is client
var allUsers = []
var allPictures = []
const fetch = require("node-fetch")

io.on('connection', (client) => {
  allUsers.push(client.id)

  function roundStart(){
    client.on("getPicture", message => {
      fetch('http://api.giphy.com/v1/gifs/random?api_key=9FlwegMOhb9Y8x0ewifH5vuUM5HHe1cT').then(res => res.json()).then(json => {
        allPictures.push(json)
        io.emit('sendPicture', json.data.image_url)
      })
    })
    io.emit('round-start', {
      judge: allUsers[0]
    })
  }

    io.emit('all-users', allUsers)

    if (allUsers.length % 4 === 0){
      roundStart()

    }
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
