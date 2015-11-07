export default class VertexArrayBuffer {

    constructor () {

        this.vertSize = 0;
        this.batchSize = 0;

        this.vertices = null;
        this.buffer = null;

        this.index = 0;
        this.total = 0;

    }

    create (gl, vertSize = 2, batchSize = 2000) {

        this.vertSize = vertSize;
        this.batchSize = batchSize;

        this.vertices = new Float32Array(this.batchSize * this.vertSize);

        this.index = 0;
        this.total = 0;

        this.buffer = gl.createBuffer();

        if (!this.buffer)
        {
            return -1;
        }

        this.bindBuffer(gl);

    }

    bindBuffer (gl) {

        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

    }

    //  usage = gl.DYNAMIC_DRAW, gl.STATIC_DRAW or gl.STREAM_DRAW
    bufferData (gl, usage) {

        gl.bufferData(gl.ARRAY_BUFFER, this.vertices, usage);

    }

    //  Add a single vert set into the array
    add (x, y) {

        // console.log('add', this.index, this.total);

        this.vertices[this.index++] = x;
        this.vertices[this.index++] = y;

        this.total++;

        //  return the starting index of the point
        return this.index - 2;

    }

    update (index, x, y) {

        this.vertices[index] = x;
        this.vertices[index + 1] = y;

    }

}
