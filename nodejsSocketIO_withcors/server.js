const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const pf = require('pretty-format')


var bodyParser = require('body-parser'); // parser for post requests
var app = express();


// our localhost port
const port = 4001

// our server instance
const server = app.listen(port)

// This creates our socket using the instance of the server
const io = socketIO(server)
io.set('origins', '*:*');
// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('New client connected')
   console.log('=============== START ================')
  //  console.log(pf(io.sockets))
   console.log(pf( Object.keys( (socket.server['eio']).clients ))) 

  console.log('=============== END ================')
   
   // just like on the client side, we have a socket.on method that takes a callback function
  socket.on('change color', (color) => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log('My ID : ', socket.id)
    console.log('Color Changed to: ', color)
    io.sockets.emit('change color', color)
    // socket.broadcast.to(socketid).emit('message', 'for your eyes only');
  })

  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})


