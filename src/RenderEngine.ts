import * as THREE from 'three';

import { useEffect, useRef } from "react";

import GameEngine from './GameEngine.ts';
import GameState from './GameState.ts';


class RenderEngine{
    public ref_gameState: GameState
    public camera
    public renderer: THREE.WebGLRenderer

    constructor(gameState: GameState){
        this.ref_gameState = gameState
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    CalculateNextFrame(){
        // Update Camera Position
        this.camera.position.z = this.ref_gameState.camera.position.z
        this.camera.position.x = this.ref_gameState.camera.position.x
        this.camera.position.y = this.ref_gameState.camera.position.y

        // Render Frame
        this.renderer.render(this.ref_gameState.scene, this.camera);
    }

}

  export default RenderEngine