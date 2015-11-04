export default class WebGLContextOptions {

    constructor (alpha = false, antialias = true, premultipliedAlpha = false, stencil = false, preserveDrawingBuffer = false) {

        this.alpha = alpha;
        this.antialias = antialias;
        this.premultipliedAlpha = premultipliedAlpha;
        this.stencil = stencil;
        this.preserveDrawingBuffer = preserveDrawingBuffer;

    }

}
