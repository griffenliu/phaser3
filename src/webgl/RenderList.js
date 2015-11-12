export default class RenderList {

    constructor () {

        this.list = new Map();

    }

    clear () {

        this.list.clear();

    }

    add (texture) {

        this.list.add(texture);

    }

}