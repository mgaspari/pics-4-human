const io = require('socket.io')();
//What this is doing is getting the request from the client which wants to connect to this "thread" and then setting the interval to one second. After that it is sending out at 'timer' the date-time
//Here the self is socket, the client is client
var allUsers = []
var allPictures = []
var roundComments = []
var roundPoints = {}

var i = 0
const fetch = require("node-fetch")

io.on('connection', (client) => {
  allUsers.push(client.id)
  roundPoints[client.id] = 0

  function roundStart(){
    client.on("getPicture", message => {
      fetch('http://api.giphy.com/v1/gifs/random?api_key=9FlwegMOhb9Y8x0ewifH5vuUM5HHe1cT').then(res => res.json()).then(json => {
        allPictures.push(json.image_url)
        io.emit('sendPicture', json.data.image_url)
      })
    })
    io.emit('round-start', {
      judge: allUsers[i]
    })
  }

  function endGame(){

  }

  function awardPoint(winnerId){
    roundPoints[winnerId] += 1
    roundPoints[winnerId] === 5 ? endGame() : io.emit('update-points', roundPoints)
  }

  function newRound(){
    fetch('http://api.giphy.com/v1/gifs/random?api_key=9FlwegMOhb9Y8x0ewifH5vuUM5HHe1cT').then(res => res.json()).then(json => {
      allPictures.push(json.data.image_url)
      io.emit('newPicture', json.data.image_url)
    })
    if (i >= 4){
      i = 0
    }
    if(i<allUsers.length){
        i++
        io.emit('round-start', {
          judge: allUsers[i]
        })
      }

    }


    io.emit('all-users', allUsers)
    io.emit('update-points', roundPoints)
    client.emit('assign-id', client.id)

    if (allUsers.length % 4 === 0){
      roundStart()

    }

    client.on('award-point', (winnerId) =>{
      let winComment = ""
      roundComments.forEach((winnerArray) => {
        if (winnerArray[1] === winnerId){
          winComment = winnerArray
        }
      })
      io.emit('announce-winner', winComment)
      awardPoint(winComment[1])
    })

    client.on('round-end',() => {
      roundComments = []
      newRound()

      })
  // client.on('subscribeToTimer', (interval) => {
  //   console.log('client is subscribing to timer with interval ', interval);
  //   setInterval(() => {
  //     client.emit('timer', new Date());
  //   }, interval);
  // });
  // socket.emit( 'greetings', 'Hello from the server!', socket.id );
  client.on('messageTrans', (body) => {
    roundComments.push([body, client.id])
    io.emit('messages-recieved', {
      body,
      from: client.id
    })
  })
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
