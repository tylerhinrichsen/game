import * as THREE from 'three';
import { useEffect, useRef } from "react";
import GameState from "./GameState"


class GameEngine{
    public ref_gameState: GameState

    constructor(gameState: GameState){
        this.ref_gameState = gameState
    }

    AddCube(){
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        this.ref_gameState.objects.push(cube)
        this.ref_gameState.scene.add(this.ref_gameState.objects[0]);
    }

    
    CalculateNextTick(){
        this.ref_gameState.objects[0].rotation.x += this.ref_gameState.speed
        this.ref_gameState.objects[0].rotation.y += this.ref_gameState.speed
    }
}

export default GameEngine