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

function sendMsg(msg){
  socket.emit('messageTrans', msg)
}


export {  sendMsg, listenUp, listenForUsers  };
