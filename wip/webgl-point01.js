import Canvas from 'canvas/Canvas.js';
import AddToDOM from 'dom/AddToDOM.js';
import Color from 'graphics/color/BaseColor.js';
import WebGLPointRenderer from 'renderers/point/WebGLPoint.js';

let canvas = Canvas(800, 600);

AddToDOM(canvas, 'game');

let renderer = new WebGLPointRenderer(canvas);

//  Render a 32px size GL POINT at 200x300
renderer.update(200, 300);
