import { useEffect, useRef } from "react";
import GameEngine from './GameEngine.ts';
import GameState from './GameState.ts';
import RenderEngine from './RenderEngine.ts';
import NetworkingEngine from "./NetworkingEngine.ts";


function MyThree() {
  
    // Initilize Game Engine

  const refContainer = useRef(null);
  useEffect(() => {
    var gameState = new GameState()
    var gameEngine = new GameEngine(gameState)
    var networkingEngine = new NetworkingEngine(gameState)
    gameEngine.AddCube()
    var renderEngine = new RenderEngine(gameState)
    refContainer.current && refContainer.current.appendChild( renderEngine.renderer.domElement );

    var GameLoop = function () {
      requestAnimationFrame(GameLoop);

      // Game Code
      networkingEngine.UpdateState()
      gameEngine.CalculateNextTick()
      renderEngine.CalculateNextFrame()
    };
    GameLoop();
  }, []);
  return (
    <div ref={refContainer}></div>

  );
}

export default MyThree


