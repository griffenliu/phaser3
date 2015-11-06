import WebGLContextHandler from 'webgl/ContextHandler.js';
import WebGLContextOptions from 'webgl/ContextOptions.js';
import WebGLGetContext from 'webgl/GetContext.js';
import CompileShader from 'webgl/CompileShader.js';
import WebGLProgram from 'webgl/Program.js';
import VertexArrayBuffer from 'webgl/vbo/VertexArrayBuffer.js';
import * as Attribute from 'webgl/Attribute.js';

export default class WebGLBatchedPointRenderer {

    constructor (canvas) {

        this.width = 0;
        this.height = 0;

        this.contextOptions = WebGLContextOptions();
        this.contextHandler = new WebGLContextHandler();
        this.vertexBuffer = new VertexArrayBuffer();

        this.gl = null;
        this.program = null;

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

        this.gl.enable(this.gl.BLEND);

        //  Our super basic shaders

        let vertexSrc = [
            'attribute vec4 pointPosition;',
            'varying vec4 vColor;',

            'void main() {',
            '   gl_Position = pointPosition;',
            '   gl_PointSize = 8.0;',
            '   float uv = pointPosition.x / 800.0;',
            '   vColor = vec4(uv, 0.5, 0.0, 1.0);',
            '}'
        ];

        let fragmentSrc = [
            'precision mediump float;',
            'varying vec4 vColor;',

            'void main() {',
            '   gl_FragColor = vColor;',
            '}'
        ];

        // vec4(1.0, 0.0, 1.0, 1.0);

        let vertexShader = CompileShader(this.gl, vertexSrc, this.gl.VERTEX_SHADER);
        let fragmentShader = CompileShader(this.gl, fragmentSrc, this.gl.FRAGMENT_SHADER);

        this.program = new WebGLProgram(this.gl);

        this.program.attach(vertexShader, fragmentShader).link().use();

        //  Populate the vertex buffer

        //  2 verts per element, 10 elements in total
        this.vertexBuffer.create(this.gl, 2, 100);

        this.pos = Attribute.createFloat(this.gl, this.program.program, 'pointPosition');

    }

    addPoint (x, y) {

        //  Map to WebGL coordinate space
        const cx = this.width / 2;
        const cy = this.height / 2;

        const tx = (x - cx) / cx;
        const ty = (cy - y) / cy;

        this.vertexBuffer.add(tx, ty);

    }

    addTri (x, y, width) {

        const h = width / 2;

        this.addPoint(x, y - h);        // top
        this.addPoint(x - h, y + h);    // left
        this.addPoint(x + h, y + h);    // right

    }

    bindStatic () {

        //  As soon as you bind it, the data is written and needs re-binding if updated
        this.vertexBuffer.bind(this.gl, this.gl.STATIC_DRAW);

    }

    bindDynamic () {

        //  As soon as you bind it, the data is written and needs re-binding if updated
        this.vertexBuffer.bind(this.gl, this.gl.DYNAMIC_DRAW);

    }

    render (mode = this.gl.POINT) {

        this.gl.clearColor(0, 0, 0, 1);

        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        this.gl.drawArrays(mode, 0, this.vertexBuffer.total);

    }

    renderLines () {

        this.render(this.gl.LINES);

    }

    renderLineStrip () {

        this.render(this.gl.LINE_STRIP);

    }

    renderLineLoop () {

        this.render(this.gl.LINE_LOOP);

    }

    renderTriangles () {

        this.render(this.gl.TRIANGLES);

    }

    renderTriangleStrip () {

        this.render(this.gl.TRIANGLE_STRIP);

    }

    renderTriangleFan () {

        this.render(this.gl.TRIANGLE_FAN);

    }

}