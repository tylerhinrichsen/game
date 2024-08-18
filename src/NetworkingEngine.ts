import GameState from "./GameState"
import { io } from "socket.io-client"

class Message {
    public message:string
    constructor(message:string){
        this.message = message
    }
}
class NetworkingEngine{
    public ref_gameState: GameState
    public socket

    public messages: any[] = []
    constructor (gameState: GameState) {
        this.ref_gameState = gameState
        this.socket = io("ws://localhost:3000")
        console.log("Creating Socket")
        console.log(this.socket)

        this.socket.on("speed", (arg)=> {
            console.log(arg);
        })
    }


    UpdateState(data:string) {
        /*
        console.log("Updating State")
        this.ref_gameState.speed = Number(data)
        if (this.ref_gameState.speed > 10){
            this.socket.emit("speed","toofast")
        }
        */
    }

    Reconnect(){
        console.log("Reconnecting")
    }

}

export default NetworkingEngine