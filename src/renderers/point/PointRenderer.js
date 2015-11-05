import Phaser from 'Phaser.js';
import CheckWebGL from 'device/features/WebGL.js';
import CanvasRenderer from 'renderers/point/CanvasRenderer.js';
import WebGLRenderer from 'renderers/point/WebGLRenderer.js';

export default class PointRenderer {

    constructor (canvas, type = Phaser.AUTO) {

        this.canvas = canvas;
        this.renderer = null;

        this.init(type);

    }

    init (type) {

        if ((type === Phaser.AUTO || type === Phaser.WEBGL) && CheckWebGL())
        {
            //  Create a WebGL renderer
            this.renderer = new WebGLRenderer(this.canvas);
            this.type = Phaser.WEBGL;
        }
        else
        {
            //  Create a Canvas renderer
            this.renderer = new CanvasRenderer(this.canvas);
            this.type = Phaser.CANVAS;
        }

    }

    update (x, y) {

        this.renderer.update(x, y);

    }

    render () {

        this.renderer.render();

    }

}
