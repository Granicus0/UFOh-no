import kaboom from 'kaboom'
import "kaboom/global";

import { spawnBossPedit, spawnAstroidBad } from "./boss.js";

// LOADERS
import { assetLoader } from "./loaders/assetLoaders/assetLoader.js";
import { menuSceneLoader } from "./loaders/sceneLoaders/menuSceneLoader.js";
import { gameSceneLoader } from "./loaders/sceneLoaders/gameSceneLoader.js";

// INITIALIZERS
import { gameInitializer } from "./initializers/gameInitializer.js";

// DATA
import {gameData, gameFunctions} from "./gameData.js";

// Load all game assets
gameInitializer.initializeKaboom();
assetLoader.loadSprites();
assetLoader.loadAseprites();
assetLoader.loadSounds();
assetLoader.loadPedits();

// Load all scenes
// Dependency injection: We make sure that all the functions that need the game data are given game data
// This means that they don't have to worry about game data, they can focus on their own responsibilities
// For example, "loadMainGameScene" should only have to worry about loading the game. Anything that it needs
// to do so, we should give to it!
menuSceneLoader.loadEnglishScene(gameData);
menuSceneLoader.loadChineseScene(gameData);
gameSceneLoader.loadMainGameScene(gameData);
gameSceneLoader.loadGameOverScene(gameData);
menuSceneLoader.displayEnglishScene(gameData);

// Initialize the game parameters
// Parameterization: Making sure that all the data in our game is in the form of a variable instead of a fixed value, so that if we ever
// want to change this value, we don't have to go to ALL the functions and places that need it, we can simply just change
// the variable where it was first made
gameInitializer.initializeGravity(gameData.data.gravity);

// replit.getData("highscore").then((highscore) => { highscore = gameData.data.highScore; })