import Canvas from 'canvas/Canvas.js';
import AddToDOM from 'dom/AddToDOM.js';
// import Color from 'graphics/color/BaseColor.js';
import WebGLBatchedPointRenderer from 'renderers/batch_point/WebGLBatchedPoint.js';

let canvas = Canvas(800, 600);

AddToDOM(canvas, 'game');

let renderer = new WebGLBatchedPointRenderer(canvas);

renderer.render();

