import * as THREE from 'three';
import { useEffect, useRef } from "react";
import GameEngine from './GameEngine.ts';




class GameState{
    public scene: THREE.Scene
    public camera: {position:{x:number,y:number,z:number}}
    public objects: THREE.Object3D[] = []
    public speed: number

    constructor() {
        this.scene = new THREE.Scene()
        this.camera = {position:{x:0,y:0,z:5}}
    }
}


export default GameState