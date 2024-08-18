
import { Server, Socket } from "socket.io";

  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function ServerLoop(){
  const io = new Server(3000);
  var connections = []

  io.on("connection", (socket) => {
    
    socket.on("speed", (arg) => {
      console.log(arg)
    })


    connections.push(socket)
  })

  var speed = 0
  while (true){
    speed += 1
    if (connections != undefined){
      console.log("Num Connections: ", connections.length)
      for (var ind = 0; ind < connections.length; ind++){
        var socket = connections[ind]
        var _speed = speed
        socket.emit("speed", {speed:_speed})
      }
    }




    await sleep(1000)
    console.log("Looping Speed:", speed)
  }
}


ServerLoop()