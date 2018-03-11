var socket = io();

socket.on('connect', function(){
  console.log('you are connected');

  socket.emit('createMessage', {
    from: 'Agus',
    text: 'okay this is my message'
  });

});

socket.on('disconnect', function(){
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
  console.log('newMessage', message);
});

// socket.on('newEmail', function(email){
//   console.log('New email', email);
// });
