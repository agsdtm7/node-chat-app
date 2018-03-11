const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
// this line is important
// wer create a server using http
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit('newEmail',  {
  //   from: 'mike@example.com',
  //   text: 'Hey. what is going on.',
  //   createAt: 123
  // }); // method of socket that emit events / create ones
  //

  socket.emit('newMessage', {
    from: 'Neinei',
    text: 'John just came here',
    createdAt: 123123
  });
  socket.on('createMessage', (message) => {
    console.log('create message', message);
  });

  // socket.on('createEmail', (newEmail) => {
  //     console.log('createEmail', newEmail);
  // });

  socket.on('disconnect', () => {
    console.log('user was Disconnected');
  });
});


server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
// console.log(__dirname);
// console.log(publicPath);
