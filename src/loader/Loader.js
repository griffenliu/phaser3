import BaseLoader from 'loader/BaseLoader.js';

import Image from 'loader/filetypes/Image.js';

export default class Loader extends BaseLoader {

    constructor (game) {

        super(game);

        //  Register the default file types

    }

    image (key, url) {

        console.log('DefaultLoader.image');

        this.addFile(new Image(this, key, url));

    }
    
}