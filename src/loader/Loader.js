import BaseLoader from 'loader/BaseLoader.js';

import ImageFile from 'loader/types/ImageFile.js';
import JSONFile from 'loader/types/JSONFile.js';
import XMLFile from 'loader/types/XMLFile.js';
import TextFile from 'loader/types/TextFile.js';
import ShaderFile from 'loader/types/ShaderFile.js';
import BinaryFile from 'loader/types/BinaryFile.js';
import AtlasJSONFile from 'loader/types/AtlasJSONFile.js';
import AtlasXMLFile from 'loader/types/AtlasXMLFile.js';

export default class Loader extends BaseLoader {

    constructor (game) {

        super(game);

    }

    image (key, url = '') {

        let file = new ImageFile(this, key, url);

        file.add();

        return this;

    }
 
    images (keys, urls = null) {

        if (Array.isArray(urls))
        {
            for (let i = 0; i < keys.length; i++)
            {
                this.image(keys[i], urls[i]);
            }
        }
        else
        {
            for (let i = 0; i < keys.length; i++)
            {
                this.image(keys[i]);
            }
        }

        return this;

    }

    json (key, url = '') {

        let file = new JSONFile(this, key, url);

        file.add();

        return this;

    }

    text (key, url = '') {

        let file = new TextFile(this, key, url);

        file.add();

        return this;

    }

    shader (key, url = '') {

        let file = new ShaderFile(this, key, url);

        file.add();

        return this;

    }

    xml (key, url = '') {

        let file = new XMLFile(this, key, url);

        file.add();

        return this;

    }

    binary (key, url = '', callback = null) {

        let file = new BinaryFile(this, key, url, callback);

        file.add();

        return this;

    }

    atlas (key, textureURL = '', atlasURL = '', atlasData = null) {

        let file = new AtlasJSONFile(this, key, textureURL, atlasURL, atlasData);

        file.add();

        return this;

    }

    atlasXML (key, textureURL = '', atlasURL = '', atlasData = null) {

        let file = new AtlasXMLFile(this, key, textureURL, atlasURL, atlasData);

        file.add();

        return this;

    }

}