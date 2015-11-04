import WebGLContextHandler from 'renderers/common/webgl/WebGLContextHandler.js';
import WebGLContextOptions from 'renderers/common/webgl/WebGLContextOptions.js';
import WebGLGetContext from 'renderers/common/webgl/WebGLGetContext.js';

export default class WebGLMini {

    constructor (canvas) {

        this.width = 0;
        this.height = 0;

        this.contextOptions = new WebGLContextOptions();
        this.contextHandler = new WebGLContextHandler();

        this.gl = null;

        if (canvas)
        {
            this.init(canvas);
        }

    }

    init (canvas) {

        this.width = canvas.width;
        this.height = canvas.height;

        this.contextHandler.add(canvas);

        this.gl = WebGLGetContext(canvas);

        if (!this.gl)
        {
            throw new Error('Browser does not support WebGL');
        }

    }

    render (r, g, b, a) {

        this.gl.clearColor(r, g, b, a);

        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    }

}