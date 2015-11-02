import Color from 'graphics/color/BaseColor.js';

export default class CanvasRenderer {

    constructor (canvas) {

        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        this.clearBeforeRender = true;
        this.transparent = false;
        this.backgroundColor = new Color();

        this.width = canvas.width;
        this.height = canvas.height;

    }

    render (root) {

        this.context.setTransform(1, 0, 0, 1, 0, 0);

        this.context.globalAlpha = 1;

        this.context.globalCompositeOperation = 'source-over';

        if (this.clearBeforeRender)
        {
            if (this.transparent)
            {
                this.context.clearRect(0, 0, this.width, this.height);
            }
            else
            {
                this.context.fillStyle = this.backgroundColor.rgba;
                this.context.fillRect(0, 0, this.width, this.height);
            }
        }

    }

}