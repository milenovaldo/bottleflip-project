/// <reference path='./vendor/babylon.module.d.ts' />

// getting the canvas
var canvas = document.getElementById("renderCanvas");

// create engine
var engine = new BABYLON.Engine(canvas, true);

// create scene function
var createScene = function() {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

    const box = BABYLON.MeshBuilder.CreateBox("box", {});

    return scene;
}

// call createScene
var scene = createScene();

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function() {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function() {
    engine.resize();
});