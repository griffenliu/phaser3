import Canvas from 'canvas/Canvas.js';
import AddToDOM from 'dom/AddToDOM.js';
import Color from 'graphics/color/BaseColor.js';
import WebGLMini from 'renderers/minimal/WebGLMini.js';

let canvas = Canvas(800, 600);

AddToDOM(canvas, 'game');

let renderer = new WebGLMini(canvas);

let color = new Color(50, 150, 20);

renderer.render(color.r1, color.g1, color.b1, color.a1);
