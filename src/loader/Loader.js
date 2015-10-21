import BaseLoader from 'loader/BaseLoader.js';

import ImageFile from 'loader/types/ImageFile.js';
import JSONFile from 'loader/types/JSONFile.js';
import AtlasJSONFile from 'loader/types/AtlasJSONFile.js';

export default class Loader extends BaseLoader {

    constructor (game) {

        super(game);

    }

    image (key, url = '') {

        let file = new ImageFile(this, key, url);

        file.add();

        return this;

    }
 
    atlas (key, textureURL = '', atlasURL = '', atlasData = null) {

        let file = new AtlasJSONFile(this, key, textureURL, atlasURL, atlasData);

        file.add();

        return this;

    }

}