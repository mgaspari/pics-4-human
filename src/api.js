import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
// What is happening her is that there is a funciton that is called that will get data and then emit back to the "subscribeToTimer" (not sure why the order is that way) Then it is calling a callback so that the funciton can digest the message from the server
// function subscribeToTimer(cb) {
//   socket.on('timer', timestamp => cb(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
// }
// function greeting(cb){
// socket.on( 'greetings', function( message, id ) {
//   socket.emit()
// 	// console.log( 'Got a message from the server: "' + message + "', my ID is: " + id );
// });
// }

function listenForUsers(cb){
  socket.on('all-users', allUsers => cb(allUsers))
}
function listenUp(cb){
  socket.on('messages-recieved', message => cb(message) )
}
function assignMyId(cb){
  socket.on('assign-id', id => cb(id))
}

function sendMsg(msg){
  socket.emit('messageTrans', msg)
}

function awardPoint(winnerId){
  
socket.emit('award-point', winnerId)
}

function listenForRoundStart(cb){
  socket.on('round-start', response => cb(response))
}

function listenForPointUpdate(cb){
  socket.on('update-points', roundPoints => cb(roundPoints))
}

function initRoundEnd(){
  socket.emit('round-end', "End Round")
}

function pictureManager(cb){
  socket.emit('getPicture', "Please")
  socket.on('sendPicture', imgUrl => cb(imgUrl))
}

function listenForRoundWinner(cb){
  socket.on('announce-winner', winnerObject => cb(winnerObject))
}

function listenForPicUpdate(cb){
  socket.on('newPicture', imgUrl => cb(imgUrl))
}

export {  sendMsg, listenUp, listenForUsers, listenForRoundStart, listenForRoundWinner, initRoundEnd, pictureManager, listenForPicUpdate, listenForPointUpdate, awardPoint, assignMyId };
